
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'mediasolam - Soluciones IA para Medios Audiovisuales',
  description: 'mediasolam es un espacio donde se encuentran todas las apps desarrolladas por nuestro equipo de IA para el sector audiovisual y documental.',
  keywords: 'IA, inteligencia artificial, medios audiovisuales, análisis de video, transcripción, documentos, archivos digitales',
  authors: [{ name: 'mediasolam Team' }],
  openGraph: {
    title: 'mediasolam - Soluciones IA para Medios Audiovisuales',
    description: 'Descubre nuestras 8 aplicaciones de IA para el análisis de medios, transcripción y gestión de archivos audiovisuales.',
    url: 'https://www.mediasolam.eu',
    siteName: 'mediasolam',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'mediasolam - Soluciones IA para Medios Audiovisuales',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
