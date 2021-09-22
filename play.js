const net = require("net");
const stdin = process.stdin;
// establishes a connection with the game server


const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();
