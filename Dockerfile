FROM node:14

WORKDIR /app

RUN mkdir -p public

COPY index.html /app/public/

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
