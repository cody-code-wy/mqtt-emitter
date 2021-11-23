import mqtt from 'mqtt';

var client = mqtt.connect('mqtt://rabbitmq-service:1883',{clientId:'mqttjs01'});
client.on("connect", (c) => {
  console.log('connected')
  console.log(JSON.stringify(c))
});
client.on("error", (e) => { console.log(`Can't connect ${e}`) });
client.on("reconnect", (e) => { console.log("reconnecting") });
client.on("close", (e) => { console.log("closed") });

setInterval( () => {
  if ( client.connected == true ) {
    console.log("Sending root");
    client.publish("openflowx/root", JSON.stringify({key: 'value'}));
  }
}, 1000 );
