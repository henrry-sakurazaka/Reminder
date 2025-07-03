
FROM node:18-slim


WORKDIR /api

COPY package*.json ./
RUN npm install


COPY . .


ENV GOOGLE_APPLICATION_CREDENTIALS=/api/serviceAccountKey.json

# アプリがリッスンするポートを指定（任意だが記述推奨）
EXPOSE 3001


CMD ["node", "server2.js"]
