
'use client'

import { AppPageLayout } from '@/components/app-page-layout'
import { Headphones, Video, Type, Wand2 } from 'lucide-react'

const features = [
  {
    icon: Headphones,
    title: 'Sincronización de Audio',
    description: 'Sincroniza perfectamente audio con imágenes para crear vídeos'
  },
  {
    icon: Type,
    title: 'Subtítulos Integrados',
    description: 'Añade subtítulos automáticamente con opciones de personalización'
  },
  {
    icon: Wand2,
    title: 'Producción IA',
    description: 'La IA se encarga de todos los aspectos técnicos de la producción'
  },
  {
    icon: Video,
    title: 'Creación Automática',
    description: 'Genera vídeos profesionales de forma completamente automática'
  }
]

const instructions = [
  'Carga el archivo de audio que deseas utilizar',
  'Selecciona o carga la imagen de fondo',
  'Añade subtítulos si los necesitas (opcional)',
  'Genera automáticamente tu vídeo profesional'
]

const useCases = [
  'Creación de vídeos para podcasts',
  'Producción de contenido para redes sociales',
  'Vídeos educativos y tutoriales',
  'Presentaciones audiovisuales',
  'Contenido para marketing digital'
]

export default function AudiovisionProPage() {
  return (
    <AppPageLayout
      appName="audiovision-pro"
      title="Creador de Vídeos"
      description="Proporciona el audio, la imagen y los subtítulos opcionales para crear tu video."
      icon={Headphones}
      color="from-pink-500 to-rose-600"
      features={features}
      instructions={instructions}
      useCases={useCases}
      accessUrl="https://verbadocpro.eu"
    />
  )
}
