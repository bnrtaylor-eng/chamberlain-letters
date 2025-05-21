function CETEI() {
  this.behaviors = {};
  this.extensions = {};
  this.style = null;
}

CETEI.prototype.addBehaviors = function(behaviors) {
  for (let ns in behaviors) {
    if (!this.behaviors[ns]) this.behaviors[ns] = {};
    Object.assign(this.behaviors[ns], behaviors[ns]);
  }
};

CETEI.prototype.getHTML = function(file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(str => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(str, "application/xml");
      const html = this.convert(xml);
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
      let ns = node.namespaceURI;
      let localName = node.localName;
      console.log("Converting:", node.localName, "| Namespace:", ns);
      if (!this.behaviors[ns] || !this.behaviors[ns][localName]) {
        console.warn("⚠️ No behavior found for", localName, "in namespace", ns);
      }
      let behavior = this.behaviors[ns]?.[localName];
      let replacement;
      if (behavior) {
        if (typeof behavior === "function") {
          replacement = behavior(node);
        } else if (Array.isArray(behavior)) {
          replacement = document.createElement(behavior[0]);
          for (let attr of node.attributes) {
            replacement.setAttribute(attr.name, attr.value);
          }
          if (behavior[2] === 0 && node.firstChild) {
            while (node.firstChild) {
              replacement.appendChild(node.firstChild);
            }
          }
        }
      } else {
        replacement = document.createElement(`tei-${localName}`);
        for (let attr of node.attributes) {
          replacement.setAttribute(attr.name, attr.value);
        }
        while (node.firstChild) {
          replacement.appendChild(node.firstChild);
        }
      }
      node.parentNode.replaceChild(replacement, node);
    }
  }

  transformed.appendChild(root);
  return transformed;
};

window.CETEI = CETEI;
