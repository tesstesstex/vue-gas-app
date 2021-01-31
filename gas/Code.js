function doGet() {
  return getHtml()
}

function getHtml() {
  const html = HtmlService.createTemplateFromFile('index')
  return html
    .evaluate()
    .setTitle('vue-gas-app')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
}
