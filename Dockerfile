FROM node:16.13.2-alpine
WORKDIR /usr/src/app
EXPOSE 4000

COPY package*.json ./

RUN npx -g @nestjs/cli
RUN npm install --only=production
RUN npm ci --only=production

COPY . .

RUN npm run build
CMD [ "node", "dist/main" ]