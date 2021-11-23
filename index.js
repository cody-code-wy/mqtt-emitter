import mqtt from 'mqtt';

var client = mqtt.connect('mqtt://rabbitmq-service:1883',{clientId:'mqttjs01'});
client.on("connect", (c) => {
  console.log('connected')
  if ( c.clean ) {
    console.log("Sending testtopic");
    client.publish("testtopic", "test message")
  }
});
client.on("error", (e) => { console.log(`Can't connect ${e}`) });
client.on("reconnect", (e) => { console.log("reconnecting") });
client.on("close", (e) => { console.log("closed") });

