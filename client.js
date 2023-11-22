const net = require('net');

const connect = function() {
  // when we return conn we will return this object that connects to the server
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  })
  conn.setEncoding('utf-8');
  // will output what server is saying to the client
  conn.on("data", (data) =>{
    console.log(data);
  })


  return conn;
}
module.exports =  {
  connect,
}