const { stdin } = require('process');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  switch (key) {
    case 'w':
      connection.write("Move: up");
      break;
    case 'a':
      connection.write("Move: left");
      break;
    case 's':
      connection.write("Move: down");
      break;
    case 'd':
      connection.write("Move: right");
      break;
    case 'f':
      connection.write("Say: *snake sounds*");
      break;
    case 'e':
      connection.write("Say: 🐍");
      break;
  }
};

stdin.on('data', handleUserInput);

module.exports = { setupInput };