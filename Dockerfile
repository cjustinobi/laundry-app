
FROM node:11.10.1-alpine AS builder

ENV NODE_ENV=production
ENV HOST 0.0.0.0

WORKDIR /app

COPY package*.json /app

COPY --from=builder /app /usr/share/nginx/html

FROM nginx

ADD nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
CMD nginx -g "daemon off;"

COPY --from=builder /app /usr/share/nginx/html

RUN npm install
RUN npm run build
CMD ["npm", "start"]