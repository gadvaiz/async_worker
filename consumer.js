const mongoose = require("mongoose");
const { Email, Sms } = require("./models/messageModel");
const DB = "mongodb://mongo:27017/messages";
mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection succedeed"));
// consume messages from email and sms queues
const amqp = require("amqplib");
//export publish function
const consume = async (queue) => {
  try {
    //connect to rabitMQ
    let connection;
    try {
      connection = await amqp.connect("amqp://rabbit:5672/", {
        timeout: 10000,
      });
    } catch (err) {
      console.error(
        `connection to rabbit/${queue} failed, starting again in 5s, ${err}`
      );
      setTimeout(() => consume(queue), 5000);
      return;
    }
    console.info(`connection to rabbit/${queue} succeeded`);
    //create a channel
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    channel.consume(queue, (message) => {
      const result = JSON.parse(message.content.toString());
      //consume messages from each queue and write it to db.
      if (queue === "email") {
        Email.create({ message: JSON.stringify(result) });
      } else if (queue === "sms") {
        Sms.create({ message: JSON.stringify(result) });
      }

      //dequeue the message
      channel.ack(message);
      console.log(`from ${queue}: ${JSON.stringify(result)}`);
    });
  } catch (err) {
    console.error(err);
  }
};

consume("email").catch((err) => {
  console.error(err);
});
consume("sms").catch((err) => console.error(err));
