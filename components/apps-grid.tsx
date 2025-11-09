
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Video, Bot, FileText, Database, Cpu, Image, Headphones, Scroll } from 'lucide-react'
import Link from 'next/link'

const apps = [
  {
    id: 'annalysis-media',
    name: 'annalysis-media',
    title: 'Análisis Profesional de Vídeo',
    description: 'Plataforma profesional de análisis de vídeo impulsada por IA. Analiza vídeos con tecnología de vanguardia, extrae metadatos, transcribe audio, detecta objetos y exporta resultados en múltiples formatos profesionales.',
    icon: Video,
    color: 'from-blue-500 to-purple-600',
    features: ['Extracción de metadatos', 'Transcripción automática', 'Detección de objetos']
  },
  {
    id: 'annalogica',
    name: 'annalogica',
    title: 'Transcripción Inteligente',
    description: 'Para transcribir, analizar y gestionar tus contenidos de audio, vídeo y documentos con inteligencia artificial.',
    icon: Bot,
    color: 'from-green-500 to-teal-600',
    features: ['Transcripción AI', 'Análisis de contenido', 'Gestión inteligente']
  },
  {
    id: 'verbadoc-salud',
    name: 'verbadoc-salud',
    title: 'Informes Clínicos',
    description: 'Crear Plantilla para Informes Clínicos.',
    icon: FileText,
    color: 'from-red-500 to-pink-600',
    features: ['Plantillas médicas', 'Informes automatizados', 'Cumplimiento normativo']
  },
  {
    id: 'verbadoc-europa',
    name: 'verbadoc-europa',
    title: 'Extractor de Datos',
    description: 'Aprende a usar el Extractor de Datos para departamento de todo tipo, en especial, departamentos contabilidad, finanzas, marketing, legal y cualquiera que pueda necesitar extraer datos de cualquier documento o imagen con datos.',
    icon: Database,
    color: 'from-yellow-500 to-orange-600',
    features: ['Extracción automatizada', 'Múltiples formatos', 'Análisis empresarial']
  },
  {
    id: 'annamets',
    name: 'annamets',
    title: 'Constructor METS XML',
    description: 'METS XML Builder - Crea archivos METS profesionales para tus objetos digitales.',
    icon: Cpu,
    color: 'from-purple-500 to-indigo-600',
    features: ['Estándares METS', 'Objetos digitales', 'Metadatos estructurados']
  },
  {
    id: 'media-enhancer',
    name: 'media-enhancer',
    title: 'Editor VHS Profesional',
    description: 'Edita tus Videos VHS Como un Profesional. Digitaliza y mejora tus recuerdos familiares en video o fotos. Editor simple para usuarios domésticos o herramientas profesionales con IA para creadores de contenido.',
    icon: Image,
    color: 'from-cyan-500 to-blue-600',
    features: ['Digitalización VHS', 'Mejora con IA', 'Editor profesional']
  },
  {
    id: 'audiovision-pro',
    name: 'audiovision pro',
    title: 'Creador de Vídeos',
    description: 'Proporciona el audio, la imagen y los subtítulos opcionales para crear tu video.',
    icon: Headphones,
    color: 'from-pink-500 to-rose-600',
    features: ['Creación automática', 'Subtítulos integrados', 'Producción IA']
  },
  {
    id: 'scriptorium',
    name: 'scriptorium',
    title: 'Análisis de Documentos Históricos',
    description: 'Tecnologías avanzadas de IA para el análisis profundo de documentos históricos.',
    icon: Scroll,
    color: 'from-amber-500 to-yellow-600',
    features: ['OCR avanzado', 'Análisis histórico', 'Preservación digital']
  }
]

export function AppsGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="apps" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Nuestras{' '}
            <span className="gradient-secondary bg-clip-text text-transparent">8 Aplicaciones</span>{' '}
            de IA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre las herramientas que transformarán tu flujo de trabajo audiovisual
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {apps.map((app, index) => {
            const Icon = app.icon
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group glass-card p-8 rounded-3xl hover:bg-accent/10 transition-all duration-200 tech-glow"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
                    <div className="text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
                      {app.name}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {app.description}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-semibold text-primary">Características principales:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={`/apps/${app.id}`}>
                  <Button className={`w-full bg-gradient-to-r ${app.color} text-white hover:opacity-90 transition-opacity`}>
                    Conocer Más
                  </Button>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/contacto">
            <Button size="lg" variant="outline" className="glass-card hover:bg-accent/50">
              ¿Necesitas una Suite Completa?
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
