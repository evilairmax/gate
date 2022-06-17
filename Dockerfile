FROM node:alpine AS builder

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

USER node

ENV YARN_CACHE_FOLDER=/dev/shm/yarn_cache
RUN yarn install --production --frozen-lockfile

COPY . /usr/src/app

RUN yarn build

CMD [ "yarn", "start" ]
