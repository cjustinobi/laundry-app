
FROM node:11.10.1-alpine AS builder

ENV NODE_ENV=production
ENV HOST 0.0.0.0

RUN mkdir -p /app
COPY . /app
WORKDIR /app

#FROM nginx
#ADD webapp.html /www/
#ADD nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
#EXPOSE 443
#CMD nginx -g "daemon off;"


EXPOSE 9000

RUN npm install
RUN npm run build
CMD ["npm", "start"]

#COPY --from=builder /app /usr/share/nginx/html