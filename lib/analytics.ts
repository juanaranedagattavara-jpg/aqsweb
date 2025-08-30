// Configuración de Google Analytics 4
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Configuración de PostHog
export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com'

// Eventos personalizados para PostHog
export const trackEvent = (event: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture(event, properties)
  }
}

// Eventos específicos del negocio
export const trackLeadSubmit = (source: string, formType: string) => {
  trackEvent('lead_submit', { source, form_type: formType })
}

export const trackViewPricing = (plan?: string) => {
  trackEvent('view_pricing', { plan })
}

export const trackToggleBilling = (from: string, to: string) => {
  trackEvent('toggle_billing', { from, to })
}

export const trackClickDemo = (source: string) => {
  trackEvent('click_demo', { source })
}

export const trackBookCall = (source: string) => {
  trackEvent('book_call', { source })
}

export const trackDownloadWhitepaper = (title: string, source: string) => {
  trackEvent('download_whitepaper', { title, source })
}

export const trackContactSuccess = (formType: string) => {
  trackEvent('contact_success', { form_type: formType })
}

// Página vista para GA4
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID!, {
      page_path: url,
    })
  }
}

// Conversiones para GA4
export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
    })
  }
}

// Inicializar PostHog
export const initPostHog = () => {
  if (typeof window !== 'undefined' && POSTHOG_KEY) {
    import('posthog-js').then(({ default: posthog }) => {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') posthog.debug()
        },
        capture_pageview: false,
        disable_session_recording: true,
      })
      window.posthog = posthog
    })
  }
}

// Declaraciones globales
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void
    posthog: any
  }
}
