
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Bot, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {/* Floating Icon */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="relative">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center tech-glow">
                <Bot className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="h-3 w-3 text-yellow-900" />
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Inteligencia Artificial para{' '}
              <span className="gradient-primary bg-clip-text text-transparent">
                Medios Audiovisuales
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              MediaSolam es un espacio donde se encuentran todas las apps desarrolladas por nuestro equipo, 
              para que las puedas conocer y utilizar en tus proyectos profesionales.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-center"
          >
            <div className="space-y-1">
              <div className="text-3xl font-bold gradient-tech bg-clip-text text-transparent">8</div>
              <div className="text-sm text-muted-foreground">Aplicaciones IA</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold gradient-secondary bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-muted-foreground">Profesional</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold gradient-ai bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-muted-foreground">Disponible</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="#apps">
              <Button size="lg" className="gradient-primary text-white hover:opacity-90 tech-glow group">
                Explorar Aplicaciones
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/sobre-nosotros">
              <Button size="lg" variant="outline" className="glass-card hover:bg-accent/50">
                Conocer Más
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
