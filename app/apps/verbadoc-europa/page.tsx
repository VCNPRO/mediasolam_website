
'use client'

import { AppPageLayout } from '@/components/app-page-layout'
import { Database, TrendingUp, FileSpreadsheet, Building } from 'lucide-react'

const features = [
  {
    icon: Database,
    title: 'Extracción Automatizada',
    description: 'Extrae datos de cualquier documento o imagen de forma automática'
  },
  {
    icon: FileSpreadsheet,
    title: 'Múltiples Formatos',
    description: 'Compatible con PDF, imágenes, documentos escaneados y más'
  },
  {
    icon: Building,
    title: 'Análisis Empresarial',
    description: 'Especializado en datos de contabilidad, finanzas, marketing y legal'
  },
  {
    icon: TrendingUp,
    title: 'Optimización de Procesos',
    description: 'Reduce significativamente el tiempo de procesamiento manual'
  }
]

const instructions = [
  'Sube los documentos o imágenes con datos a extraer',
  'Selecciona el tipo de departamento o análisis necesario',
  'Configura los campos específicos que deseas extraer',
  'Descarga los datos estructurados en formato Excel o CSV'
]

const useCases = [
  'Extracción de datos de facturas y recibos',
  'Análisis de estados financieros',
  'Procesamiento de documentos legales',
  'Digitalización de formularios en papel',
  'Automatización de entrada de datos contables'
]

export default function VerbadocEuropaPage() {
  return (
    <AppPageLayout
      appName="verbadoc-europa"
      title="Extractor de Datos"
      description="Aprende a usar el Extractor de Datos para departamento de todo tipo, en especial, departamentos contabilidad, finanzas, marketing, legal y cualquiera que pueda necesitar extraer datos de cualquier documento o imagen con datos."
      icon={Database}
      color="from-yellow-500 to-orange-600"
      features={features}
      instructions={instructions}
      useCases={useCases}
      accessUrl="https://verbadoc.eu"
    />
  )
}
