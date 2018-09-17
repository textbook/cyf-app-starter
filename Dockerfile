FROM node:carbon-alpine as react

WORKDIR /client

COPY /client/package.json .
COPY /client/package-lock.json .

RUN npm install

COPY /client/public ./public
COPY /client/src ./src

RUN npm run build

FROM node:carbon-alpine
WORKDIR /server
COPY /package.json .
COPY /package-lock.json .

RUN npm install --only=prod

COPY /server .
COPY --from=react /client/build /public

CMD node server.js
