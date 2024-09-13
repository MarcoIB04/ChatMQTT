import suscriber from './suscriber.js';
import publishMessage from './publisher.js';
import readline from 'readline';

const topic = 'test';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Mensaje: ', (message) => {
  publishMessage(topic, message);
  
  rl.close();
});