import config from '../../config';
import { createClient } from 'redis';

const client = createClient({
    url: config.REDIS_URL,
  });

client.on('connect', ()=> console.log('redis connected sucessfully...'));
  
client.on('error', err => console.log('Redis not connected', err));

export default client;
