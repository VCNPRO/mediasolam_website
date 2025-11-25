
import Link from 'next/link'
import { Bot, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                mediasolam
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Soluciones de inteligencia artificial para el sector audiovisual y documental. 
              Desarrollado por videoconversion media lab, s.l.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link href="/sobre-nosotros" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre Nosotros
              </Link>
              <Link href="/contacto" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>santi@vcnpro.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Barcelona, España</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 mediasolam - videoconversion media lab, s.l. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              www.mediasolam.eu
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
