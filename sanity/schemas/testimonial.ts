export const testimonial = {
  name: 'testimonial',
  title: 'Testimonio',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Nombre del Cliente',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'clientCompany',
      title: 'Empresa del Cliente',
      type: 'string',
    },
    {
      name: 'clientRole',
      title: 'Cargo del Cliente',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Testimonio',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Calificación',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: 'clientImage',
      title: 'Foto del Cliente',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'project',
      title: 'Proyecto Relacionado',
      type: 'reference',
      to: [{ type: 'caseStudy' }],
    },
    {
      name: 'isActive',
      title: 'Testimonio Activo',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'clientCompany',
      media: 'clientImage',
    },
  },
}
