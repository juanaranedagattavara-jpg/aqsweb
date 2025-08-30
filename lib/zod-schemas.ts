import { z } from 'zod'

// Esquema para formulario de contacto
export const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'El nombre de la empresa es requerido'),
  phone: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  service: z.enum(['analytics', 'consulting', 'implementation', 'other']).optional(),
  source: z.string().optional(),
})

// Esquema para newsletter
export const newsletterSchema = z.object({
  email: z.string().email('Email inválido'),
  firstName: z.string().optional(),
  interests: z.array(z.string()).optional(),
  source: z.string().optional(),
})

// Esquema para lead
export const leadSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'El nombre de la empresa es requerido'),
  phone: z.string().optional(),
  projectType: z.enum(['analytics', 'consulting', 'implementation', 'other']),
  budget: z.enum(['<5k', '5k-10k', '10k-25k', '25k-50k', '>50k']),
  timeline: z.enum(['<1mes', '1-3meses', '3-6meses', '>6meses']),
  description: z.string().min(20, 'La descripción debe tener al menos 20 caracteres'),
  source: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
})

// Esquema para demo request
export const demoRequestSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'El nombre de la empresa es requerido'),
  role: z.string().optional(),
  useCase: z.string().min(10, 'Describe tu caso de uso'),
  preferredTime: z.enum(['morning', 'afternoon', 'evening']),
  timezone: z.string().optional(),
  source: z.string().optional(),
})

// Esquema para whitepaper download
export const whitepaperSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'El nombre de la empresa es requerido'),
  role: z.string().optional(),
  whitepaperTitle: z.string(),
  source: z.string().optional(),
})

// Esquema para book call
export const bookCallSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'El nombre de la empresa es requerido'),
  role: z.string().optional(),
  callPurpose: z.string().min(10, 'Describe el propósito de la llamada'),
  preferredDate: z.string(),
  preferredTime: z.enum(['morning', 'afternoon', 'evening']),
  timezone: z.string().optional(),
  source: z.string().optional(),
})

// Tipos derivados de los esquemas
export type ContactForm = z.infer<typeof contactSchema>
export type NewsletterForm = z.infer<typeof newsletterSchema>
export type LeadForm = z.infer<typeof leadSchema>
export type DemoRequestForm = z.infer<typeof demoRequestSchema>
export type WhitepaperForm = z.infer<typeof whitepaperSchema>
export type BookCallForm = z.infer<typeof bookCallSchema>

// Función para validar formulario con mensajes personalizados
export const validateForm = <T>(schema: z.ZodSchema<T>, data: unknown): { success: true; data: T } | { success: false; errors: Record<string, string> } => {
  try {
    const validatedData = schema.parse(data)
    return { success: true, data: validatedData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {}
      error.errors.forEach((err) => {
        const field = err.path.join('.')
        errors[field] = err.message
      })
      return { success: false, errors }
    }
    return { success: false, errors: { general: 'Error de validación desconocido' } }
  }
}
