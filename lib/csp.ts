// Content Security Policy
export const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://app.posthog.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https: blob: https://cdn.sanity.io https://images.unsplash.com;
  connect-src 'self' https://www.google-analytics.com https://api.sanity.io https://app.posthog.com;
  frame-src 'self' https://challenges.cloudflare.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`

// Función para generar el header CSP
export const generateCSP = (nonce?: string) => {
  let csp = cspHeader
  
  if (nonce) {
    csp = csp.replace(/'unsafe-inline'/g, `'nonce-${nonce}'`)
  }
  
  return csp.trim()
}

// Headers de seguridad adicionales
export const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
}

// Middleware para CSP
export const cspMiddleware = (req: any, res: any, next: any) => {
  const nonce = Math.random().toString(36).substring(2, 15)
  const csp = generateCSP(nonce)
  
  res.setHeader('Content-Security-Policy', csp)
  res.setHeader('X-Content-Security-Policy', csp)
  
  // Agregar nonce a la request para uso en componentes
  req.nonce = nonce
  
  next()
}

// Función para generar nonce
export const generateNonce = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// Configuración de Turnstile (Cloudflare)
export const turnstileConfig = {
  siteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '',
  secretKey: process.env.TURNSTILE_SECRET_KEY || '',
  verifyUrl: 'https://challenges.cloudflare.com/turnstile/v0/siteverify',
}

// Función para verificar Turnstile
export const verifyTurnstile = async (token: string, ip?: string) => {
  if (!turnstileConfig.secretKey) {
    console.warn('Turnstile no está configurado')
    return true // Permitir en desarrollo
  }

  try {
    const formData = new URLSearchParams()
    formData.append('secret', turnstileConfig.secretKey)
    formData.append('response', token)
    if (ip) formData.append('remoteip', ip)

    const response = await fetch(turnstileConfig.verifyUrl, {
      method: 'POST',
      body: formData,
    })

    const result = await response.json()
    return result.success === true
  } catch (error) {
    console.error('Error verificando Turnstile:', error)
    return false
  }
}
