import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Rutas protegidas que requieren autenticación
  if (pathname.startsWith('/app')) {
    // Verificar si hay token de autenticación en localStorage
    // En un proyecto real, esto se haría con cookies o headers de autorización
    // Por ahora, permitimos el acceso y la validación se hace en el cliente
    
    // TODO: Implementar verificación real de JWT o sesión
    return NextResponse.next();
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/app/:path*',
  ],
};
