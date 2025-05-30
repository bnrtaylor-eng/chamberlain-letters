const people = [
  {
    "id": "carleton-dudley",
    "name": "Dudley Carleton",
    "shortBio": "English diplomat and key correspondent of John Chamberlain. Later became Viscount Dorchester.",
    "letters": [
      "1–18",
      "20–50"
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Dudley_Carleton,_1st_Viscount_Dorchester",
      "odnb": "https://www.oxforddnb.com/display/10.1093/ref:odnb/9780198614128.001.0001/odnb-9780198614128-e-4713",
      "britannica": ""
    }
  },
  {
    "id": "chamberlain-john",
    "name": "John Chamberlain",
    "shortBio": "English letter writer and political observer. Central figure of this collection.",
    "letters": [
      "1–50"
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/John_Chamberlain_(letter_writer)",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "mathew-tobie",
    "name": "Tobie Mathew",
    "shortBio": "Later Archbishop of York; associated with political-religious tensions of the late Elizabethan era.",
    "letters": [
      1
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Tobias_Matthew",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "dormer-michael",
    "name": "Michael Dormer",
    "shortBio": "Placeholder: Likely a landowner or knight mentioned in Chamberlain\u2019s letters. To be expanded.",
    "letters": [
      1
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "st-john-judith",
    "name": "Judith St. John",
    "shortBio": "Placeholder: Referred to as Lady Pelham, daughter of Lord St. John. To be expanded.",
    "letters": [
      7
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "carleton-george",
    "name": "George Carleton",
    "shortBio": "Placeholder: Brother of Dudley Carleton. May have been involved in religious or legal circles.",
    "letters": [
      1
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/George_Carleton_(bishop)",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "goodwin-john",
    "name": "John Goodwin",
    "shortBio": "Placeholder: Maternal uncle of Dudley Carleton, referenced in a family context.",
    "letters": [
      1
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  }
];

export default people;

document.getElementsByTagName("tei-persName");
Array.from(document.getElementsByTagName("tei-persName")).forEach(el => {
  const ref = el.getAttribute("ref");
  if (ref && ref.startsWith("#")) {
    const id = ref.substring(1);
    const link = document.createElement("a");
    link.href = `/personography/${id}.html`;
    link.textContent = el.textContent;
    el.replaceWith(link);
  }
});