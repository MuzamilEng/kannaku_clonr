# Build stage
FROM node:16.3.0-alpine AS build
RUN apk add g++ make py3-pip
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@8.19.3
RUN npm install

# Final stage
FROM node:16.3.0-alpine
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY . .
EXPOSE 8080
CMD ["npm","run", "prod"]