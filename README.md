# ChatMQTT - Messaging Application with MQTT

ChatMQTT is a messaging application that uses the MQTT protocol for publishing and subscribing to messages on different topics.

## Requirements

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)
- An MQTT broker (e.g., [EMQX](https://www.emqx.io/))

## Installation

1. Clone this repository or download the source code:

   ```bash
   git clone https://github.com/MarcoIB04/ChatMQTT
   cd ChatMQTT
   ```

2. Install the MQTT package:

   ```bash
   npm install mqtt --save
    ```
    
## Configuration

The program requires you to define the subscription and publication topics through environment variables before running the code.

- `SUS`: The topic you want to subscribe to receive messages.
- `PUB`: The topic you want to publish messages to.

## Usage

To run the application, define the `SUS` and `PUB` environment variables and then execute the `index.js` file:

```bash
SUS=<SUBSCRIPTION_TOPIC> PUB=<PUBLICATION_TOPIC> node index.js
```


### Technical Details

- The `index.js` file uses the environment variables to define the subscription and publication topics.
- `suscriber.js`: Function that handles subscription to an MQTT topic.
- `publisher.js`: Function that handles publishing messages to an MQTT topic.

## Project Structure

- `index.js`: Main file that orchestrates message subscription and publication.
- `publisher.js`: Module that publishes messages to a topic.
- `suscriber.js`: Module that subscribes to a topic and listens for messages.
- `package.json`: Project configuration file and dependencies.

# ChatMQTT - Messaging Application with MQTT

ChatMQTT is a messaging application that uses the MQTT protocol for publishing and subscribing to messages on different topics.

## Requirements

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)
- An MQTT broker (e.g., [EMQX](https://www.emqx.io/))

## Installation

1. Clone this repository or download the source code:

   ```bash
   git clone https://github.com/MarcoIB04/ChatMQTT
   cd ChatMQTT
   ```

2. Install the MQTT package:

   ```bash
   npm install mqtt --save
    ```
    
## Configuration

The program requires you to define the subscription and publication topics through environment variables before running the code.

- `SUS`: The topic you want to subscribe to receive messages.
- `PUB`: The topic you want to publish messages to.

## Usage

To run the application, define the `SUS` and `PUB` environment variables and then execute the `index.js` file:

```bash
SUS=<SUBSCRIPTION_TOPIC> PUB=<PUBLICATION_TOPIC> node index.js
```


### Technical Details

- The `index.js` file uses the environment variables to define the subscription and publication topics.
- `suscriber.js`: Function that handles subscription to an MQTT topic.
- `publisher.js`: Function that handles publishing messages to an MQTT topic.

## Project Structure

- `index.js`: Main file that orchestrates message subscription and publication.
- `publisher.js`: Module that publishes messages to a topic.
- `suscriber.js`: Module that subscribes to a topic and listens for messages.
- `package.json`: Project configuration file and dependencies.
