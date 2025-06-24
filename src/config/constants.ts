export const config = {
  API_URL: process.env.API_URL || 'http://localhost:3000',
  MONGO_CONNECTION:
    process.env.MONGO_CONNECTION || 'mongodb://localhost:27017/url-shortener',
};
