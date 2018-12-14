const { promisify } = require("util");
const fs = require("fs");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

module.exports = {
  readFile,
  writeFile
};
