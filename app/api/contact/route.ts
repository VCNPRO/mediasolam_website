
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Save to database
    const contact = await db.contactSubmission.create({
      data: {
        name,
        email,
        subject,
        message,
        status: 'PENDING',
        formType: 'GENERAL'
      }
    })

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente', id: contact.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving contact submission:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
