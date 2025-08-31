FROM node:20-alpine

# Carpeta de trabajo
WORKDIR /app

# Copiar package.json primero para cache
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer puerto
EXPOSE 3000

# Comando para desarrollo
CMD ["npm", "run", "dev"]
