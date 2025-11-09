
'use client'

import { AppPageLayout } from '@/components/app-page-layout'
import { FileText, Stethoscope, Shield, Clipboard } from 'lucide-react'

const features = [
  {
    icon: Stethoscope,
    title: 'Plantillas Médicas',
    description: 'Plantillas preconfiguradas para diferentes tipos de informes clínicos'
  },
  {
    icon: Clipboard,
    title: 'Informes Automatizados',
    description: 'Generación automática de informes siguiendo estándares médicos'
  },
  {
    icon: Shield,
    title: 'Cumplimiento LOPD',
    description: 'Garantiza el cumplimiento de normativas de protección de datos'
  },
  {
    icon: FileText,
    title: 'Formato Profesional',
    description: 'Documentos con formato profesional listo para usar'
  }
]

const instructions = [
  'Selecciona el tipo de informe clínico que necesitas',
  'Completa los campos requeridos con la información del paciente',
  'Personaliza la plantilla según tus necesidades específicas',
  'Genera y descarga el informe en formato PDF'
]

const useCases = [
  'Informes de consulta médica general',
  'Reportes de especialidades médicas',
  'Documentación para seguros médicos',
  'Historiales clínicos estructurados',
  'Informes para derivaciones médicas'
]

export default function VerbadocSaludPage() {
  return (
    <AppPageLayout
      appName="verbadoc-salud"
      title="Informes Clínicos"
      description="Crear Plantilla para Informes Clínicos."
      icon={FileText}
      color="from-red-500 to-pink-600"
      features={features}
      instructions={instructions}
      useCases={useCases}
      accessUrl="#"
    />
  )
}
