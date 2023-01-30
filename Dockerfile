FROM node:alpine
RUN npm install -g @nestjs/cli 

WORKDIR /app
COPY . /app
RUN npm i

EXPOSE 3000
CMD npm run start