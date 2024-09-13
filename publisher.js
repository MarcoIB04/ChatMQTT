import mqtt from "mqtt";
import readline from 'readline';

const protocol = 'mqtt';
const host = '52.90.90.9';
const port = '1883';
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
const connectUrl = `${protocol}://${host}:${port}`;
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'Osmar',
  password: '2305',
  reconnectPeriod: 1000,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para manejar la entrada del usuario y publicar mensajes
export default function publishMessage(topic) {
  console.log('Escribe un mensaje (o "salir" para terminar): ')
  const promptUser = () => {
    rl.question('', (message) => {
      if (message.toLowerCase() === 'salir') {
        console.log('Terminando el programa.');
        rl.close();
        return;
      }

      client.publish(topic, message, {
        qos: 0,
        retain: false,
      });
      console.log(`Mensaje enviado a ${topic}: ${message}`);
      promptUser(); // Vuelve a pedir otro mensaje
    });
  };

  promptUser(); // Inicia el bucle de entrada del usuario
}