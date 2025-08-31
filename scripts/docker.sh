#!/bin/bash

# Script para manejar operaciones de Docker para AQSWeb
# Uso: ./scripts/docker.sh [comando]

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para mostrar mensajes
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Función para verificar si Docker está corriendo
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        error "Docker no está corriendo. Por favor inicia Docker Desktop."
        exit 1
    fi
}

# Función para limpiar contenedores y volúmenes
cleanup() {
    log "Limpiando contenedores y volúmenes..."
    docker-compose down -v --remove-orphans
    docker system prune -f
    log "Limpieza completada."
}

# Función para desarrollo
dev() {
    log "Iniciando entorno de desarrollo..."
    check_docker
    docker-compose -f docker-compose.dev.yml up --build
}

# Función para producción
prod() {
    log "Iniciando entorno de producción..."
    check_docker
    docker-compose -f docker-compose.prod.yml up --build -d
}

# Función para detener servicios
stop() {
    log "Deteniendo servicios..."
    docker-compose down
    log "Servicios detenidos."
}

# Función para ver logs
logs() {
    log "Mostrando logs..."
    docker-compose logs -f
}

# Función para entrar al contenedor
shell() {
    log "Entrando al contenedor..."
    docker-compose exec web sh
}

# Función para rebuild
rebuild() {
    log "Reconstruyendo imagen..."
    docker-compose build --no-cache
    log "Imagen reconstruida."
}

# Función para mostrar estado
status() {
    log "Estado de los servicios:"
    docker-compose ps
}

# Función para mostrar ayuda
help() {
    echo "Uso: $0 [comando]"
    echo ""
    echo "Comandos disponibles:"
    echo "  dev      - Iniciar entorno de desarrollo"
    echo "  prod     - Iniciar entorno de producción"
    echo "  stop     - Detener servicios"
    echo "  logs     - Mostrar logs"
    echo "  shell    - Entrar al contenedor"
    echo "  rebuild  - Reconstruir imagen"
    echo "  status   - Mostrar estado de servicios"
    echo "  cleanup  - Limpiar contenedores y volúmenes"
    echo "  help     - Mostrar esta ayuda"
}

# Comando principal
case "${1:-help}" in
    dev)
        dev
        ;;
    prod)
        prod
        ;;
    stop)
        stop
        ;;
    logs)
        logs
        ;;
    shell)
        shell
        ;;
    rebuild)
        rebuild
        ;;
    status)
        status
        ;;
    cleanup)
        cleanup
        ;;
    help|*)
        help
        ;;
esac

