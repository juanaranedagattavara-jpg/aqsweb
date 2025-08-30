export const cta = {
  name: 'cta',
  title: 'Call to Action',
  type: 'document',
  fields: [
    {
      name: 'variant',
      title: 'Variante',
      type: 'string',
      options: {
        list: [
          { title: 'Primario', value: 'primary' },
          { title: 'Secundario', value: 'secondary' },
          { title: 'Outline', value: 'outline' },
          { title: 'Ghost', value: 'ghost' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'copy',
      title: 'Texto del Botón',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'href',
      title: 'Enlace',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isExternal',
      title: '¿Es enlace externo?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'icon',
      title: 'Icono',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'copy',
      variant: 'variant',
      href: 'href',
    },
    prepare(selection: any) {
      const { title, variant, href } = selection
      return {
        title,
        subtitle: `${variant} → ${href}`,
      }
    },
  },
}
