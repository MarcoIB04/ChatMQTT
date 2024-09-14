//Importamos las funciones necesarias de suscriber.js y publisher.js
import suscriber from './suscriber.js';
import publishMessage from './publisher.js';

// Asigna las variables de entorno SUS y PUB a constantes
// CONSTANTE_1: Tópico al cual se suscribe el cliente
// CONSTANTE_2: Tópico al cual el cliente publica mensajes
const CONSTANTE_1 = process.env.SUS;
const CONSTANTE_2 = process.env.PUB;

// Muestra los tópicos en los que el cliente está suscribiéndose y publicando
console.log(`Estas recibiendo mensajes de: ${CONSTANTE_1}`);
console.log(`Estas enviando mensajes a: ${CONSTANTE_2}`);

// Llama a la función de suscripción, que escucha mensajes en el tópico especificado
suscriber(CONSTANTE_1);

// Llama a la función de publicación de mensajes, permitiendo al usuario enviar mensajes al tópico
publishMessage(CONSTANTE_2);
