
'use client'

import { AppPageLayout } from '@/components/app-page-layout'
import { Image, Zap, Sparkles, Video } from 'lucide-react'

const features = [
  {
    icon: Video,
    title: 'Digitalización VHS',
    description: 'Convierte y digitaliza tus viejas cintas VHS con calidad profesional'
  },
  {
    icon: Zap,
    title: 'Mejora con IA',
    description: 'Algoritmos de IA para mejorar la calidad de imagen y audio'
  },
  {
    icon: Sparkles,
    title: 'Editor Profesional',
    description: 'Herramientas profesionales para creadores de contenido'
  },
  {
    icon: Image,
    title: 'Restauración de Fotos',
    description: 'Mejora y restaura fotografías familiares antiguas'
  }
]

const instructions = [
  'Carga tu vídeo VHS digitalizado o fotografía antigua',
  'Selecciona el nivel de mejora que deseas aplicar',
  'Ajusta los parámetros de restauración según tus preferencias',
  'Descarga el contenido mejorado en alta calidad'
]

const useCases = [
  'Digitalización de recuerdos familiares',
  'Restauración de material audiovisual histórico',
  'Mejora de contenido para redes sociales',
  'Preparación de material para documentales',
  'Conservación de patrimonio audiovisual'
]

export default function MediaEnhancerPage() {
  return (
    <AppPageLayout
      appName="media-enhancer"
      title="Editor VHS Profesional"
      description="Edita tus Videos VHS Como un Profesional. Digitaliza y mejora tus recuerdos familiares en video o fotos. Editor simple para usuarios domésticos o herramientas profesionales con IA para creadores de contenido."
      icon={Image}
      color="from-cyan-500 to-blue-600"
      features={features}
      instructions={instructions}
      useCases={useCases}
      accessUrl="https://media-enhancer.vercel.app"
    />
  )
}
