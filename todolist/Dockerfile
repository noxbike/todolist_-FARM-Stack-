FROM node:16-alpine

WORKDIR /frontapp

COPY . .

RUN npm install
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
RUN npm install react-scripts

EXPOSE 3000:3000

CMD ["npm", "run", "start"]