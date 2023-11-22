const net = require('net');

const connect = function() 
{
  // when we return conn we will return this object that connects to the server
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  // we are writing a message to know that we connected to the server
  conn.on("connect", () => {
 
// this would make us move up but only up
  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 100);

 
  console.log("WE IN THE SERVER ");
  
  conn.write("Name: Jan");
  });
  // right when we connect we are sending data over to the server to move our snake up
  // will output what server is saying to the client
  conn.on("data", (data) =>{
    console.log(data);
  });
  
  
  conn.setEncoding('utf-8');
  return conn;
}
module.exports =  {
  connect,
}