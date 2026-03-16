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
      1, 3
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
    "shortBio": "Member of Carleton's social circle. Chamberlain notes his participation in the Islands Voyage preparations and his subsequent movements in London.",
    "letters": [
      1, 3, 4
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
    "shortBio": "Brother of Dudley Carleton. Chamberlain relays messages from him and assists with book procurement on his behalf.",
    "letters": [
      1, 4
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
    "shortBio": "Maternal uncle of Dudley Carleton, referenced in a family context.",
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
    "id": "carleton-alice",
    "name": "Alice Carleton",
    "shortBio": "Sister of Dudley Carleton. Appears in Letter 3 as an intermediary for letters and as a social connection in London.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "carleton-william",
    "name": "William Carleton",
    "shortBio": "Brother of Dudley Carleton, mentioned as living in the country. To be expanded.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "sackville-thomas",
    "name": "Thomas Sackville, Lord Buckhurst",
    "shortBio": "Lord Buckhurst, later first Earl of Dorset (1604). Appointed to lead peace negotiations with Spain at Abbeville in 1598.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Thomas_Sackville,_1st_Earl_of_Dorset",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "bodley-thomas",
    "name": "Thomas Bodley",
    "shortBio": "Diplomat and scholar, founder of the Bodleian Library at Oxford (knighted 1604). Named as assistant in the 1598 peace negotiations.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Thomas_Bodley",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "percy-henry",
    "name": "Henry Percy, ninth Earl of Northumberland",
    "shortBio": "Known as the 'Wizard Earl' for his interest in science. Mentioned as a possible envoy in Anglo-Spanish peace talks.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Henry_Percy,_9th_Earl_of_Northumberland",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "talbot-gilbert",
    "name": "Gilbert Talbot, seventh Earl of Shrewsbury",
    "shortBio": "Seventh Earl of Shrewsbury. Mentioned as a possible envoy for the Anglo-Spanish peace negotiations of 1598.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Gilbert_Talbot,_7th_Earl_of_Shrewsbury",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "clifford-george",
    "name": "George Clifford, third Earl of Cumberland",
    "shortBio": "Third Earl of Cumberland, naval commander and privateer. Chamberlain relays (inaccurate) rumors of his exploits against Spanish treasure ships in 1598.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/George_Clifford,_3rd_Earl_of_Cumberland",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "seymour-frances",
    "name": "Frances Seymour, Countess of Hertford",
    "shortBio": "Frances Howard, daughter of William, first Lord Howard of Effingham, and second wife of Edward Seymour, Earl of Hertford. Died 14 May 1598.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "blount-charles",
    "name": "Sir Charles Blount",
    "shortBio": "Later eighth Baron Mountjoy and Earl of Devonshire; military commander and favourite of Elizabeth I. Involved in a reported duel in Paris in 1598.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Charles_Blount,_8th_Baron_Mountjoy",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "evers-ralph",
    "name": "Ralph Evers, third Baron Evers",
    "shortBio": "Third Lord Evers, Warden of the Middle Marches. Attacked with his brother Sir William by the Witherington family in a London street brawl, May 1598.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "evers-william",
    "name": "Sir William Evers",
    "shortBio": "Brother of Ralph, third Lord Evers. Returned from Ireland shortly before being attacked alongside Lord Evers by the Witheringtons in May 1598.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "robinson-henry",
    "name": "Henry Robinson",
    "shortBio": "Provost of Queen's College, Oxford, 1581–1598. Appointed Bishop of Carlisle in 1598, as reported by Chamberlain in Letter 3.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "edes-richard",
    "name": "Richard Edes",
    "shortBio": "Queen's Chaplain and Dean of Worcester. Chamberlain gleefully reports that he 'was cleane out' — forgot his sermon midway — preaching at Oxford in May 1598.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "edmondes-thomas",
    "name": "Thomas Edmondes",
    "shortBio": "English diplomat (knighted 1603). Sent to France in 1598 to prepare the way for Anglo-Spanish peace negotiations.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Thomas_Edmondes",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "lytton-rowland",
    "name": "Rowland Lytton",
    "shortBio": "Cousin of Dudley Carleton. Mentioned in passing as expected in London in May 1598.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "mildmay-anthony",
    "name": "Sir Anthony Mildmay",
    "shortBio": "English diplomat and courtier. Mentioned as traveling to Northamptonshire (presumably Apethorpe) in May 1598.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Sir_Anthony_Mildmay",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "norris-edward",
    "name": "Sir Edward Norris",
    "shortBio": "Governor of Ostend; third son of Henry Lord Norris of Rycote. Dudley Carleton served under him in 1598.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "clarke-edward",
    "name": "Edward Clarke",
    "shortBio": "Served as letter-carrier between Chamberlain and Carleton. Later appointed Clerk of the Council (1603) and entered the service of George Villiers, first Duke of Buckingham.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "williams-alexander",
    "name": "Alexander Williams",
    "shortBio": "Husband of Elizabeth Carleton (Dudley's sister). Served as an intermediary for letters and as a London lodging contact for the Carleton circle.",
    "letters": [
      3, 4
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "paulet-william",
    "name": "William Paulet, third Marquis of Winchester",
    "shortBio": "Third Marquis of Winchester. Named as a possible envoy for the Anglo-Spanish peace negotiations of 1598.",
    "letters": [
      3
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/William_Paulet,_3rd_Marquess_of_Winchester",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "barnevelt-john",
    "name": "Johan van Oldenbarnevelt",
    "shortBio": "Advocate and agent of the Dutch States-General. In May 1598 he and other commissioners conferred with Queen Elizabeth's representatives over the terms of English support for the Netherlands.",
    "letters": [
      4
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Johan_van_Oldenbarnevelt",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "harvey-william",
    "name": "Sir William Harvey",
    "shortBio": "Later created Lord Harvey of Kidbrooke (1628). In May 1598 he married Mary, widow of both Henry Wriothesley, second Earl of Southampton, and Sir Thomas Heneage.",
    "letters": [
      4
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "wriothesley-mary",
    "name": "Mary, Countess of Southampton",
    "shortBio": "Widow of Henry Wriothesley, second Earl of Southampton, and subsequently of Sir Thomas Heneage. Her marriage to Sir William Harvey in May 1598 is noted by Chamberlain.",
    "letters": [
      4
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