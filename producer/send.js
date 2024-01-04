const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err0, conn) => {
  if (err0) throw err0;

  conn.createChannel((err1, chanel) => {
    if (err1) throw err1;

    const queue = 'hello';
    const msg = 'Hello World!';

    chanel.assertQueue(queue, { durable: false });

    chanel.sendToQueue(queue, Buffer.from(msg));
    console.log('Message has been sent');
  });

  setTimeout(() => {
    conn.close();
    process.exit(0);
  }, 500);
});
