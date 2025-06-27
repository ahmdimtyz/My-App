# client/Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Production build
RUN npm run build

# Serve with simple server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

EXPOSE 3000
