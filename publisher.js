import mqtt from "mqtt"; // Importa la librería MQTT
import readline from 'readline'; // Importa readline para manejar la entrada desde la consola

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

// Configura readline para manejar la entrada y salida desde la consola
const rl = readline.createInterface({
  input: process.stdin, // Entrada desde el teclado
  output: process.stdout // Salida a la consola
});

// Función para manejar la entrada del usuario y publicar mensajes en un tema
export default function publishMessage(topic) {
  console.log('Escribe un mensaje (o "salir" para terminar): ');
  
  // Función que solicita al usuario que ingrese un mensaje
  const promptUser = () => {
    rl.question('', (message) => {
      if (message.toLowerCase() === 'salir') { // Si el mensaje es 'salir', se cierra el programa
        console.log('Terminando el programa.');
        rl.close();
        return;
      }

      // Publica el mensaje en el tema especificado
      client.publish(topic, message, {
        qos: 0, // Nivel de calidad del servicio (QoS)
        retain: false, // Si true, retiene el último mensaje en el tema
      });

      console.log(`Mensaje enviado a ${topic}: ${message}`); // Muestra el mensaje enviado
      promptUser(); // Vuelve a pedir otro mensaje al usuario
    });
  };

  promptUser(); // Inicia el ciclo de solicitud de mensajes
}
