export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,184,0,0.1)_0%,transparent_20%),radial-gradient(circle_at_80%_70%,rgba(255,184,0,0.1)_0%,transparent_20%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_10%_10%,rgba(255,255,255,0.8)_50%,transparent_100%),radial-gradient(1px_1px_at_20%_50%,rgba(255,255,255,0.8)_50%,transparent_100%),radial-gradient(1px_1px_at_30%_80%,rgba(255,255,255,0.8)_50%,transparent_100%),radial-gradient(1px_1px_at_70%_20%,rgba(255,255,255,0.8)_50%,transparent_100%),radial-gradient(1px_1px_at_90%_40%,rgba(255,255,255,0.8)_50%,transparent_100%)]"></div>
    </div>
  )
}

