FROM node:alpine

WORKDIR /app
COPY . .
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]