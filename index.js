import suscriber from './suscriber.js';
import publishMessage from './publisher.js';

const CONSTANTE_1 = process.env.SUS;
const CONSTANTE_2 = process.env.PUB;

console.log(`Estas recibiendo mensajes de: ${CONSTANTE_1}`);
console.log(`Estas enviando mensajes de: ${CONSTANTE_2}`);

suscriber(CONSTANTE_1)
publishMessage(CONSTANTE_2)