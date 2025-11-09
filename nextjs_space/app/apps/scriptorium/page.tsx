
'use client'

import { AppPageLayout } from '@/components/app-page-layout'
import { Scroll, Eye, BookOpen, Archive } from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: 'OCR Avanzado',
    description: 'Reconocimiento óptico de caracteres especializado en textos antiguos'
  },
  {
    icon: BookOpen,
    title: 'Análisis Histórico',
    description: 'Algoritmos entrenados específicamente para documentos históricos'
  },
  {
    icon: Archive,
    title: 'Preservación Digital',
    description: 'Conserva y digitaliza documentos históricos de valor incalculable'
  },
  {
    icon: Scroll,
    title: 'Manuscritos Antiguos',
    description: 'Especializado en el análisis de manuscritos y documentos medievales'
  }
]

const instructions = [
  'Digitaliza o carga imágenes de documentos históricos',
  'Selecciona el idioma y época del documento',
  'Aplica el análisis de IA especializado en textos antiguos',
  'Obtén la transcripción y análisis del contenido histórico'
]

const useCases = [
  'Digitalización de archivos históricos',
  'Investigación académica y genealógica',
  'Preservación de patrimonio documental',
  'Transcripción de manuscritos antiguos',
  'Catalogación de colecciones bibliotecarias'
]

export default function ScriptoriumPage() {
  return (
    <AppPageLayout
      appName="scriptorium"
      title="Análisis de Documentos Históricos"
      description="Tecnologías avanzadas de IA para el análisis profundo de documentos históricos."
      icon={Scroll}
      color="from-amber-500 to-yellow-600"
      features={features}
      instructions={instructions}
      useCases={useCases}
      accessUrl="#"
    />
  )
}
