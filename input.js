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

let current;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  switch (key) {
  case 'w':
    clearInterval(current);
    current = setInterval(() => {
      connection.write("Move: up");
    }, 150);
    break;
  case 'a':
    clearInterval(current);
    current = setInterval(() => {
      connection.write("Move: left");
    }, 150);
    break;
  case 's':
    clearInterval(current);
    current = setInterval(() => {
      connection.write("Move: down");
    }, 150);
    break;
  case 'd':
    clearInterval(current);
    current = setInterval(() => {
      connection.write("Move: right");
    }, 150);
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