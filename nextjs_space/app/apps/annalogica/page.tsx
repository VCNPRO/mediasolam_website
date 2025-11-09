
'use client'

import { AppPageLayout } from '@/components/app-page-layout'
import { Bot, FileAudio, FileVideo, FileText } from 'lucide-react'

const features = [
  {
    icon: FileAudio,
    title: 'Transcripción de Audio',
    description: 'Convierte archivos de audio a texto con precisión profesional'
  },
  {
    icon: FileVideo,
    title: 'Análisis de Vídeo',
    description: 'Extrae y analiza contenido de archivos de vídeo automáticamente'
  },
  {
    icon: FileText,
    title: 'Gestión de Documentos',
    description: 'Organiza y analiza documentos con inteligencia artificial'
  },
  {
    icon: Bot,
    title: 'IA Especializada',
    description: 'Algoritmos optimizados para contenido audiovisual y documental'
  }
]

const instructions = [
  'Carga tus archivos de audio, vídeo o documentos',
  'Selecciona el tipo de análisis que deseas realizar',
  'La IA procesará automáticamente tu contenido',
  'Revisa y exporta los resultados generados'
]

const useCases = [
  'Transcripción de entrevistas y conferencias',
  'Análisis de contenido para investigación',
  'Gestión de archivos multimedia empresariales',
  'Creación de resúmenes automáticos',
  'Indexación de contenido para búsquedas'
]

export default function AnnalogicaPage() {
  return (
    <AppPageLayout
      appName="annalogica"
      title="Transcripción Inteligente"
      description="Para transcribir, analizar y gestionar tus contenidos de audio, vídeo y documentos con inteligencia artificial."
      icon={Bot}
      color="from-green-500 to-teal-600"
      features={features}
      instructions={instructions}
      useCases={useCases}
      accessUrl="#"
    />
  )
}
