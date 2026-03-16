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
    "shortBio": "Brother of Dudley Carleton. Participated as a mourner at Lord Burghley's funeral in August 1598; also mentioned in connection with book procurement.",
    "letters": [
      1, 4, 6
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
    "shortBio": "Later eighth Baron Mountjoy and Earl of Devonshire; military commander and favourite of Elizabeth I. Chamberlain reports — then corrects — a rumour about a duel involving Blount in Paris in 1598.",
    "letters": [
      3, 5
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
    "shortBio": "English diplomat (knighted 1603). Sent to France in 1598 to prepare the way for Anglo-Spanish peace negotiations, and returned in late May with news that the peace was all but concluded.",
    "letters": [
      3, 5
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
    "shortBio": "Cousin of Dudley Carleton. Traveled with Chamberlain from Oxfordshire to attend Lord Burghley's funeral in August 1598.",
    "letters": [
      3, 6
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
    "shortBio": "Governor of Ostend; third son of Henry Lord Norris of Rycote. Dudley Carleton served under him in 1598; his continuation as Governor is reported in August.",
    "letters": [
      3, 6
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
    "shortBio": "Husband of Elizabeth Carleton (Dudley's sister). Served as an intermediary for letters and as a London lodging contact for the Carleton circle; met by Chamberlain at Sir William Spencer's in August 1598.",
    "letters": [
      3, 4, 6
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
    "id": "raleigh-walter",
    "name": "Sir Walter Raleigh",
    "shortBio": "English explorer, courtier, and naval commander. Rear-admiral of the Islands Voyage (1597); proposed as a commander in Ireland; and mentioned as a candidate for the Privy Council in August 1598.",
    "letters": [
      1, 5, 6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Walter_Raleigh",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "bingham-richard",
    "name": "Sir Richard Bingham",
    "shortBio": "English military commander. Proposed for Ireland in May 1598 and again appointed Marshal of Ireland with 5,000 men after Yellow Ford, though Chamberlain doubted it would come to pass.",
    "letters": [
      5, 6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Richard_Bingham_(soldier)",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "bagnall-samuel",
    "name": "Sir Samuel Bagenal",
    "shortBio": "English military officer in Ireland; brother of Sir Henry Bagenal, Marshal of Ireland. Proposed for the Irish command in May 1598 and dispatched to Ireland after his brother's death at Yellow Ford.",
    "letters": [
      5, 6
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "docwra-henry",
    "name": "Sir Henry Docwra",
    "shortBio": "English soldier and administrator, later created Lord Docwra of Culmore. Named in 1598 as a proposed commander for Ireland alongside Bingham and Bagenal.",
    "letters": [
      5
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Henry_Docwra,_1st_Baron_Docwra",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "carew-george",
    "name": "Sir George Carew",
    "shortBio": "Later Lord Carew of Clopton (1605) and Earl of Totnes (1626). Proposed alongside Raleigh as a commander for the Irish campaign in May 1598.",
    "letters": [
      5
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/George_Carew,_1st_Earl_of_Totnes",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "zouche-edward",
    "name": "Edward Zouche, eleventh Baron Zouche",
    "shortBio": "English nobleman and diplomat. Sent as ambassador to Denmark in 1598 alongside Christopher Perkins, with instructions extending to Poland.",
    "letters": [
      5
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Edward_Zouche,_11th_Baron_Zouche",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "perkins-christopher",
    "name": "Christopher Perkins",
    "shortBio": "English diplomat (knighted 1603). Accompanied Lord Zouche on the embassy to Denmark and Poland in 1598.",
    "letters": [
      5
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "cary-george",
    "name": "George Carew (secretary)",
    "shortBio": "Son of Thomas Carew of Antony (knighted 1603). Appointed secretary to the Lord Keeper Sir Thomas Egerton, as noted by Chamberlain in May 1598.",
    "letters": [
      5
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "egerton-thomas",
    "name": "Sir Thomas Egerton, Lord Keeper",
    "shortBio": "Lord Keeper of the Great Seal (later Lord Chancellor and Viscount Brackley). Referenced as the employer of the newly appointed secretary George Carew.",
    "letters": [
      5
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Thomas_Egerton,_1st_Viscount_Brackley",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "vere-francis",
    "name": "Sir Francis Vere",
    "shortBio": "English military commander in the Low Countries. Brought 1,200 musketeers to the Islands Voyage (1597); reported in May 1598 as about to depart for the States.",
    "letters": [
      1, 5
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Francis_Vere",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "bullingham-john",
    "name": "John Bullingham",
    "shortBio": "Bishop of Gloucester (died 1598). His death is noted by Chamberlain in the letter of 31 May 1598.",
    "letters": [
      5
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/John_Bullingham",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "cecil-william",
    "name": "William Cecil, Lord Burghley",
    "shortBio": "First Baron Burghley (1520–1598), Lord High Treasurer and Queen Elizabeth's chief minister. His death on August 4, 1598, and state funeral are central to Letter 6.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/William_Cecil,_1st_Baron_Burghley",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "devereux-robert",
    "name": "Robert Devereux, second Earl of Essex",
    "shortBio": "Queen Elizabeth's troubled favourite. Commanded the Islands Voyage (1597); fell from favour in 1598; his visible grief at Lord Burghley's funeral was noted by Chamberlain.",
    "letters": [
      1, 2, 6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Robert_Devereux,_2nd_Earl_of_Essex",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "cecil-robert",
    "name": "Sir Robert Cecil",
    "shortBio": "Son of Lord Burghley; Principal Secretary and later first Earl of Salisbury. A major figure in Elizabethan and Jacobean politics; Chamberlain tracks his rise closely throughout the correspondence.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Robert_Cecil,_1st_Earl_of_Salisbury",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "maynard-henry",
    "name": "Henry Maynard",
    "shortBio": "Secretary to Lord Burghley (knighted, 1602). Chamberlain reports him as the frontrunner for the post of Master of the Wards after Burghley's death.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "cromwell-edward",
    "name": "Edward Cromwell, third Baron Cromwell",
    "shortBio": "English nobleman who lobbied for the governorship of the Brill in 1598, competing for the post as England debated continuing the Dutch war.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "albert-archduke",
    "name": "Archduke Albert of Austria",
    "shortBio": "Former Cardinal who became co-sovereign of the Spanish Netherlands (with the Infanta Isabella) in 1598. Chamberlain reports his proclamation of peaceful commerce with England, Scotland, and the Dutch.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Albert_VII,_Archduke_of_Austria",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "philip-ii",
    "name": "Philip II of Spain",
    "shortBio": "King of Spain (1527–1598). His death on September 3, 1598 — rumoured at the time of writing — was a transformative moment in late Elizabethan politics.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Philip_II_of_Spain",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "isabella-infanta",
    "name": "Isabella Clara Eugenia",
    "shortBio": "Daughter of Philip II of Spain; became co-sovereign of the Spanish Netherlands after marrying Archduke Albert in 1599. Referenced as the Archduke's bride.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Isabella_Clara_Eugenia",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "bagnall-henry",
    "name": "Sir Henry Bagenal",
    "shortBio": "Marshal of Ireland. Killed at the Battle of the Yellow Ford (14 August 1598) alongside sixteen captains and over seven hundred soldiers — the worst English defeat in Ireland of Elizabeth's reign.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Henry_Bagenal",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "oneill-hugh",
    "name": "Hugh O'Neill, second Earl of Tyrone",
    "shortBio": "Irish chieftain and leader of the Nine Years' War. Defeated Bagenal at Yellow Ford (1598) and compelled the surrender of the Blackwater fort on humiliating terms.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Hugh_O%27Neill,_2nd_Earl_of_Tyrone",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "williams-thomas",
    "name": "Captain Thomas Williams",
    "shortBio": "English captain and governor of the Blackwater fort. After Bagenal's defeat at Yellow Ford, was compelled to surrender the fort to Tyrone; his garrison was permitted to leave armed with rapier and dagger only.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "brooke-henry",
    "name": "Henry Brooke, eleventh Baron Cobham",
    "shortBio": "Lord Warden of the Cinque Ports from 1597. Installed with great ceremony at Canterbury on St. Bartholomew's Day 1598; later mentioned as a candidate for the Privy Council.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Henry_Brooke,_11th_Baron_Cobham",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "howard-thomas",
    "name": "Thomas Howard, later first Earl of Suffolk",
    "shortBio": "Vice-admiral of the Islands Voyage (1597); later created Earl of Suffolk (1603). Reported alongside Raleigh and Stanhope as a candidate for the Privy Council in August 1598.",
    "letters": [
      1, 6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Thomas_Howard,_1st_Earl_of_Suffolk",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "stanhope-john",
    "name": "Sir John Stanhope",
    "shortBio": "Treasurer of the Chamber (created Lord Stanhope of Harrington, 1605). Named alongside Raleigh and Howard as a candidate to be sworn to the Privy Council in August 1598.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "danvers-charles",
    "name": "Sir Charles Danvers",
    "shortBio": "Outlawed in 1594 for the death of Henry Long; took refuge in France and served in the French army. Pardoned June 1598 and returned to England. Executed in 1601 for his role in the Essex rebellion.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Charles_Danvers_(soldier)",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "danvers-henry",
    "name": "Sir Henry Danvers",
    "shortBio": "Outlawed alongside his brother Charles in 1594; served in the French army. Pardoned June 1598. Created Lord Danvers of Dauntsey (1603) and Earl of Danby (1626).",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Henry_Danvers,_1st_Earl_of_Danby",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "scudamore-james",
    "name": "Sir James Scudamore",
    "shortBio": "English courtier. His wife Mary (daughter of Peter Houghton, alderman of London), described as a rich match, died in childbirth in August 1598.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "vernon-elizabeth",
    "name": "Elizabeth Vernon",
    "shortBio": "Daughter of John Vernon of Hodnet, Shropshire; maid of honour to Queen Elizabeth. Secretly married Henry Wriothesley, third Earl of Southampton, in 1598 while pregnant — a match that infuriated the Queen.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Elizabeth_Vernon",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "wriothesley-henry",
    "name": "Henry Wriothesley, third Earl of Southampton",
    "shortBio": "English nobleman, patron of Shakespeare, and royal favourite. Secretly married Elizabeth Vernon in 1598, provoking the Queen's fury; later involved in the Essex rebellion of 1601.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Henry_Wriothesley,_3rd_Earl_of_Southampton",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "spencer-william",
    "name": "Sir William Spencer",
    "shortBio": "English gentleman, probably of Yarnton, Oxfordshire. Chamberlain met Carleton's brother-in-law Alexander Williams at his house in August 1598.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "vere-edward",
    "name": "Edward Vere, seventeenth Earl of Oxford",
    "shortBio": "Seventeenth Earl of Oxford; son-in-law of Lord Burghley. His three daughters were the principal beneficiaries of Burghley's will in 1598.",
    "letters": [
      6
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Edward_de_Vere,_17th_Earl_of_Oxford",
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