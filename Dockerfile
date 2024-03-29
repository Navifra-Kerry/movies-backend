FROM node:16.13.2-alpine
WORKDIR /usr/src/app
EXPOSE 4000

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
CMD [ "node", "dist/main" ]
