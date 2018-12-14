const path = require("path");

// hard code (TODO)
const TARGET_FILE_PATH = path.join("..", "output", "Form1.Designer.cs");
const SOURCE_FILE_PATH = path.join("..", "input", "form1");
const TPL_PATH = path.join(
  "..",
  "template",
  "winform-hello",
  "Form1.Designer.cs"
);

module.exports = {
  TARGET_FILE_PATH,
  SOURCE_FILE_PATH,
  TPL_PATH
};
