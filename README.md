# AQS Web - Proyecto Web

Sitio web corporativo para AQS Web, una empresa especializada en soluciones digitales.

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos
- **Sanity CMS** para gestión de contenido
- **Zod** para validación de esquemas
- **Testing** con Vitest y Playwright
- **SEO optimizado** con metadatos dinámicos
- **Internacionalización** preparada con [locale]

## 📁 Estructura del Proyecto

```
/app
  /[locale]          # Páginas con soporte multiidioma
  /api               # API routes para leads y newsletter
/components          # Componentes reutilizables
  /marketing         # Componentes de marketing
  /pricing          # Componentes de precios
  /cases            # Componentes de casos de éxito
  /blog             # Componentes del blog
  /ui               # Componentes de UI (shadcn)
/lib                # Utilidades y configuraciones
/sanity             # Configuración del CMS
/styles             # Estilos globales y configuración de Tailwind
/tests              # Pruebas unitarias y E2E
```

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd aqsweb
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Editar `.env.local` con tus configuraciones:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_GA_ID=tu_ga_id
   ```

## 🚀 Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar ESLint
- `npm run test` - Ejecutar pruebas unitarias
- `npm run test:e2e` - Ejecutar pruebas E2E
- `npm run studio` - Iniciar Sanity Studio
- `npm run studio:build` - Construir Sanity Studio

## 🌐 Páginas Disponibles

- **Home** (`/`) - Página principal
- **Productos** (`/producto`) - Catálogo de productos
- **Consultoría** (`/consultoria`) - Servicios de consultoría
- **Planes** (`/planes`) - Planes y precios
- **Casos de Éxito** (`/casos`) - Portfolio de proyectos
- **Recursos** (`/recursos`) - Biblioteca de recursos
- **Empresa** (`/empresa`) - Sobre nosotros
- **Contacto** (`/contacto`) - Formulario de contacto
- **Legal** - Políticas de privacidad, términos y cookies

## 📝 CMS (Sanity)

El proyecto incluye Sanity CMS configurado con esquemas para:
- Posts del blog
- Casos de estudio
- Servicios
- Equipo
- Testimonios

Para acceder al CMS:
```bash
npm run studio
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en `styles/tailwind.config.ts`:
- Primary: Azul (#3b82f6)
- Secondary: Gris (#64748b)

### Componentes
Los componentes están organizados por funcionalidad en la carpeta `/components`.

## 🧪 Testing

### Pruebas Unitarias
```bash
npm run test
```

### Pruebas E2E
```bash
npm run test:e2e
```

## 📱 Responsive Design

El proyecto está optimizado para dispositivos móviles, tablets y desktop usando Tailwind CSS.

## 🔒 Seguridad

- Content Security Policy (CSP) configurado
- Headers de seguridad implementados
- Validación de formularios con Zod

## 📈 Analytics

Google Analytics configurado y listo para usar. Solo necesitas agregar tu ID de seguimiento en las variables de entorno.

## 🤝 Contribución

1. Crear una rama para tu feature
2. Hacer commit de tus cambios
3. Crear un Pull Request

## 📄 Licencia

Este proyecto es privado y propiedad de AQS Web.

---

**Desarrollado con ❤️ por el equipo de AQS Web**
