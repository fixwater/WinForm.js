const { readFile, writeFile } = require("./io");
const { TARGET_FILE_PATH, SOURCE_FILE_PATH, TPL_PATH } = require("./constant");
const { replaceTitle } = require("./replacer");

exports.main = async function(filename) {
  let sourceContent = await readFile(SOURCE_FILE_PATH);
  let targetContent = await readFile(TPL_PATH);
  let replaceResult = replaceTitle(sourceContent, targetContent, filename);

  await writeFile(TARGET_FILE_PATH, replaceResult);
};
