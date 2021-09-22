
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function (key) {
  // your code here
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();

  } else if (key === 'w') {
    connection.write("Move: up");
    console.log("Move: up");

  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if(key === 'z') {
    connection.write("Say: I'll eat u");
  }
}


module.exports = setupInput;