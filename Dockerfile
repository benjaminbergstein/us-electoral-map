FROM node:latest

EXPOSE 8080

WORKDIR /app

ENV NODE_ENV production

ADD ./app/package.json /tmp
RUN cd /tmp && yarn

RUN mv /tmp/node_modules /app/node_modules

ADD ./app /app

RUN yarn build && yarn export

ENTRYPOINT ["yarn"]
CMD ["serve"]
