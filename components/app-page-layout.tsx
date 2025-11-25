
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Play, CheckCircle, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface AppPageLayoutProps {
  appName: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  features: Feature[]
  instructions: string[]
  useCases: string[]
  accessUrl: string
}

export function AppPageLayout({
  appName,
  title,
  description,
  icon: Icon,
  color,
  features,
  instructions,
  useCases,
  accessUrl
}: AppPageLayoutProps) {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Back Button */}
            <div className="flex justify-start">
              <Link href="/#apps">
                <Button variant="outline" className="glass-card">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a Aplicaciones
                </Button>
              </Link>
            </div>

            {/* App Icon and Title */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className={`w-24 h-24 bg-gradient-to-r ${color} rounded-3xl flex items-center justify-center tech-glow animate-float`}>
                  <Icon className="h-12 w-12 text-white" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono bg-muted/50 px-3 py-1 rounded-full inline-block">
                  {appName}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  {title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  {description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {accessUrl !== '#' ? (
                  <Button asChild size="lg" className={`bg-gradient-to-r ${color} text-white hover:opacity-90 tech-glow group`}>
                    <Link href={accessUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Acceder a la Aplicación
                    </Link>
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${color} text-white hover:opacity-90 tech-glow group`}
                    onClick={() => alert(`La aplicación ${appName} estará disponible próximamente. Te notificaremos cuando esté lista para usar.`)}
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Acceder a la Aplicación
                    <span className="ml-2 text-xs opacity-75">(Próximamente)</span>
                  </Button>
                )}
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glass-card hover:bg-accent/50"
                  onClick={() => alert(`El vídeo de demostración de ${appName} estará disponible próximamente. Mientras tanto, puedes contactarnos para más información.`)}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Ver Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Características Principales
            </h2>
            <p className="text-xl text-muted-foreground">
              Todo lo que necesitas saber sobre esta aplicación
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="group glass-card p-8 rounded-2xl hover:bg-accent/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <FeatureIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className={`h-6 w-6 text-green-500`} />
                  <h2 className="text-3xl font-bold">Cómo Usar la Aplicación</h2>
                </div>
                <p className="text-muted-foreground">
                  Sigue estos sencillos pasos para comenzar a utilizar {appName}
                </p>
              </div>

              <div className="space-y-4">
                {instructions.map((instruction, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 bg-gradient-to-r ${color} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1`}>
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground flex-1 pt-1">{instruction}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Lightbulb className={`h-6 w-6 text-yellow-500`} />
                  <h2 className="text-3xl font-bold">Casos de Uso</h2>
                </div>
                <p className="text-muted-foreground">
                  Descubre las diferentes formas en que puedes aprovechar esta herramienta
                </p>
              </div>

              <div className="space-y-3">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center space-x-3 glass-card p-4 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <p className="text-muted-foreground">{useCase}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="glass-card p-12 rounded-3xl space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-xl text-muted-foreground">
              Accede a {appName} y transforma tu flujo de trabajo con IA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {accessUrl !== '#' ? (
                <Button asChild size="lg" className={`bg-gradient-to-r ${color} text-white hover:opacity-90 tech-glow`}>
                  <Link href={accessUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Comenzar Ahora
                  </Link>
                </Button>
              ) : (
                <Button 
                  size="lg" 
                  className={`bg-gradient-to-r ${color} text-white hover:opacity-90 tech-glow`}
                  onClick={() => alert(`¡Gracias por tu interés en ${appName}! La aplicación estará disponible próximamente. Te contactaremos cuando esté lista.`)}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Comenzar Ahora
                  <span className="ml-2 text-xs opacity-75">(Próximamente)</span>
                </Button>
              )}
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="glass-card hover:bg-accent/50">
                  Contactar para Más Información
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
