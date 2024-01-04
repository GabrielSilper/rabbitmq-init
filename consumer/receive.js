const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err0, conn) => {
  if (err0) throw err0;

  conn.createChannel((err1, chanel) => {
    if (err1) throw err1;

    const queue = 'hello';

    chanel.assertQueue(queue, {
      durable: false,
    });

    console.log(`Waiting for messages in ${queue} queue. to Exit press CTRL+C`);
    chanel.consume(queue, (msg) => {
      console.log(`New message => ${msg.content.toString()}`);
    });
  });
});
