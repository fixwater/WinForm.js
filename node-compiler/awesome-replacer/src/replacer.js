const TARGET_MATCH_TITLE = /(this.label1.Text\s*=\s*)"[^"]+"/;
const SOURCE_MATCH_TITLE = /<Label(?:\s*[:@-]?\w+="[^"]+?"\s*)*>([^{}]+)<\/Label>/;

function findTitleInSource(originContent) {
  return SOURCE_MATCH_TITLE.exec(originContent)[1];
}

function replaceTitle(sourceContent, targetContent) {
  sourceContent = sourceContent.toString();
  targetContent = targetContent.toString();

  let targetTitle = findTitleInSource(sourceContent);

  if (!targetTitle || targetTitle === "") {
    throw new Error("Please check your source file does exist title");
  }

  return targetContent.replace(
    TARGET_MATCH_TITLE,
    (_match, capture) => `${capture}"${targetTitle}"`
  );
}

module.exports = {
  replaceTitle
};
