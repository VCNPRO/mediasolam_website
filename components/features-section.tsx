
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Bot, Zap, Shield, Cpu, Video, FileText } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Inteligencia Artificial Avanzada',
    description: 'Utilizamos las últimas tecnologías de IA para análisis profundo de contenidos audiovisuales.'
  },
  {
    icon: Video,
    title: 'Análisis de Vídeo',
    description: 'Extracción automática de metadatos, transcripción de audio y detección de objetos.'
  },
  {
    icon: FileText,
    title: 'Procesamiento de Documentos',
    description: 'Análisis inteligente de documentos históricos y extracción de datos empresariales.'
  },
  {
    icon: Zap,
    title: 'Procesamiento Rápido',
    description: 'Algoritmos optimizados para resultados rápidos sin comprometer la calidad.'
  },
  {
    icon: Shield,
    title: 'Seguridad Garantizada',
    description: 'Tus datos están protegidos con los más altos estándares de seguridad.'
  },
  {
    icon: Cpu,
    title: 'Tecnología de Vanguardia',
    description: 'Implementamos las últimas innovaciones en aprendizaje automático y procesamiento de medios.'
  }
]

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            ¿Por qué elegir{' '}
            <span className="gradient-primary bg-clip-text text-transparent">mediasolam</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestras soluciones de IA están diseñadas específicamente para profesionales del sector audiovisual
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group glass-card p-6 rounded-2xl hover:bg-accent/10 transition-all duration-200"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 gradient-tech rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
