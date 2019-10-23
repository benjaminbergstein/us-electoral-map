FROM node:latest

EXPOSE 8080

WORKDIR /app
ADD ./package.json .
ADD ./yarn.lock .
RUN yarn

ADD . /app

ENTRYPOINT ["yarn"]
CMD ["start"]
