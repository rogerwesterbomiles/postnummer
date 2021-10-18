FROM node:lts-buster-slim as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build:prod

FROM nginx:latest
WORKDIR /app
# COPY /ssl/localhost.key .
# COPY /ssl/localhost.crt .
RUN ls -al .
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/WebApp /app
