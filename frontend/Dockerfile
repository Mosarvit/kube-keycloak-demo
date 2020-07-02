FROM node:14.4.0-alpine3.10

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts -g
RUN npm install -g serve

COPY . ./

RUN npm run test-ci

EXPOSE 5000

# RUN npm run build:test

CMD ["npm", "start"]