const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
    
  });
  conn.on("connect", (connect) => {
    // code that does something when the connection is first established
    conn.write("Name: SM");
    conn.write("Say: Hey");
    console.log("Successfully connected to game server");
    //conn.write("Move: left");
    //conn.write("Move: down");
    
    console.log("hi connected!!!...");
    
  });
  
  conn.on('data', (data) => {
    // 

    // conn.write("Move: up");
    // conn.write("Move: left");
    console.log("DATA CAME IN!!!!!");
   
});
  conn.on("end", () => {
    console.log("you dead cuz idling!!");
    
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};



module.exports = connect;