instructions:

1. clone repository

2. run the folowing command from the folder:
   docker-compose up --build

this will run image with:

1. rabbitmq
2. mongodb
3. web server (with nodejs image)

also start the node server.js and consumer.js

available routes is:

http://localhost/email/ID/status?[options]
for example:
http://localhost/email/ID/status?status=recive
http://localhost/sms/ID/status?[options]
for example:
http://localhost/email/ID/status?status=recive

http request type : POST

actions after build the image:
//open rabbitmq gui to see message in the queues

1. http://localhost:15672

2. open comapss to see dbs and messages collections
