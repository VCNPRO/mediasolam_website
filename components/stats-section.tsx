
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const stats = [
  {
    number: 8,
    label: 'Aplicaciones IA',
    suffix: '',
    description: 'Herramientas especializadas'
  },
  {
    number: 100,
    label: 'Profesional',
    suffix: '%',
    description: 'Calidad garantizada'
  },
  {
    number: 24,
    label: 'Disponibilidad',
    suffix: '/7',
    description: 'Acceso continuo'
  },
  {
    number: 1000,
    label: 'Horas Ahorradas',
    suffix: '+',
    description: 'En procesamiento manual'
  }
]

function CountUpNumber({ end, duration = 2000, inView }: { end: number, duration?: number, inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(end * progress))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, inView])

  return <span>{count}</span>
}

export function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            MediaSolam en{' '}
            <span className="gradient-tech bg-clip-text text-transparent">Números</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados que hablan por sí solos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center space-y-3 glass-card p-8 rounded-2xl group hover:bg-accent/10 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-primary bg-clip-text text-transparent">
                <CountUpNumber end={stat.number} inView={inView} />
                {stat.suffix}
              </div>
              <div className="text-xl font-semibold">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
