export const plan = {
  name: 'plan',
  title: 'Plan de Precios',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre del Plan',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'color',
      title: 'Color del Plan',
      type: 'string',
      options: {
        list: [
          { title: 'Básico (Azul)', value: 'basic' },
          { title: 'Pro (Teal)', value: 'pro' },
          { title: 'Premium (Dorado)', value: 'premium' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'monthly',
      title: 'Precio Mensual',
      type: 'number',
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: 'annual',
      title: 'Precio Anual',
      type: 'number',
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: 'features',
      title: 'Números de Features',
      type: 'array',
      of: [{ type: 'number' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'limits',
      title: 'Límites del Plan',
      type: 'object',
      fields: [
        {
          name: 'maxUsers',
          title: 'Usuarios Máximos',
          type: 'number',
        },
        {
          name: 'maxProjects',
          title: 'Proyectos Máximos',
          type: 'number',
        },
        {
          name: 'storageGB',
          title: 'Almacenamiento (GB)',
          type: 'number',
        },
      ],
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'string',
      options: {
        list: [
          { title: 'Empezar ahora', value: 'get-started' },
          { title: 'Hablar con ventas', value: 'talk-to-sales' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isPopular',
      title: '¿Es Popular?',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'name',
      color: 'color',
      monthly: 'monthly',
    },
    prepare(selection: any) {
      const { title, color, monthly } = selection
      return {
        title,
        subtitle: `$${monthly}/mes - ${color}`,
        media: () => null,
      }
    },
  },
}
