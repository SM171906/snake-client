const net = require("net");
const stdin = process.stdin;
// establishes a connection with the game server


const {connect} = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function () {
  // your code here
  // \u0003 maps to ctrl+c input
if (key === '\u0003') {
  process.exit();
}
};