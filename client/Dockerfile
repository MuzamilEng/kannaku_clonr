# Build stage
FROM node:latest as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm@9.5.1
RUN npm install --legacy-peer-deps

COPY . .


# Production stage
FROM node:latest as production-stage

WORKDIR /app

COPY --from=build-stage /app .

EXPOSE 3010

CMD ["npm", "run", "dev"]
