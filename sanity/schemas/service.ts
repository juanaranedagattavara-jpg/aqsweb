export const service = {
  name: 'service',
  title: 'Servicio',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre del Servicio',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    },
    {
      name: 'icon',
      title: 'Icono',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Características',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'string',
    },
    {
      name: 'isActive',
      title: 'Servicio Activo',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
  },
}
