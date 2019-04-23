
#FROM node:11.10.1-alpine AS builder

#ENV NODE_ENV=production
#ENV HOST 0.0.0.0

#WORKDIR /app

#COPY package*.json /app

#COPY --from=builder /app /usr/share/nginx/html

#RUN npm install

#FROM nginx

#ADD nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
#EXPOSE 443
#CMD nginx -g "daemon off;"

#COPY --from=builder /app /usr/share/nginx/html

#RUN npm install
#RUN npm run build
#CMD ["npm", "start"]


FROM node:11.10.1-alpine

# Create app directory
WORKDIR '/app'

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./


RUN npm install
#RUN npm run build
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 80
CMD [ "npm", "run", "start" ]