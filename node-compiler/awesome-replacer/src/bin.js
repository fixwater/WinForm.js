const { main } = require("./main");

const { argv } = process;
const args = argv.slice(2, argv.length);
const filename = args[0];

main(filename);
