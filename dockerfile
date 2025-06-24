FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

# Apply temporary fixes
RUN npm install --save-dev typescript@latest @types/node@18

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]