import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Environment, Float } from '@react-three/drei'

function createWraps() {
  const wraps = []

  for (let index = 0; index < 26; index += 1) {
    wraps.push({
      color: ['#0f766e', '#0d9488', '#14b8a6'][index % 3],
      radius: 0.975 + (index % 5) * 0.006,
      tube: 0.048 + (index % 3) * 0.003,
      rotation: [
        -0.8 + index * 0.055,
        index * 0.13,
        -0.18 + (index % 6) * 0.035,
      ],
    })
  }

  for (let index = 0; index < 18; index += 1) {
    wraps.push({
      color: ['#115e59', '#0f766e', '#0d9488'][index % 3],
      radius: 0.97 + (index % 4) * 0.006,
      tube: 0.046 + (index % 2) * 0.003,
      rotation: [
        0.28 + index * 0.07,
        0.2 + index * 0.19,
        -1 + index * 0.065,
      ],
    })
  }

  for (let index = 0; index < 12; index += 1) {
    wraps.push({
      color: ['#0d9488', '#14b8a6', '#0f766e'][index % 3],
      radius: 0.965 + (index % 3) * 0.005,
      tube: 0.042 + (index % 2) * 0.002,
      rotation: [
        -0.32 + index * 0.06,
        0.1 + index * 0.27,
        0.5 - index * 0.055,
      ],
    })
  }

  return wraps
}

function YarnBall() {
  const groupRef = useRef()
  const wrapRefs = useRef([])
  const wraps = useMemo(() => createWraps(), [])

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.2
      groupRef.current.rotation.x = Math.sin(t * 0.35) * 0.05
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.035
    }

    wrapRefs.current.forEach((wrap, index) => {
      if (!wrap) return
      wrap.rotation.z = wraps[index].rotation[2] + Math.sin(t * 0.45 + index * 0.35) * 0.012
      wrap.rotation.x = wraps[index].rotation[0] + Math.cos(t * 0.3 + index * 0.22) * 0.01
    })

  })

  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.45}>
      <group ref={groupRef} position={[0, 0.08, 0]}>
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.9, 64, 64]} />
          <meshStandardMaterial color="#8ccfc1" roughness={1} metalness={0.01} />
        </mesh>

        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.82, 48, 48]} />
          <meshStandardMaterial color="#76c4b6" roughness={1} metalness={0.01} />
        </mesh>

        {wraps.map((wrap, index) => (
          <group
            key={index}
            ref={(node) => {
              wrapRefs.current[index] = node
            }}
            rotation={wrap.rotation}
          >
            <mesh castShadow receiveShadow>
              <torusGeometry args={[wrap.radius, wrap.tube, 20, 112]} />
              <meshStandardMaterial color={wrap.color} roughness={0.86} metalness={0.02} />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  )
}

function FloatingDust() {
  return null
}

export default function YarnCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0.12, 4.15], fov: 35 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={['#e8f8f4', 4.8, 8]} />
      <ambientLight intensity={1.05} color="#fbfffe" />
      <hemisphereLight intensity={1} color="#f4fffc" groundColor="#c9eee7" />
      <spotLight
        castShadow
        position={[3.5, 5, 4]}
        angle={0.42}
        penumbra={1}
        intensity={1.5}
        color="#ffffff"
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-3, 1.5, 2]} intensity={0.7} color="#99e5d9" />
      <Environment preset="studio" />
      <FloatingDust />
      <YarnBall />
      <ContactShadows position={[0, -1.45, 0]} opacity={0.22} scale={4} blur={2.6} far={2.1} color="#7fcfc1" />
    </Canvas>
  )
}
