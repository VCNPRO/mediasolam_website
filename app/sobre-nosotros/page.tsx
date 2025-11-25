
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Users, Target, MapPin, Mail, Bot } from 'lucide-react'

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex justify-center">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center tech-glow animate-float">
                <Bot className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Sobre{' '}
              <span className="gradient-primary bg-clip-text text-transparent">
                mediasolam
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              mediasolam es un espacio donde se encuentran todas las apps desarrolladas por nuestro equipo, 
              para que las puedas conocer y aprovechar al máximo en tus proyectos profesionales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info Section */}
      <section ref={ref} className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">
                Innovación en{' '}
                <span className="gradient-secondary bg-clip-text text-transparent">
                  Inteligencia Artificial
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Desarrollamos soluciones especializadas de inteligencia artificial para el sector de medios 
                audiovisuales y documentales. Nuestro equipo combina experiencia técnica con un profundo 
                entendimiento de las necesidades del sector.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada una de nuestras 8 aplicaciones ha sido diseñada para resolver problemas específicos 
                que enfrentan los profesionales diariamente, desde el análisis de vídeo hasta la 
                transcripción automática y la gestión de documentos históricos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Building2 className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">videoconversion media lab, s.l.</h3>
              </div>
              <p className="text-muted-foreground">
                mediasolam es desarrollado por <strong>videoconversion media lab, s.l.</strong>, 
                una empresa especializada en tecnologías de conversión y análisis de medios audiovisuales 
                con sede en Barcelona, España.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Barcelona, España</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">santi@vcnpro.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Nuestros{' '}
              <span className="gradient-tech bg-clip-text text-transparent">
                Valores
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Los principios que guían nuestro desarrollo de soluciones IA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Precisión',
                description: 'Desarrollamos algoritmos de alta precisión que entregan resultados confiables para profesionales del sector audiovisual.'
              },
              {
                icon: Users,
                title: 'Usabilidad',
                description: 'Diseñamos interfaces intuitivas que permiten a los usuarios aprovechar el poder de la IA sin complejidades técnicas.'
              },
              {
                icon: Bot,
                title: 'Innovación',
                description: 'Implementamos las últimas tecnologías de IA para mantener nuestras soluciones a la vanguardia de la industria.'
              }
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="text-center space-y-4 glass-card p-8 rounded-2xl hover:bg-accent/10 transition-all duration-300"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 gradient-ai rounded-2xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass-card p-12 rounded-3xl space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Nuestra{' '}
              <span className="gradient-primary bg-clip-text text-transparent">
                Misión
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Democratizar el acceso a tecnologías de inteligencia artificial avanzadas para 
              profesionales del sector audiovisual, facilitando herramientas que mejoren la 
              eficiencia, calidad y alcance de sus proyectos.
            </p>
            <p className="text-lg text-muted-foreground">
              Creemos que la IA debe ser una herramienta accesible que potencie la creatividad 
              humana, no que la reemplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Website Info */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Visítanos en</h2>
            <div className="text-2xl font-bold gradient-tech bg-clip-text text-transparent">
              www.mediasolam.eu
            </div>
            <p className="text-muted-foreground">
              Explora todas nuestras aplicaciones y descubre cómo la IA puede transformar tu flujo de trabajo
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
