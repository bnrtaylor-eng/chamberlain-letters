function CETEI() {
  this.behaviors = {};
  this.extensions = {};
  this.style = null;
}

CETEI.prototype.addBehaviors = function(styleContent) {
  const style = document.createElement("style");
  style.innerHTML = styleContent;
  document.head.appendChild(style);
};

CETEI.prototype.getHTML = function(file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(str => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(str, "application/xml");
      const html = this.convert(xml);

      console.log("Parsed root tag:", xml.documentElement.tagName);
      console.log("Parsed namespace:", xml.documentElement.namespaceURI);

      callback(html);
    })
    .catch(err => {
      console.error("Failed to load or parse TEI XML:", err);
    });
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
      if (node.firstChild) {
        htmlElement.appendChild(node.firstChild);
      }
      node.parentNode.replaceChild(htmlElement, node);
    }
  }

  transformed.appendChild(root);
  return transformed;
};

window.CETEI = CETEI;
