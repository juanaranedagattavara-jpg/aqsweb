import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Aquí iría la lógica para procesar el lead
    // Por ejemplo, guardar en base de datos, enviar email, etc.
    
    return NextResponse.json({ 
      success: true, 
      message: 'Lead recibido correctamente' 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Error al procesar el lead' },
      { status: 500 }
    )
  }
}
