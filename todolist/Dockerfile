FROM node:16-alpine

WORKDIR /todolist

COPY package.json .
COPY package-lock.json .

RUN npm install
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
RUN npm install react-scripts

COPY . .

EXPOSE 3000:3000

CMD ["npm", "run", "start"]