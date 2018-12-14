const { readFile, writeFile } = require("./io");
const { TARGET_FILE_PATH } = require("./constant");
const { replaceTitle } = require("./replacer");

const { argv } = process;

const args = argv.slice(2, argv.length);

async function main() {
  let filename = args[0];
  let result = await readFile(TARGET_FILE_PATH);

  let replaceResult = replaceTitle(result, filename);

  await writeFile(TARGET_FILE_PATH, replaceResult);
}

main();
