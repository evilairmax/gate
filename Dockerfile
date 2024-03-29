FROM node:18.12.1 AS builder

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

COPY yarn.lock /usr/src/app

RUN yarn install --production

COPY . /usr/src/app

RUN yarn build

CMD [ "yarn", "start" ]

EXPOSE 3000
