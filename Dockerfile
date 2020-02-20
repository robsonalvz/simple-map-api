FROM node:10

LABEL maintainer="Robson Alves (robson.alves@dce.ufpb.br)"

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# Install pm2 and other dependencies
RUN npm install -g nodemon
RUN npm install -g pm2
RUN npm install
RUN pm2 update

# Bundle app source
COPY . .

EXPOSE 5000

CMD ["pm2-runtime", "npm", "--", "run", "start"]
