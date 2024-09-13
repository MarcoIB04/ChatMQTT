import mqtt from"mqtt";
import readline from 'readline';

const topic = 'test';

const protocol = 'mqtt';
const host = '54.89.184.239';
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

//Publisher function to send messages 
export default function publishMessage() {
    rl.question('Mensaje: ', (message) => {
        client.publish(topic, message, {
        qos: 0,
        retain: false,
        });
        console.log(`Sent to topic: ${topic}`);
    rl.close();
    })

  }