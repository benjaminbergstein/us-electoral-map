FROM node:latest

EXPOSE 8080

WORKDIR /app
ADD package.json .
RUN yarn

ADD . /app

ENTRYPOINT ["yarn"]
CMD ["start"]
