import { connect } from 'mongoose';
import config from './config';
import app from './app';

(async () => {
  await connect(config.MONGO_URL);
  console.log('Successfully connected to database: myApp');

  const port: number = parseInt(process.env.PORT! || '3000', 10);

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
  });
})();
