
FROM node:11.10.1-alpine AS builder

ENV NODE_ENV=production
ENV HOST 0.0.0.0

RUN mkdir -p /app
COPY . /app
WORKDIR /app
# Expose the app port

FROM nginx
EXPOSE 80

RUN npm install
RUN npm run build
CMD ["npm", "start"]

COPY --from=builder /app /usr/share/nginx/html