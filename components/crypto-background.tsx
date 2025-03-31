"use client"

import { useEffect, useRef } from "react"

export default function CryptoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Crypto symbols
    const cryptoSymbols = ["₿", "Ξ", "Ł", "Ð", "₳", "◎"]

    // Optimized: Reduced particle count based on screen size
    const particleCount = Math.min(Math.floor(window.innerWidth / 120), 30)
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      symbol?: string
      isSymbol: boolean
      hue: number
    }[] = []

    for (let i = 0; i < particleCount; i++) {
      const isSymbol = Math.random() < 0.2 // Reduced symbol probability
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: isSymbol ? 16 : Math.random() * 3 + 1.5,
        speedX: (Math.random() - 0.5) * 0.1, // Reduced speed
        speedY: (Math.random() - 0.5) * 0.1, // Reduced speed
        opacity: isSymbol ? Math.random() * 0.4 + 0.3 : Math.random() * 0.3 + 0.15,
        symbol: isSymbol ? cryptoSymbols[Math.floor(Math.random() * cryptoSymbols.length)] : undefined,
        isSymbol,
        hue: Math.random() * 30 + 40, // Gold/amber hue range
      })
    }

    // Animation loop
    let animationFrameId: number
    let lastTime = 0
    const fpsInterval = 1000 / 30 // Limit to 30 FPS for better performance

    const render = (currentTime: number) => {
      animationFrameId = window.requestAnimationFrame(render)

      // Throttle the frame rate
      const elapsed = currentTime - lastTime
      if (elapsed < fpsInterval) return

      lastTime = currentTime - (elapsed % fpsInterval)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Draw particle
        if (particle.isSymbol && particle.symbol) {
          // Draw symbol
          ctx.font = `bold ${particle.size}px Arial`
          ctx.fillStyle = `hsla(45, 100%, 60%, ${particle.opacity + 0.2})`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(particle.symbol, particle.x, particle.y)
        } else {
          // Draw node
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${particle.hue}, 100%, 70%, ${particle.opacity + 0.2})`
          ctx.fill()
        }
      })
    }

    animationFrameId = window.requestAnimationFrame(render)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-transparent pointer-events-none" aria-hidden="true" />
  )
}

