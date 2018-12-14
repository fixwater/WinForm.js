const { main } = require("./main");

const { argv } = process;
const args = argv.slice(2, argv.length);
const filename = args[0];

if (!filename) {
  throw new Error("The filename cannot be undefined!");
}

try {
  main(filename);
} catch (e) {
  throw e;
}

console.info("Replace successful !!!");
