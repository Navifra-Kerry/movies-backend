FROM node:16.13.2-alpine
WORKDIR /usr/src/app
EXPOSE 4000

COPY package*.json ./
RUN npm install

ADD dist/ /usr/src/app/

CMD [ "node", "main.js" ]