import { z } from 'zod'

// Esquema para formulario de contacto
export const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  service: z.enum(['desarrollo', 'consultoria', 'marketing', 'otro']).optional(),
})

// Esquema para newsletter
export const newsletterSchema = z.object({
  email: z.string().email('Email inválido'),
  firstName: z.string().optional(),
  interests: z.array(z.string()).optional(),
})

// Esquema para lead
export const leadSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'El nombre de la empresa es requerido'),
  phone: z.string().optional(),
  projectType: z.enum(['website', 'ecommerce', 'app', 'consultoria', 'otro']),
  budget: z.enum(['<5k', '5k-10k', '10k-25k', '25k-50k', '>50k']),
  timeline: z.enum(['<1mes', '1-3meses', '3-6meses', '>6meses']),
  description: z.string().min(20, 'La descripción debe tener al menos 20 caracteres'),
})

// Tipos derivados de los esquemas
export type ContactForm = z.infer<typeof contactSchema>
export type NewsletterForm = z.infer<typeof newsletterSchema>
export type LeadForm = z.infer<typeof leadSchema>
