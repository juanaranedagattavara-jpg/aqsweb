# Analytics Quiet Storm (QSP) - Sitio Web de Marketing

Sitio web de marketing de nivel producción para Analytics Quiet Storm, una empresa especializada en análisis de datos y consultoría estratégica.

## 🚀 Características

- **Next.js 14** con App Router y TypeScript
- **Tailwind CSS** + shadcn/ui + Lucide icons
- **Internacionalización** con next-intl (ES/EN)
- **SEO optimizado** con next-seo, sitemap, robots, schema.org
- **Analytics** con GA4 + PostHog
- **Formularios** con React Hook Form + Zod + server actions
- **CMS dual**: Sanity (preferido) o Contentlayer MDX (fallback)
- **Testing** con Vitest + React Testing Library + Playwright
- **CI/CD** con GitHub Actions + deploy en Vercel
- **Seguridad** con CSP, headers de seguridad, Turnstile/recaptcha

## 📁 Estructura del Proyecto

```
/
├── app/                    # App Router de Next.js
│   ├── [locale]/          # Rutas localizadas
│   └── api/               # API routes
├── components/             # Componentes React
│   ├── ui/                # Componentes de UI (shadcn)
│   ├── marketing/         # Componentes de marketing
│   ├── pricing/           # Componentes de precios
│   ├── cases/             # Componentes de casos de éxito
│   ├── blog/              # Componentes del blog
│   ├── forms/             # Componentes de formularios
│   └── layout/            # Componentes de layout
├── lib/                   # Utilidades y configuraciones
├── sanity/                # Configuración de Sanity CMS
├── content/               # Contenido MDX (Contentlayer)
├── styles/                # Estilos globales
├── tests/                 # Tests unitarios y E2E
├── messages/              # Archivos de internacionalización
└── public/                # Archivos estáticos
```

## 🛠️ Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/juanaranedagattavara-jpg/aqsweb.git
cd aqsweb
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
cp .env.example .env.local
```

Editar `.env.local` con tus configuraciones:
```env
# Site Configuration
SITE_URL=https://analyticsquietstorm.com
NEXT_PUBLIC_SITE_URL=https://analyticsquietstorm.com

# Sanity CMS (opcional)
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Analytics
NEXT_PUBLIC_GA_ID=tu_ga_id
NEXT_PUBLIC_POSTHOG_KEY=tu_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Email (Resend)
RESEND_API_KEY=tu_resend_key

# Security (Cloudflare Turnstile)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=tu_turnstile_key
TURNSTILE_SECRET_KEY=tu_turnstile_secret
```

## 🚀 Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar ESLint
- `npm run type-check` - Verificar tipos de TypeScript
- `npm run test` - Ejecutar tests unitarios
- `npm run test:ui` - Ejecutar tests con UI
- `npm run test:e2e` - Ejecutar tests E2E
- `npm run test:e2e:ui` - Ejecutar tests E2E con UI
- `npm run studio` - Iniciar Sanity Studio
- `npm run studio:build` - Construir Sanity Studio
- `npm run contentlayer` - Construir contenido MDX
- `npm run sitemap` - Generar sitemap
- `npm run lighthouse` - Ejecutar Lighthouse CI

## 🌐 Rutas Disponibles

- **Home** (`/`) - Página principal con propuesta de valor
- **Producto** (`/producto`) - Descripción del producto
- **Consultoría** (`/consultoria`) - Servicios de consultoría
- **Precios** (`/planes`) - Planes con toggle mensual/anual
- **Casos de Éxito** (`/casos`, `/casos/[slug]`) - Portfolio de proyectos
- **Recursos** (`/recursos`, `/recursos/[slug]`) - Blog y guías
- **Empresa** (`/empresa`) - Sobre nosotros
- **Contacto** (`/contacto`) - Formulario de contacto
- **Legal** - Políticas de privacidad, términos y cookies
- **Status** (`/status`) - Estado del servicio

## 💰 Reglas de Pricing

### Planes Disponibles
- **Básico (Azul)**: $99/mes - Features 1-5
- **Pro (Teal)**: $299/mes - Features 1-8
- **Premium (Dorado)**: $599/mes - Features 1-16

### Feature Gating
- Básico: items 1–5
- Pro: items 1–8  
- Premium: items 1–16

### Toggle de Facturación
- Mensual: precio completo
- Anual: 20% de descuento

## 📝 CMS (Sanity vs Contentlayer)

### Sanity (Recomendado)
Si configuras `NEXT_PUBLIC_SANITY_PROJECT_ID`, el sitio usará Sanity CMS.

```bash
npm run studio
```

### Contentlayer (Fallback)
Si no configuras Sanity, el sitio usará MDX estático con Contentlayer.

```bash
npm run contentlayer
```

## 🧪 Testing

### Tests Unitarios
```bash
npm run test
```

### Tests E2E
```bash
npm run test:e2e
```

### Lighthouse CI
```bash
npm run lighthouse
```

## 🔒 Seguridad

- **Content Security Policy (CSP)** con nonce
- **Headers de seguridad** (HSTS, XFO, XCTO, etc.)
- **Turnstile/recaptcha** para formularios
- **Validación** con Zod en todos los formularios
- **Sanitización** de inputs

## 📈 Analytics

### Google Analytics 4
- Tracking de páginas
- Eventos personalizados
- Conversiones

### PostHog
- Eventos de negocio
- Funnel analysis
- A/B testing

## 🚀 Deployment

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático en push a main

### GitHub Actions
El proyecto incluye CI/CD completo:
- Lint y type-check
- Tests unitarios y E2E
- Build y Lighthouse
- Deploy automático

## 🎨 Personalización

### Colores
Los colores están definidos en `styles/tailwind.config.ts`:
- **Básico**: Azul (#3b82f6)
- **Pro**: Teal (#14b8a6)
- **Premium**: Dorado (#f59e0b)

### Componentes
Los componentes están organizados por funcionalidad y son completamente personalizables.

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints optimizados
- Touch-friendly interfaces
- Performance optimizado para móvil

## ♿ Accesibilidad

- **ARIA labels** y roles
- **Skip links** para navegación por teclado
- **Contraste AA** en todos los elementos
- **Focus visible** en todos los elementos interactivos
- **Screen reader** friendly

## 🔧 Desarrollo

### Estructura de Componentes
```tsx
// Ejemplo de componente
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'

export function CTAButton({ children, ...props }) {
  const handleClick = () => {
    trackEvent('click_cta', { button: 'hero_cta' })
  }
  
  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
```

### Internacionalización
```tsx
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('home.hero')
  
  return (
    <h1>{t('title')}</h1>
  )
}
```

## 📊 Performance

### Core Web Vitals Targets
- **LCP**: < 2.5s (mobile p75)
- **CLS**: < 0.1
- **TBT**: < 200ms

### Optimizaciones
- RSC + ISR
- next/image con AVIF/WebP
- Fuentes locales
- Code splitting por ruta
- Prefetch de rutas críticas

## 🤝 Contribución

1. Fork del repositorio
2. Crear rama para feature (`git checkout -b feature/amazing-feature`)
3. Commit de cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto es privado y propiedad de Analytics Quiet Storm.

## 🆘 Soporte

Para soporte técnico o preguntas:
- Email: tech@analyticsquietstorm.com
- Issues: [GitHub Issues](https://github.com/juanaranedagattavara-jpg/aqsweb/issues)

---

**Desarrollado con ❤️ por el equipo de Analytics Quiet Storm**
