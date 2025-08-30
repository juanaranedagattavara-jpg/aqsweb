export const caseStudy = {
  name: 'caseStudy',
  title: 'Caso de Estudio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'client',
      title: 'Cliente',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 4,
    },
    {
      name: 'challenge',
      title: 'Desafío',
      type: 'text',
      rows: 3,
    },
    {
      name: 'solution',
      title: 'Solución',
      type: 'text',
      rows: 4,
    },
    {
      name: 'results',
      title: 'Resultados',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'services',
      title: 'Servicios Utilizados',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'service' } }],
    },
    {
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'images.0',
    },
    prepare(selection: any) {
      const { client } = selection
      return { ...selection, subtitle: client && `Cliente: ${client}` }
    },
  },
}
