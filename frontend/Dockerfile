FROM node:24-alpine AS builder

WORKDIR /app

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","start"]