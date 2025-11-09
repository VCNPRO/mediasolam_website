
'use client'

import { AppPageLayout } from '@/components/app-page-layout'
import { Cpu, Code, Archive, Settings } from 'lucide-react'

const features = [
  {
    icon: Archive,
    title: 'Estándares METS',
    description: 'Cumple con todos los estándares METS para objetos digitales'
  },
  {
    icon: Code,
    title: 'Generación XML',
    description: 'Crea archivos XML METS válidos y bien estructurados'
  },
  {
    icon: Settings,
    title: 'Metadatos Estructurados',
    description: 'Organiza metadatos descriptivos, administrativos y estructurales'
  },
  {
    icon: Cpu,
    title: 'Automatización',
    description: 'Proceso automatizado para acelerar la creación de archivos METS'
  }
]

const instructions = [
  'Define la estructura de tu objeto digital',
  'Carga los archivos y metadatos asociados',
  'Configura las relaciones entre los componentes',
  'Genera y valida el archivo METS XML resultante'
]

const useCases = [
  'Preservación digital de archivos históricos',
  'Gestión de colecciones bibliotecarias digitales',
  'Archivado profesional de documentos',
  'Cumplimiento de estándares internacionales',
  'Intercambio de objetos digitales entre instituciones'
]

export default function AnnaMetsPage() {
  return (
    <AppPageLayout
      appName="annamets"
      title="Constructor METS XML"
      description="METS XML Builder - Crea archivos METS profesionales para tus objetos digitales."
      icon={Cpu}
      color="from-purple-500 to-indigo-600"
      features={features}
      instructions={instructions}
      useCases={useCases}
      accessUrl="#"
    />
  )
}
