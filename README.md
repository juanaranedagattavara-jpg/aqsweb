# QSP - Plataforma de Inteligencia de Datos Premium

Una landing page moderna y premium para QSP, construida con Next.js 14 y Tailwind CSS, diseñada para transmitir sofisticación y profesionalismo en el sector de inteligencia de datos.

## 🚀 Características

- **Diseño Premium**: Estilo oscuro y sofisticado con glassmorphism y efectos de luz
- **Responsive**: Completamente adaptable a todos los dispositivos
- **Animaciones**: Transiciones suaves con Framer Motion
- **Tipografías**: Playfair Display para títulos (serif elegante) e Inter para texto
- **Componentes UI**: Sistema de componentes reutilizables y accesibles
- **Performance**: Optimizado para velocidad y SEO

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + @tailwindcss/typography + tailwind-scrollbar
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Tipografías**: Google Fonts (Playfair Display + Inter)
- **Lenguaje**: TypeScript

## 🎨 Paleta de Colores

```ts
primary: "#0B1220"        // Fondo principal oscuro
primary-900: "#0E1A2A"    // Fondo secundario
primary-800: "#11243A"    // Fondo terciario
accent: "#3BA1FF"         // Azul principal
accent-2: "#1EC9A3"       // Verde turquesa
muted: "#8FA3BF"          // Texto secundario
card: "rgba(255,255,255,0.06)"  // Tarjetas glassmorphism
border: "rgba(255,255,255,0.12)" // Bordes sutiles
warning: "#F5A524"        // Naranja/amarillo
```

## 📁 Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales y configuración de Tailwind
│   ├── layout.tsx         # Layout principal con tipografías
│   └── page.tsx           # Página principal
├── components/             # Componentes reutilizables
│   ├── ui/                # Componentes base (Button, Card, Input)
│   ├── layout/            # Header y Footer
│   └── marketing/         # Componentes de marketing (Hero, Features, Stats)
├── lib/                    # Utilidades y helpers
├── tailwind.config.ts      # Configuración de Tailwind CSS
└── package.json            # Dependencias del proyecto
```

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd qsp-premium-landing
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   npm start
   ```

## 🎯 Componentes Principales

### Header
- Navegación responsive con dropdowns
- Barra de búsqueda integrada
- Botones CTA prominentes
- Efectos de glassmorphism

### Hero Section
- Título principal impactante
- Descripción clara del producto
- Elementos visuales animados (globo 3D, puntos de datos)
- Botones de acción claros

### Features
- Grid de características con iconos
- Efectos hover y animaciones
- Diseño de tarjetas glassmorphism

### Stats
- Estadísticas clave del producto
- Iconos temáticos
- Layout responsive

### Footer
- Enlaces organizados por categorías
- Newsletter signup
- Información de contacto
- Enlaces sociales

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.ts` en la sección `theme.extend.colors`.

### Tipografías
Las tipografías se configuran en `app/layout.tsx` y se aplican globalmente en `app/globals.css`.

### Componentes
Todos los componentes están construidos con Tailwind CSS y son fácilmente personalizables modificando las clases CSS.

## 📱 Responsive Design

El diseño es completamente responsive y se adapta a:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- **Lazy Loading**: Componentes cargados bajo demanda
- **Optimización de imágenes**: Next.js Image optimization
- **Code Splitting**: Automático con Next.js
- **CSS Purge**: Tailwind CSS purga automáticamente CSS no utilizado

## 🔧 Scripts Disponibles

```json
{
  "dev": "next dev",           # Desarrollo local
  "build": "next build",       # Construcción para producción
  "start": "next start",       # Servidor de producción
  "lint": "next lint"          # Linting del código
}
```

## 🌟 Características del Diseño

### Glassmorphism
- Efectos de desenfoque (backdrop-blur)
- Transparencias sutiles
- Bordes con opacidad reducida

### Microinteracciones
- Hover effects en botones y tarjetas
- Transiciones suaves en todos los elementos
- Estados focus accesibles

### Tipografía
- **Títulos**: Playfair Display (serif elegante)
- **Texto**: Inter (sans-serif legible)
- **Jerarquía**: Tamaños y pesos bien definidos

## 📄 Licencia

Este proyecto es privado y está destinado exclusivamente para QSP.

## 🤝 Contribución

Para contribuir al proyecto:
1. Crear una rama feature
2. Implementar cambios
3. Crear un Pull Request
4. Revisar y aprobar cambios

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto, contactar al equipo de desarrollo de QSP.

---

**QSP** - Transformando datos en inteligencia empresarial
