import { connect } from 'mongoose';
import config from './config';
import client from './clients/redis';
import app from './app';
import { getAllUsersDetails } from './services/redis/getAllUsers.redis';


(async () => {
  await connect(config.MONGO_URL);
  console.log('Successfully connected to database: myApp');

  await client.connect();

  const port: number = parseInt(process.env.PORT! || '3000', 10);

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
  });
})();
