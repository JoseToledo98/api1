FROM node:16
WORKDIR /servicios
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 8081
CMD [ "node", "server.js" ]