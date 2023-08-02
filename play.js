const net = require("net");
const { connect } = require('./client');
const { stdin } = require("process");

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = () => {
  if (key === '\u0003') {
    process.exit();
  }
};

console.log("Connecting ...");
connect();

stdin.on("data", handleUserInput);