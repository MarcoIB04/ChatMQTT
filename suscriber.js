import mqtt from "mqtt"; // Importa la librería MQTT

// Configuración del protocolo y detalles de conexión
const protocol = 'mqtt';
const host = '52.90.90.9'; // Dirección IP del broker MQTT
const port = '1883'; // Puerto estándar para conexiones MQTT
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`; // Genera un clientId único
const connectUrl = `${protocol}://${host}:${port}`; // Crea la URL de conexión

// Se conecta al broker con opciones de autenticación y reconexión
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true, // Si true, borra el historial de sesión cuando se desconecta
  connectTimeout: 4000, // Tiempo máximo de espera para la conexión
  username: 'Osmar', // Usuario del broker MQTT
  password: '2305', // Contraseña del broker MQTT
  reconnectPeriod: 1000, // Tiempo de espera antes de intentar reconectar
});

// Función para suscribirse a un tema y recibir mensajes
export default function suscriber(topic) {
    // Cuando el cliente se conecta al broker
    client.on('connect', () => {
      console.log('Conectado al broker MQTT');
      client.subscribe([topic], () => { // Se suscribe al tema especificado
        console.log(`Suscrito al tema '${topic}'`);
      });
    });
  
    // Cuando se recibe un mensaje, lo imprime en la consola
    client.on('message', (topic, payload) => {
      console.log('Mensaje recibido:', topic, payload.toString()); // Convierte el mensaje a string y lo muestra
    });
}
