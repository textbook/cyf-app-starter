FROM node:carbon-alpine

COPY /package.json .
COPY /package-lock.json .

RUN npm install

COPY /public ./public
COPY /src ./src

CMD npm start
