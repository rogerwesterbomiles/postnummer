FROM node:lts-buster-slim as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

RUN npm run build:prod

FROM nginx:latest
WORKDIR /app

COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/WebApp /app

CMD ["/bin/sh",  "-c",  "envsubst < /app/assets/env.template.js > /app/assets/env.js && exec nginx -g 'daemon off;'"]
