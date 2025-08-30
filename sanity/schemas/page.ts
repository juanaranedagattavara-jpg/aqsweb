export const page = {
  name: 'page',
  title: 'Página',
  type: 'document',
  fields: [
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
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título Principal',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        },
        {
          name: 'cta',
          title: 'Call to Action',
          type: 'reference',
          to: [{ type: 'cta' }],
        },
      ],
    },
    {
      name: 'blocks',
      title: 'Bloques de Contenido',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'featureGrid',
          title: 'Grid de Características',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string',
            },
            {
              name: 'subtitle',
              title: 'Subtítulo',
              type: 'string',
            },
            {
              name: 'features',
              title: 'Características',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Título',
                      type: 'string',
                    },
                    {
                      name: 'description',
                      title: 'Descripción',
                      type: 'text',
                    },
                    {
                      name: 'icon',
                      title: 'Icono',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'object',
          name: 'testimonialCarousel',
          title: 'Carrusel de Testimonios',
          fields: [
            {
              name: 'testimonials',
              title: 'Testimonios',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'quote',
                      title: 'Cita',
                      type: 'text',
                    },
                    {
                      name: 'author',
                      title: 'Autor',
                      type: 'string',
                    },
                    {
                      name: 'company',
                      title: 'Empresa',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare(selection: any) {
      const { title, slug } = selection
      return {
        title,
        subtitle: slug ? `/${slug}` : 'Sin slug',
      }
    },
  },
}
