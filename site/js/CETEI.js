/**
 * CETEIcean: A TEI-HTML converter for the browser.
 * TEI = Text Encoding Initiative
 */
function CETEI() {
  this.behaviors = {};
  this.extensions = {};
  this.style = null;
}

CETEI.prototype.addStyle = function(styleContent) {
  let style = document.createElement("style");
  style.innerHTML = styleContent;
  document.head.appendChild(style);
};

CETEI.prototype.getHTML = function(file, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", file);
  xhr.overrideMimeType("application/xml");
  xhr.onload = () => {
    const xml = xhr.responseXML;
    if (!xml) {
      console.error("Failed to parse XML.");
      return;
    }
    const html = this.convert(xml);
    callback(html);
  };
  xhr.send();
};

CETEI.prototype.convert = function(xml) {
  const transformed = document.createElement("div");
  const root = xml.documentElement;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, false);

  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const htmlElement = document.createElement(`tei-${node.localName}`);
      for (let attr of node.attributes) {
        htmlElement.setAttribute(attr.name, attr.value);
      }
      while (node.firstChild) {
        htmlElement.appendChild(node.firstChild);
      }
      node.parentNode.replaceChild(htmlElement, node);
    }
  }

  transformed.appendChild(root);
  return transformed;
};
