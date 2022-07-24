FROM node:16-alpine3.15 as builder

WORKDIR /var/www/html

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.20.1

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /var/www/html/build /var/www/html