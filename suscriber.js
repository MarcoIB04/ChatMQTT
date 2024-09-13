import mqtt from "mqtt";

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



//Suscriber function to recibe messages 

export default function suscriber(topic) {
    client.on('connect', () => {
      console.log('Conectado al broker MQTT');
      client.subscribe([topic], () => {
        console.log(`Suscrito al tema '${topic}'`);
      });
    });
  
    client.on('message', (topic, payload) => {
      console.log('Mensaje recibido:', topic, payload.toString());
    });
  }