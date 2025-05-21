function CETEI() {}
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

window.CETEI = CETEI;
