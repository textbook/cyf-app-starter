FROM node:carbon-alpine as react

WORKDIR /client

COPY /client/package.json .
COPY /client/package-lock.json .

RUN npm install

COPY /client/public ./public
COPY /client/src ./src

RUN npm run build

FROM node:carbon-alpine
COPY /package.json .
COPY /package-lock.json .

RUN npm install --only=prod

COPY /server /server
COPY --from=react /client/build /server/public

CMD npm run start:server
