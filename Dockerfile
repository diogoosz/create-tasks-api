FROM node:18

# Cria diretório dentro da imagem
WORKDIR /app

# Copia apenas os arquivos de package para instalar dependências primeiro (cache)
COPY backend/package*.json ./backend/

# Instala dependências dentro da pasta backend
RUN cd backend && npm install

# Agora copia todo o backend para dentro da imagem
COPY backend ./backend

# Define diretório final da aplicação
WORKDIR /app/backend

# Expõe a porta da API
EXPOSE 3000

# Comando para iniciar a API
CMD ["npm", "start"]
