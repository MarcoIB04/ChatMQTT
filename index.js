const mqtt = require('mqtt');

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

//Suscriber function to recibe messages 
function suscriber(topic) {
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

//Publisher function to send messages 
function publishMessage(topic, message) {
  console.log(`Sending Topic: ${topic}, Message: ${message}`);
  client.publish(topic, message, {
    qos: 0,
    retain: false,
  });
}


//suscriber("test")

publishMessage("test", "mensaje")