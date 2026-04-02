import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Torus, OrbitControls, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function YarnBall() {
  const groupRef = useRef()
  const torus1Ref = useRef()
  const torus2Ref = useRef()
  const torus3Ref = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.2
    }
    if (torus1Ref.current) torus1Ref.current.rotation.x = t * 0.5
    if (torus2Ref.current) torus2Ref.current.rotation.y = t * 0.4
    if (torus3Ref.current) torus3Ref.current.rotation.z = t * 0.6
  })

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={groupRef}>
        {/* Core sphere */}
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#0d9488"
            distort={0.15}
            speed={2}
            roughness={0.3}
            metalness={0.1}
            emissive="#0f766e"
            emissiveIntensity={0.2}
          />
        </Sphere>

        {/* Yarn wrap rings */}
        <Torus ref={torus1Ref} args={[1.05, 0.06, 8, 60]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#2dd4bf" roughness={0.6} emissive="#14b8a6" emissiveIntensity={0.3} />
        </Torus>
        <Torus ref={torus2Ref} args={[1.05, 0.05, 8, 60]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#5eead4" roughness={0.6} emissive="#2dd4bf" emissiveIntensity={0.2} />
        </Torus>
        <Torus ref={torus3Ref} args={[1.05, 0.04, 8, 60]} rotation={[0, 0, Math.PI / 3]}>
          <meshStandardMaterial color="#7fffd4" roughness={0.6} emissive="#5eead4" emissiveIntensity={0.15} />
        </Torus>
        <Torus args={[1.05, 0.05, 8, 60]} rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#99f6e4" roughness={0.6} emissive="#7fffd4" emissiveIntensity={0.1} />
        </Torus>
        <Torus args={[1.05, 0.04, 8, 60]} rotation={[Math.PI / 6, -Math.PI / 4, Math.PI / 5]}>
          <meshStandardMaterial color="#14b8a6" roughness={0.6} emissive="#0d9488" emissiveIntensity={0.3} />
        </Torus>
      </group>
    </Float>
  )
}

function FloatingParticles() {
  const count = 60
  const mesh = useRef()

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (mesh.current) {
      mesh.current.rotation.y = t * 0.03
      mesh.current.rotation.x = Math.sin(t * 0.02) * 0.1
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#5eead4"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function YarnCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#7fffd4" />
      <directionalLight position={[-5, -3, -2]} intensity={0.4} color="#0d9488" />
      <pointLight position={[0, 0, 3]} intensity={0.8} color="#2dd4bf" />
      <FloatingParticles />
      <YarnBall />
    </Canvas>
  )
}
