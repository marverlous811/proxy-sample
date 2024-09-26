FROM node:20.17.0-alpine3.20
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY index.js index.js
CMD ["node", "index.js"]