/*!
 * CETEIcean 1.10.3 (abridged full feature version including addBehaviors)
 * https://github.com/TEIC/CETEIcean
 */
function CETEI() {
  this.behaviors = {};
  this.extensions = {};
  this.style = null;
}

CETEI.prototype.addBehaviors = function(behaviors) {
  for (let prefix in behaviors) {
    if (!this.behaviors[prefix]) this.behaviors[prefix] = {};
    Object.assign(this.behaviors[prefix], behaviors[prefix]);
  }
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
      let prefix = "tei";
      let localName = node.localName;
      let behavior = this.behaviors[prefix]?.[localName];
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
