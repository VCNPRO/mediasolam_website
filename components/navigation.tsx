
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Menu, X, Bot, Cpu, FileText, Video, Image, Scroll, Database } from 'lucide-react'

const apps = [
  {
    name: 'annalogica',
    description: 'Transcripción y análisis de contenidos',
    icon: Bot,
    href: '/apps/annalogica'
  },
  {
    name: 'verbadoc-enterprise',
    description: 'Extractor de datos de alto volumen',
    icon: Database,
    href: '/apps/verbadoc-enterprise'
  },
  {
    name: 'verbadoc-europa',
    description: 'Extractor de datos empresariales',
    icon: Database,
    href: '/apps/verbadoc-europa'
  },
  {
    name: 'verbadoc-salud',
    description: 'Plantillas para informes clínicos',
    icon: FileText,
    href: '/apps/verbadoc-salud'
  },
  {
    name: 'scriptoriumAI',
    description: 'Búsqueda inteligente y gestión documental',
    icon: Scroll,
    href: '/apps/scriptoriumAI'
  },
  {
    name: 'annamets',
    description: 'Constructor de archivos METS XML',
    icon: Cpu,
    href: '/apps/annamets'
  },
  {
    name: 'media-enhancer',
    description: 'Editor profesional de vídeos VHS',
    icon: Image,
    href: '/apps/media-enhancer'
  },
  {
    name: 'annalysis-media',
    description: 'Análisis profesional de vídeo con IA',
    icon: Video,
    href: '/apps/annalysis-media'
  }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
              mediasolam
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Inicio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Aplicaciones</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                      {apps.map((app) => {
                        const Icon = app.icon
                        return (
                          <Link
                            key={app.name}
                            href={app.href}
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              <Icon className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium">{app.name}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {app.description}
                            </p>
                          </Link>
                        )
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/sobre-nosotros" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Sobre Nosotros
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contacto" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Contacto
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/#apps">
              <Button className="gradient-primary text-white hover:opacity-90">
                Explorar Apps
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-2 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              
              <div className="px-3 py-2 text-base font-medium text-muted-foreground">
                Aplicaciones
              </div>
              {apps.map((app) => {
                const Icon = app.icon
                return (
                  <Link
                    key={app.name}
                    href={app.href}
                    className="flex items-center px-6 py-2 text-sm hover:bg-accent rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {app.name}
                  </Link>
                )
              })}
              
              <Link
                href="/sobre-nosotros"
                className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nosotros
              </Link>
              
              <Link
                href="/contacto"
                className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
