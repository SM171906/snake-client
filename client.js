const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("hi connected!!!...");
  });
  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
   
});
  conn.on("end", () => {
    console.log("you dead cuz idling!!");
    
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


console.log("Connecting ...");
connect();
module.exports = connect;