import dotenv from 'dotenv';

dotenv.config();

const config = {
  MONGO_URL: `${process.env.DB_CONN_STRING!}/${process.env.DB_NAME!}`,
  REDIS_URL: `redis://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
};

export default config;
