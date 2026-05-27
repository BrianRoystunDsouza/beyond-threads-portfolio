export default function BrandLogo({ className = '', priority = false }) {
  return (
    <img
      src="/BeyondThreadsLogo.jpeg"
      alt="Beyond Threads by Prapti logo"
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
