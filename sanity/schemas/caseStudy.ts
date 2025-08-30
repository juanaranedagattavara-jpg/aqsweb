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
      name: 'industry',
      title: 'Industria',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'challenge',
      title: 'Desafío',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'solution',
      title: 'Solución',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'results',
      title: 'Resultados',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'kpis',
      title: 'KPIs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Etiqueta',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Valor',
              type: 'string',
            },
            {
              name: 'unit',
              title: 'Unidad',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'quote',
      title: 'Testimonio del Cliente',
      type: 'text',
      rows: 3,
    },
    {
      name: 'client',
      title: 'Cliente',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'cover',
      title: 'Imagen de Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      industry: 'industry',
      client: 'client',
      media: 'cover',
    },
    prepare(selection: any) {
      const { title, industry, client } = selection
      return { ...selection, subtitle: `${industry} - ${client}` }
    },
  },
}
