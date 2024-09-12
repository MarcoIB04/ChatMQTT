const mqtt = require('mqtt');

const protocol = 'mqtt';
const host = '34.226.121.255';
const port = '1883';
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `${protocol}://${host}:${port}`;

const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'Ale',
    password: '1234',
    reconnectPeriod: 1000,
});

// Definir la función personalizada
export default function suscribirATema(topic) {
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
