const { readFile, writeFile } = require("./io");
const { TARGET_FILE_PATH } = require("./constant");
const { replaceTitle } = require("./replacer");

exports.main = async function(filename) {
  let result = await readFile(TARGET_FILE_PATH);
  let replaceResult = replaceTitle(result, filename);

  await writeFile(TARGET_FILE_PATH, replaceResult);
};
