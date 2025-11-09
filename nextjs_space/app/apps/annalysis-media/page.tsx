
'use client'

import { AppPageLayout } from '@/components/app-page-layout'
import { Video, Play, BarChart, Download } from 'lucide-react'

const features = [
  {
    icon: Video,
    title: 'Análisis de Vídeo Avanzado',
    description: 'Tecnología de vanguardia para analizar cualquier tipo de vídeo profesional'
  },
  {
    icon: Play,
    title: 'Transcripción Automática',
    description: 'Convierte automáticamente el audio en texto con alta precisión'
  },
  {
    icon: BarChart,
    title: 'Extracción de Metadatos',
    description: 'Obtén información detallada sobre resolución, codecs, duración y más'
  },
  {
    icon: Download,
    title: 'Múltiples Formatos de Exportación',
    description: 'Exporta resultados en JSON, XML, CSV y otros formatos profesionales'
  }
]

const instructions = [
  'Sube tu archivo de vídeo a la plataforma',
  'Selecciona las opciones de análisis que necesites',
  'Espera a que la IA procese tu contenido',
  'Descarga los resultados en el formato que prefieras'
]

const useCases = [
  'Análisis de contenido para archivos audiovisuales',
  'Catalogación automática de bibliotecas de vídeo',
  'Extracción de metadatos para post-producción',
  'Transcripción para subtitulado automático',
  'Análisis forense de contenido audiovisual'
]

export default function AnalysisMediaPage() {
  return (
    <AppPageLayout
      appName="annalysis-media"
      title="Análisis Profesional de Vídeo"
      description="Plataforma profesional de análisis de vídeo impulsada por IA. Analiza vídeos con tecnología de vanguardia, extrae metadatos, transcribe audio, detecta objetos y exporta resultados en múltiples formatos profesionales."
      icon={Video}
      color="from-blue-500 to-purple-600"
      features={features}
      instructions={instructions}
      useCases={useCases}
      accessUrl="#"
    />
  )
}
