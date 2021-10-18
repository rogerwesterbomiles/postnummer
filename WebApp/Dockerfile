FROM node:lts-buster-slim as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

ARG API_URL

ARG environmentFile=src/environments/environment.prod.ts
RUN sed -i -e 's#$BACKEND_URI#'"$API_URL"'#g' ${environmentFile}

RUN npm run build:prod

FROM nginx:latest
WORKDIR /app
# COPY /ssl/localhost.key .
# COPY /ssl/localhost.crt .

COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/WebApp /app
