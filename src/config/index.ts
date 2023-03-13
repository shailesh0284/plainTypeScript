import dotenv from 'dotenv';

dotenv.config();

const config = {
  MONGO_URL: `${process.env.DB_CONN_STRING!}/${process.env.DB_NAME!}`,
};

export default config;
