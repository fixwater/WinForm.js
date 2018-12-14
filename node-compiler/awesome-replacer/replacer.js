let MATCH_TITLE = /(this.label1.Text\s*=\s*)"[^"]+"/;

function replaceTitle(origin, title) {
  let originText = origin.toString();

  return originText.replace(
    MATCH_TITLE,
    (_match, capture1) => `${capture1}"${title}"`
  );
}

module.exports = {
  replaceTitle
};
