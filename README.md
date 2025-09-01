# QSP Analytics SaaS Demo

Un proyecto demo SaaS completo construido con Next.js 14, TypeScript, TailwindCSS y Zustand para simular una plataforma de analytics de comercio exterior.

## 🚀 Características

- **Landing Page** con CTA principal
- **Sistema de Login Mock** con selector de plan
- **16 Dashboards** especializados en comercio exterior
- **Control de Acceso** basado en planes de suscripción
- **UI Responsiva** con tema oscuro (slate + indigo)
- **Gestión de Estado** con Zustand
- **Navegación Protegida** con middleware
- **Modal de Upsell** para dashboards bloqueados

## 📊 Planes de Suscripción

- **Básico ($29/mes)**: Acceso a 4 dashboards
- **Pro ($79/mes)**: Acceso a 8 dashboards  
- **Premium ($199/mes)**: Acceso a 16 dashboards

## 🛠️ Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Styling**: TailwindCSS
- **Estado**: Zustand
- **UI Components**: Headless UI + Framer Motion
- **Iconos**: Lucide React

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── login/
│   │   └── page.tsx               # Login/registro mock
│   └── (protected)/
│       ├── layout.tsx             # Layout protegido
│       ├── dashboards/
│       │   ├── page.tsx           # Grid de dashboards
│       │   └── [code]/
│       │       └── page.tsx       # Detalle del dashboard
│       └── account/
│           └── page.tsx           # Gestión de cuenta
├── components/
│   ├── DashboardCard.tsx          # Tarjeta de dashboard
│   ├── LockedDialog.tsx           # Modal de upsell
│   ├── Sidebar.tsx                # Navegación lateral
│   └── Topbar.tsx                 # Barra superior
├── lib/
│   ├── plans.ts                   # Configuración de planes
│   ├── dashboards.ts              # Datos de dashboards
│   └── access.ts                  # Lógica de acceso
├── store/
│   └── useAuth.ts                 # Store de autenticación
└── styles/
    └── globals.css                # Estilos globales
```

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd qsp-analytics-saas
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🔐 Flujo de Uso

1. **Landing Page** (`/`) - Información del producto y CTA
2. **Login** (`/login`) - Selección de plan y creación de cuenta mock
3. **Dashboard Grid** (`/app/dashboards`) - Vista de todos los dashboards
4. **Dashboard Detail** (`/app/dashboards/[code]`) - Vista individual con placeholder
5. **Account** (`/app/account`) - Gestión de plan y upgrade mock

## 🎯 Funcionalidades Clave

### Control de Acceso
- **Básico**: Dashboards 1-4 disponibles
- **Pro**: Dashboards 1-8 disponibles  
- **Premium**: Todos los dashboards disponibles

### Estados de Dashboard
- **Disponible**: Acceso directo al dashboard
- **Bloqueado**: Botón "Desbloquear" que abre modal de upsell
- **Próximamente**: Botón deshabilitado para dashboards en desarrollo

### Navegación
- **Sidebar**: Navegación principal a Dashboards y Mi Plan
- **Topbar**: Información del usuario y botón de logout
- **Protección**: Redirección automática si no hay acceso

## 🔧 Personalización

### Dashboards
Edita `src/lib/dashboards.ts` para modificar:
- Títulos y descripciones
- Categorías
- Estado "próximamente"

### Planes
Modifica `src/lib/plans.ts` para ajustar:
- Precios
- Límites de dashboards
- Características

### Estilos
Personaliza `src/styles/globals.css` y `tailwind.config.js` para:
- Colores del tema
- Tipografías
- Componentes personalizados

## 🚧 TODOs para Producción

- [ ] **Autenticación Real**: Integrar con Auth0, Supabase, o similar
- [ ] **Base de Datos**: PostgreSQL, MongoDB, o Supabase
- [ ] **Pagos**: Integración con Stripe para suscripciones
- [ ] **Dashboards Reales**: Iframes o APIs de dashboards reales
- [ ] **Analytics**: Tracking de uso y métricas
- [ ] **Notificaciones**: Sistema de alertas y emails
- [ ] **Testing**: Jest, React Testing Library
- [ ] **CI/CD**: GitHub Actions o similar

## 📱 Responsive Design

El proyecto está completamente optimizado para:
- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🎨 Tema de Colores

- **Primario**: Indigo (600, 700)
- **Secundario**: Slate (600, 700, 800, 900)
- **Acentos**: Verde para éxito, rojo para errores, amarillo para advertencias
- **Fondo**: Slate 900 (oscuro)
- **Texto**: Blanco y variaciones de slate

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte o preguntas:
- Abre un issue en GitHub
- Contacta al equipo de desarrollo

---

**Nota**: Este es un proyecto demo para fines educativos y de demostración. No está destinado para uso en producción sin las modificaciones apropiadas.
