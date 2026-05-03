# Étape de construction (Build)
FROM node:20-alpine AS builder

# Activer corepack pour utiliser pnpm
RUN corepack enable

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances
RUN pnpm install --frozen-lockfile

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application (Vite génère les fichiers dans le dossier dist par défaut)
RUN pnpm run build

# Étape de production (Serve)
FROM nginx:alpine

# Copier les fichiers statiques construits vers le dossier servi par nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Optionnel : copier une configuration nginx personnalisée si nécessaire
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
