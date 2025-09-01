# QSP Analytics SaaS Demo

Demo SaaS de Analytics de Comercio Exterior con Next.js, TypeScript, TailwindCSS y Zustand.

## 🚀 Características

- **16 Dashboards Especializados**: Desde análisis básicos hasta insights avanzados con IA
- **3 Planes de Suscripción**: Básico (4 dashboards), Pro (8 dashboards), Premium (16 dashboards)
- **Sistema de Acceso Controlado**: Lógica de permisos basada en el plan del usuario
- **UI Responsiva**: Diseño moderno con TailwindCSS y tema oscuro opcional
- **Estado Persistente**: Gestión de sesión con Zustand y localStorage
- **Navegación Protegida**: Middleware para rutas protegidas

## 🛠️ Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Styling**: TailwindCSS
- **Estado**: Zustand
- **UI Components**: Headless UI
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── (protected)/       # Rutas protegidas
│   │   ├── dashboards/    # Grid de dashboards
│   │   ├── account/       # Gestión de cuenta
│   │   └── layout.tsx     # Layout protegido
│   ├── login/             # Página de login/registro
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Landing page
├── components/             # Componentes reutilizables
│   ├── DashboardCard.tsx  # Tarjeta de dashboard
│   ├── LockedDialog.tsx   # Modal de dashboard bloqueado
│   ├── Sidebar.tsx        # Barra lateral
│   └── Topbar.tsx         # Barra superior
├── lib/                    # Lógica de negocio
│   ├── access.ts          # Lógica de acceso
│   ├── dashboards.ts      # Datos de dashboards
│   └── plans.ts           # Configuración de planes
├── store/                  # Estado global
│   └── useAuth.ts         # Store de autenticación
└── styles/                 # Estilos globales
    └── globals.css        # CSS con Tailwind
```

## 🚀 Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

4. **Iniciar en producción**:
   ```bash
   npm start
   ```

## 🔐 Flujo de Uso

1. **Landing Page** (`/`): Presentación del producto y planes
2. **Login** (`/login`): Selección de plan y registro mock
3. **Dashboards** (`/app/dashboards`): Grid de 16 dashboards con filtros
4. **Dashboard Detail** (`/app/dashboards/[code]`): Vista detallada del dashboard
5. **Account** (`/app/account`): Gestión de plan y upgrade

## 🎯 Funcionalidades Clave

### Sistema de Planes
- **Básico**: Acceso a dashboards 1-4
- **Pro**: Acceso a dashboards 1-8
- **Premium**: Acceso a todos los dashboards (1-16)

### Lógica de Acceso
- Dashboards con `soon: true` muestran "Próximamente"
- Dashboards bloqueados muestran modal de upgrade
- Redirección automática si no hay acceso

### Componentes Principales
- **DashboardCard**: Muestra estado (Disponible/Bloqueado/Próximamente)
- **LockedDialog**: Modal de upsell con opciones de upgrade
- **Sidebar**: Navegación principal de la app
- **Topbar**: Barra superior con búsqueda y perfil

## 🔧 Personalización

### Modificar Planes
Edita `src/lib/plans.ts` para cambiar:
- Límites de dashboards por plan
- Precios y nombres
- Características de cada plan

### Agregar Dashboards
Edita `src/lib/dashboards.ts` para:
- Agregar nuevos dashboards
- Cambiar categorías
- Marcar como "próximamente"

### Cambiar Estilos
Modifica `src/styles/globals.css` y `tailwind.config.js` para:
- Cambiar colores del tema
- Agregar componentes personalizados
- Modificar animaciones

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Breakpoints**: Adaptación automática a diferentes tamaños de pantalla
- **Touch Friendly**: Interacciones optimizadas para pantallas táctiles

## 🎨 Tema de Colores

- **Primario**: Indigo (HSL 221.2 83.2% 53.3%)
- **Secundario**: Slate (escala de grises)
- **Éxito**: Verde para elementos disponibles
- **Error**: Rojo para elementos bloqueados
- **Advertencia**: Amarillo para elementos próximos

## 🚧 TODO para Producción

- [ ] Integración con sistema de autenticación real
- [ ] Integración con Stripe para pagos
- [ ] Base de datos para usuarios y suscripciones
- [ ] API endpoints para dashboards
- [ ] Sistema de notificaciones
- [ ] Analytics y tracking
- [ ] Tests unitarios y de integración
- [ ] CI/CD pipeline
- [ ] Monitoreo y logging
- [ ] Backup y recuperación de datos

## 📄 Licencia

MIT License - Ver archivo LICENSE para más detalles.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto, contacta al equipo de desarrollo.
