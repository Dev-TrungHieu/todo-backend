FROM node:12.16-alpine

RUN mkdir - p /app
WORKDIR /app
ADD app.js .
ADD package.json .
RUN yarn install --production=true
ADD src ./src
RUN ls -ath
EXPOSE 4000
CMD ["yarn", "start"]
