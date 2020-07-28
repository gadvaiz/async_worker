const amqp = require("amqplib");
//export publish function
module.exports.publish = async (queue, message) => {
  try {
    //connect to rabitMQ
    const connection = await amqp.connect("amqp://rabbit:5672/");

    //create a channel
    const channel = await connection.createChannel();

    //create the queues if it dosent exists
    await channel.assertQueue(queue);

    //publish message  to rabitMq by type (email,sms)
    await channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  } catch (err) {
    console.error(err);
  }
};
