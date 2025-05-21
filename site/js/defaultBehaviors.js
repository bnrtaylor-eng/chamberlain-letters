export default {
  "namespaces": {
    "tei": "http://www.tei-c.org/ns/1.0",
    "teieg": "http://www.tei-c.org/ns/Examples",
    "rng": "http://relaxng.org/ns/structure/1.0"  
  },
  "tei": {
    "eg": ["<pre>","</pre>"],
    // inserts a link inside <ptr> using the @target; the link in the
    // @href is piped through the rw (rewrite) function before insertion
    "ptr": ["<a href=\"$rw@target\">$@target</a>"],
    // wraps the content of the <ref> in an HTML link with the @target in 
    // the @href. If there are multiple @targets, only the first is used.
    "ref": [
      ["[target]", ["<a href=\"$rw@target\">","</a>"]]
    ],
    // creates an img tag with the @url as the src attribute
    "graphic": function(elt) {
      let content = elt.ownerDocument.createElement("img");
      content.src = this.rw(elt.getAttribute("url"));
      if (elt.hasAttribute("width")) {
        content.setAttribute("width",elt.getAttribute("width"));
      }
      if (elt.hasAttribute("height")) {
        content.setAttribute("height",elt.getAttribute("height"));
      }
      return content;
    },
    "list": [
      // will only run on a list where @type="gloss"
      ["[type=gloss]", function(elt) {
        const doc = elt.ownerDocument;
        let dl = doc.createElement("dl");
        for (let child of Array.from(elt.children)) {
          // nodeType 1 is Node.ELEMENT_NODE
          if (child.nodeType == 1) {
            if (child.localName == "tei-label") {
              let dt = doc.createElement("dt");
              dt.innerHTML = child.innerHTML;
              dl.appendChild(dt);
            }
            if (child.localName == "tei-item") {
              let dd = doc.createElement("dd");
              dd.innerHTML = child.innerHTML;
              dl.appendChild(dd);
            }
          }
        }
        return dl;
      }
    ]],
    "note": function(elt) {
      const doc = elt.ownerDocument;
      if (!doc.getElementById("tei-footnotes")) {
        const div = doc.createElement("div");
        div.id = "tei-footnotes";
        div.innerHTML = "<hr><ol></ol>";
        doc.body.appendChild(div);
      }

      const ol = doc.querySelector("#tei-footnotes ol");
      const number = ol.children.length + 1;

      const li = document.createElement("li");
      li.id = `note-${number}`;
      li.innerHTML = elt.innerHTML;
      ol.appendChild(li);

      const sup = document.createElement("sup");
      const a = document.createElement("a");
      a.href = `#note-${number}`;
      a.textContent = number;
      sup.appendChild(a);

      return sup;
    },
    // Hide the teiHeader by default
    "teiHeader": function(e) {
      this.hideContent(e, false);
    },
    // Make the title element the HTML title
    "title": [
      ["tei-titlestmt>tei-title", function(elt) {
        const doc = elt.ownerDocument;
        let title = doc.createElement("title");
        title.innerHTML = elt.innerText;
        doc.querySelector("head").appendChild(title);
      }]
    ],
  },
  "teieg": {
    "egXML": function(elt) {
      const doc = elt.ownerDocument;
      let pre = doc.createElement("pre");
      let code = doc.createElement("code");
      pre.appendChild(code);
      let content = this.serialize(elt, true).replace(/</g, "&lt;");
      let ws = content.match(/^[\t ]+/);
      if (ws) {
        content = content.replace(new RegExp("^" + ws[0], "mg"), "");
      }
      code.innerHTML = content;
      return pre;
    }
  }
}
