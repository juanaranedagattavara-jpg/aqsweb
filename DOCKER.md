# Guía de Docker para AQSWeb

Esta guía te ayudará a configurar y ejecutar AQSWeb usando Docker, evitando errores comunes y optimizando el rendimiento.

## 🚀 Inicio Rápido

### Prerrequisitos
- Docker Desktop instalado y corriendo
- Docker Compose instalado
- Git instalado

### Comandos Básicos

```bash
# Desarrollo (recomendado para desarrollo local)
./scripts/docker.sh dev

# Producción
./scripts/docker.sh prod

# Detener servicios
./scripts/docker.sh stop

# Ver logs
./scripts/docker.sh logs
```

## 📁 Archivos de Configuración

### `docker-compose.yml`
Configuración principal para desarrollo general.

### `docker-compose.dev.yml`
Configuración optimizada para desarrollo con hot-reload y debugging.

### `docker-compose.prod.yml`
Configuración para producción con optimizaciones de rendimiento y seguridad.

### `docker-compose.windows.yml`
Configuración específica para Windows con optimizaciones para el sistema de archivos.

## 🔧 Configuración por Entorno

### Desarrollo
```bash
# Usar configuración de desarrollo
docker-compose -f docker-compose.dev.yml up --build

# O usar el script
./scripts/docker.sh dev
```

### Producción
```bash
# Usar configuración de producción
docker-compose -f docker-compose.prod.yml up --build -d

# O usar el script
./scripts/docker.sh prod
```

### Windows
```bash
# Usar configuración específica para Windows
docker-compose -f docker-compose.windows.yml up --build
```

## 🐛 Solución de Problemas Comunes

### Error: "Port already in use"
```bash
# Verificar qué está usando el puerto 3000
netstat -ano | findstr :3000

# Detener el proceso o cambiar el puerto en docker-compose
ports:
  - "3001:3000"  # Cambiar a puerto 3001
```

### Error: "Permission denied" en Windows
```bash
# Ejecutar PowerShell como Administrador
# O agregar la carpeta del proyecto a Docker Desktop File Sharing
```

### Error: "Container keeps restarting"
```bash
# Ver logs del contenedor
docker-compose logs web

# Verificar health check
docker-compose ps
```

### Error: "Hot reload not working"
```bash
# Usar configuración específica para Windows
docker-compose -f docker-compose.windows.yml up --build

# O agregar estas variables de entorno:
environment:
  - WATCHPACK_POLLING=true
  - CHOKIDAR_USEPOLLING=true
```

## 📊 Monitoreo y Logs

### Ver logs en tiempo real
```bash
./scripts/docker.sh logs
```

### Ver estado de servicios
```bash
./scripts/docker.sh status
```

### Entrar al contenedor
```bash
./scripts/docker.sh shell
```

## 🧹 Mantenimiento

### Limpiar recursos no utilizados
```bash
./scripts/docker.sh cleanup
```

### Reconstruir imagen
```bash
./scripts/docker.sh rebuild
```

### Actualizar dependencias
```bash
# Detener contenedores
./scripts/docker.sh stop

# Reconstruir
./scripts/docker.sh rebuild

# Iniciar de nuevo
./scripts/docker.sh dev
```

## 🔒 Seguridad

### Usuario no-root
El Dockerfile crea un usuario no-root (`nextjs`) para mayor seguridad.

### Variables de entorno
- `NODE_ENV`: Define el entorno (development/production)
- `NEXT_TELEMETRY_DISABLED`: Desactiva telemetría de Next.js
- `WATCHPACK_POLLING`: Habilita polling para hot-reload

### Health Checks
El contenedor incluye health checks que verifican el estado de la aplicación.

## 📈 Optimizaciones

### Cache de capas
El Dockerfile está optimizado para aprovechar el cache de capas de Docker.

### Volúmenes
- `.:/app`: Código fuente
- `/app/node_modules`: Dependencias
- `/app/.next`: Build de Next.js

### Recursos
En producción, se limitan los recursos del contenedor para evitar sobrecarga.

## 🌐 Redes

### Redes personalizadas
Cada entorno tiene su propia red para aislar servicios.

### Puertos
- `3000`: Aplicación web
- `5432`: Base de datos (opcional)

## 📝 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `dev` | Iniciar entorno de desarrollo |
| `prod` | Iniciar entorno de producción |
| `stop` | Detener servicios |
| `logs` | Mostrar logs |
| `shell` | Entrar al contenedor |
| `rebuild` | Reconstruir imagen |
| `status` | Mostrar estado de servicios |
| `cleanup` | Limpiar contenedores y volúmenes |
| `help` | Mostrar ayuda |

## 🔄 Flujo de Trabajo Recomendado

1. **Desarrollo diario**: `./scripts/docker.sh dev`
2. **Testing**: `./scripts/docker.sh status`
3. **Debugging**: `./scripts/docker.sh logs`
4. **Deploy**: `./scripts/docker.sh prod`
5. **Mantenimiento**: `./scripts/docker.sh cleanup`

## 📞 Soporte

Si encuentras problemas:

1. Verifica que Docker Desktop esté corriendo
2. Ejecuta `./scripts/docker.sh status`
3. Revisa los logs con `./scripts/docker.sh logs`
4. Limpia y reconstruye con `./scripts/docker.sh cleanup && ./scripts/docker.sh rebuild`

## 🔗 Enlaces Útiles

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Next.js Docker Guide](https://nextjs.org/docs/deployment#docker-image)
- [Docker Desktop for Windows](https://docs.docker.com/desktop/windows/)

