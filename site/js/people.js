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
    "shortBio": "Member of Carleton's social circle, of Ascot, Oxfordshire. Chamberlain notes his participation in the Islands Voyage preparations and his subsequent movements in London; his house at Ascot was among the Christmas invitations Chamberlain declined in December 1598.",
    "letters": [
      1, 3, 4, 13
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
    "shortBio": "Daughter of Oliver, first Lord St. John, and widow of Sir John Pelham of Sandhurst, Sussex. Referred to as 'Lady Pelham,' she was staying at Knebworth in September 1598 and was escorted to Bletsoe by Rowland Lytton.",
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
    "shortBio": "Brother of Dudley Carleton, of Huntercombe, Oxfordshire. He and Brockett's daughter Elizabeth were the parents of young John Carleton (Dudley's nephew); Chamberlain reports on their family's welfare in September 1598 and mentions George passing through London on legal business in November. He participated as a mourner at Lord Burghley's funeral in August 1598.",
    "letters": [
      1, 4, 6, 7, 11
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
    "shortBio": "Lord Buckhurst, later first Earl of Dorset (1604). Led peace negotiations with Spain at Abbeville in 1598; the leading candidate for Lord Treasurer from autumn 1598. Chamberlain tracks the delays — expected as a New Year's gift in January 1599, it did not come; he was finally appointed Lord Treasurer in May 1599.",
    "letters": [
      3, 9, 12, 14
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
    "shortBio": "Diplomat and scholar, founder of the Bodleian Library at Oxford (knighted 1604). Named as assistant in the 1598 peace negotiations and considered for an embassy to France in autumn 1598.",
    "letters": [
      3, 9
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
    "shortBio": "Third Earl of Cumberland, naval commander and privateer. His 1598 Caribbean expedition took the town and castle of Puerto Rico but found little treasure; losses in men and shipping far exceeded the profits from sugar and ginger brought home.",
    "letters": [
      3, 8
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
    "shortBio": "Later eighth Baron Mountjoy and Earl of Devonshire; military commander and favourite of Elizabeth I. Named as a candidate for Lord Deputy in autumn 1598; listed among the knights named for Essex's Irish expedition in January 1599. Appointed Lord Deputy of Ireland in February 1600 and ultimately suppressed the Nine Years' War at the Battle of Kinsale (1601).",
    "letters": [
      3, 5, 9, 10, 15
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
    "shortBio": "Third Lord Evers (also spelled Eure), Warden of the Middle Marches. A cousin served in Ireland with Lord Burgh in 1597; Ralph himself was attacked with his brother Sir William by the Witherington family in a London street brawl in May 1598.",
    "letters": [
      1, 3
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
    "shortBio": "Cousin of Dudley Carleton and owner of Knebworth House, Hertfordshire. Chamberlain frequently visited and wrote from Knebworth; Lytton hosted Lady Pelham there in September 1598 and escorted her to Bletsoe; attended the burial of Sir John Brockett in October 1598; and in November 1598 was insisting on sending Carleton a copy of Ortelius's Thesaurus Geographicus.",
    "letters": [
      3, 6, 7, 9, 10
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
    "shortBio": "Husband of Elizabeth Carleton (Dudley's sister). Served as an intermediary for letters and as a London lodging contact for the Carleton circle. In December 1598, Chamberlain notes that he and his wife marvelled at hearing nothing from Carleton.",
    "letters": [
      3, 4, 6, 13
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
    "shortBio": "Third Marquis of Winchester (c. 1532–1598). Named as a possible envoy for the Anglo-Spanish peace negotiations in May 1598; died 25 November 1598 and was succeeded by his son William, fourth Marquis. Chamberlain reports the death with characteristic brevity.",
    "letters": [
      3, 12
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
    "shortBio": "English explorer, courtier, and naval commander. Rear-admiral of the Islands Voyage (1597); proposed as a commander in Ireland; mentioned as a Privy Council candidate in August 1598; and reported in autumn 1598 to be deeply discontented and considering another voyage to Guiana.",
    "letters": [
      1, 5, 6, 9
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
    "shortBio": "English military commander. Proposed for Ireland in May 1598 and again appointed after Yellow Ford. In December 1598 he attempted to march to the Naas — barely twelve miles from Dublin — but was encountered and forced to retire; he fell sick at Dublin, and Chamberlain heard reports he had died.",
    "letters": [
      5, 6, 13
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Richard_Bingham_(soldier)",
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
    "shortBio": "Later Lord Carew of Clopton (1605) and Earl of Totnes (1626). Proposed alongside Raleigh as a commander for the Irish campaign in May 1598; among those going to Knebworth for Christmas 1598.",
    "letters": [
      5, 13
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
    "shortBio": "English diplomat (knighted 1603). Sent on the embassy to Denmark in 1598; his initial claim to have brought a good answer proved hollow — by 20 December, Chamberlain reports he got only a promise of 40,000 dollars conditional on English redress of Danish grievances, while the Danish ambassador he escorted back complained chiefly of English piracy.",
    "letters": [
      5, 12, 13
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "cary-george",
    "name": "George Cary / Carew",
    "shortBio": "One or possibly two persons in Chamberlain's circle bearing the same name. In May 1598 Chamberlain notes a 'Master Carew' appointed secretary to the Lord Keeper Egerton. In December 1598 'Master Cary' returns from a mission to Poland without having secured any audience — paired by Chamberlain with Perkins's half-answer from Denmark as evidence of general diplomatic mismanagement.",
    "letters": [
      5, 13
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
    "shortBio": "English military commander in the Low Countries. Brought 1,200 musketeers to the Islands Voyage (1597); secured the governorship of the Brill in autumn 1598 after considerable effort; paid £400 a year out of the post to Lady Borroughs, widow of his predecessor.",
    "letters": [
      1, 5, 8, 9
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
    "shortBio": "Queen Elizabeth's troubled favourite. Commanded the Islands Voyage (1597); fell from favour in 1598; returned to the Privy Council on 10 September 1598. His Irish command stalled repeatedly through late 1598; a cochineal debt dispute wrecked it on Sunday 17 December, but by early January 1599 the 'disgusto' was resolved, £12,000 delivered for cavalry, and Essex was preparing in earnest. He finally departed for Ireland in March 1599. Anthony Sherley drew bills against his name across the Levant; Squire had poisoned his chair-arm during the Islands Voyage.",
    "letters": [
      1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14
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
    "shortBio": "Son of Lord Burghley; Principal Secretary and later first Earl of Salisbury. Floated as a candidate for the Mastership of the Court of Wards in December 1598; Chamberlain pictures him playing backgammon with Essex in the presence chamber while Ireland burned. A major figure in Elizabethan and Jacobean politics whose rise Chamberlain tracks closely throughout the correspondence.",
    "letters": [
      6, 12, 13
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
    "shortBio": "English nobleman who lobbied for the governorship of the Brill in 1598; listed among the lords expected to accompany Essex to Ireland in January 1599.",
    "letters": [
      6, 15
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
    "shortBio": "King of Spain (1527–1598). His death on September 3, 1598 was a transformative moment in late Elizabethan politics; as late as October 1598, Stanley (committed to the Tower) still claimed Philip was alive but 'drawing on.'",
    "letters": [
      6, 8
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
    "shortBio": "Daughter of Philip II of Spain; became co-sovereign of the Spanish Netherlands after marrying Archduke Albert in 1599. Chamberlain notes the Archduke's proclamation in August 1598 and, in autumn 1598, that Philip III was keeping her in a convent until the Archduke could fetch her.",
    "letters": [
      6, 9
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
    "shortBio": "Irish chieftain and leader of the Nine Years' War. Defeated Bagenal at Yellow Ford (1598); his forces dominate English attention through late 1598. By November 1598, Philip III was reportedly stopping Dutch and Irish ships lacking Tyrone's pass. In January 1599, Bagnall raids his territory and takes fourscore cows — a measure of how little the English could achieve in the field.",
    "letters": [
      6, 8, 10, 14
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
    "name": "Henry Brooke, eighth Baron Cobham",
    "shortBio": "Lord Warden of the Cinque Ports from 1597. In January 1599 Chamberlain reports a rumoured match between him and Frances Howard, Countess of Kildare; later condemned for treason in the Main Plot (1603) and died in the Tower (1619).",
    "letters": [
      6, 15
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
    "shortBio": "Treasurer of the Chamber (created Lord Stanhope of Harrington, 1605). A candidate for the Privy Council in 1598; appointed Vice-Chamberlain in February 1601 during the illness of Lord Chamberlain George Carey.",
    "letters": [
      6, 8
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
    "shortBio": "Outlawed in 1594 for the death of Henry Long; served in the French army. Pardoned June 1598. Listed among Essex's colonels for Ireland in January 1599. Executed in 1601 for his role in the Essex rebellion.",
    "letters": [
      6, 15
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
    "shortBio": "Outlawed alongside his brother Charles in 1594; served in the French army. Pardoned June 1598. Named to lead 300 horse in Essex's Irish army in January 1599. Created Lord Danvers of Dauntsey (1603) and Earl of Danby (1626).",
    "letters": [
      6, 15
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
    "shortBio": "Daughter of John Vernon of Hodnet, Shropshire; maid of honour to Queen Elizabeth. Secretly married Henry Wriothesley, third Earl of Southampton, in 1598 while pregnant — a match that infuriated the Queen. In November 1598 Chamberlain reports she was delivered of a daughter (Penelope Wriothesley).",
    "letters": [
      6, 10
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
    "shortBio": "English nobleman, patron of Shakespeare, and royal favourite. Secretly married Elizabeth Vernon in 1598, provoking the Queen's fury. Named as general of the horse for Essex's Irish expedition in December 1598 and expected to accompany the army in January 1599. Involved in the Essex rebellion of 1601.",
    "letters": [
      6, 10, 11, 12, 15
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
    "id": "caesar-julius",
    "name": "Julius Caesar",
    "shortBio": "Master of Requests in Ordinary under Elizabeth I; later knighted (1603) and eventually Master of the Rolls. Queen Elizabeth visited his house at Mitcham, Surrey, on 12 September 1598, spending the night and dining with him the next day.",
    "letters": [
      7
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Julius_Caesar_(judge)",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "brockett-john",
    "name": "Sir John Brockett",
    "shortBio": "Of Brockett Hall, Hertfordshire. His wife was Ellen Lytton, a relative of Rowland Lytton. His daughter Elizabeth was the first wife of George Carleton; their son John Carleton is the 'nephew' mentioned in September 1598, when Brockett was gravely ill. He died shortly thereafter; Rowland Lytton attended his burial in October 1598.",
    "letters": [
      7, 9
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "aldegonde-philip",
    "name": "Philip van Marnix van Sint Aldegonde",
    "shortBio": "Flemish statesman, theologian, and humanist writer. Author of several religious discourses; associated with William of Orange and the Dutch Revolt. Carleton sent Chamberlain some of Aldegonde's books in 1598, which Chamberlain found 'tedious.'",
    "letters": [
      7
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Philip_van_Marnix_van_Sint-Aldegonde",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "st-john-oliver",
    "name": "Oliver St. John, third Baron St. John of Bletsoe",
    "shortBio": "Third Baron St. John of Bletsoe; his seat was Bletsoe Castle, Bedfordshire. Rowland Lytton traveled to Bletsoe in September 1598 to accompany Lady Pelham (Judith St. John) there.",
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
    "id": "harvey-gerrard",
    "name": "Sir Gerrard Harvey",
    "shortBio": "Mentioned in passing as the person through whose servant Chamberlain dispatched an earlier letter to Carleton from Knebworth in 1598. Identification uncertain.",
    "letters": [
      8
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "stanley-john",
    "name": "John Stanley",
    "shortBio": "Arrested in October 1598 and committed to the Tower for an alleged assassination plot. When his arraignment came, Squire went first — confessing to the Jesuit-directed poisoning scheme — and Stanley's own case was overshadowed. Chamberlain tracked the case across Letters 8–11.",
    "letters": [
      8, 9, 10, 11
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
  },
  {
    "id": "fortescue-john",
    "name": "Sir John Fortescue",
    "shortBio": "Chancellor of the Exchequer under Elizabeth I (from 1589) and a Privy Councillor. In autumn 1598 he emerged as a candidate for Lord Treasurer following Burghley's death, though the post eventually went to Lord Buckhurst in May 1599.",
    "letters": [
      9
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Sir_John_Fortescue_(Chancellor_of_the_Exchequer)",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "popham-john",
    "name": "Sir John Popham",
    "shortBio": "Lord Chief Justice of England from 1592 until his death in 1607. Notorious for the severity of his judgments and, according to London gossip, for frequenting the very establishments he prosecuted. Presided over the trials of Essex (1601) and the Gunpowder Plot conspirators (1606).",
    "letters": [
      9
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/John_Popham_(judge)",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "fitzgibbon-edmund",
    "name": "Edmund Fitzgibbon",
    "shortBio": "The White Knight of County Cork, hereditary title of the Fitzgibbon family. Threw in his lot with the Munster rebels during the Nine Years' War. Died around 1600.",
    "letters": [
      9
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "fitzgerald-james",
    "name": "James Fitzthomas Fitzgerald",
    "shortBio": "Known as the Súgán Earl (from the Irish for straw rope, implying an illegitimate claim); grandson of the fourteenth Earl of Desmond. Assumed the Desmond title with papal backing in 1598 and led the Munster rising; Chamberlain reports him persecuting English planters with \"all manner of villanie and barbarous crueltie.\" Captured in 1601 and executed in the Tower in 1607.",
    "letters": [
      9, 10
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/James_Fitzthomas_Fitzgerald",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "thumery-de-boissise",
    "name": "Le Sieur Thumery de Boissise",
    "shortBio": "French ambassador to England, arriving at Dover on 14 October 1598 and remaining until 1601. Chamberlain describes him as de robbe longue — a civilian lawyer — and notes his complaints of English piracy. In January 1599 his letters are being intercepted: the crown arrests Peter Browne for tampering with his correspondence, and the ambassador protests that his masters' letters are routinely opened before reaching him.",
    "letters": [
      9, 10, 14
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "neville-henry",
    "name": "Henry Neville",
    "shortBio": "Diplomat and MP for Berkshire, knighted in 1599. Confirmed for the French embassy before Christmas 1598 despite his own reluctance; Chamberlain reports him setting out for France in mid-January 1599 with Ralph Winwood as his secretary, 'at my Lord of Essex commandment.' His mission to Henry IV (1599–1601) coincided with the Essex revolt, in which he was implicated; briefly imprisoned in 1601.",
    "letters": [
      9, 10, 15
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Henry_Neville_(diplomat)",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "wroth-john",
    "name": "John Wroth",
    "shortBio": "English diplomat. Sent as ambassador to the Ottoman Empire in late 1598; one of several English envoys dispatched to Constantinople in this period to maintain commercial relations.",
    "letters": [
      9
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "grey-thomas-wilton",
    "name": "Thomas Grey, fifteenth Baron Grey of Wilton",
    "shortBio": "English nobleman (1575–1614). Sought a regiment in the Low Countries in autumn 1598; listed among the lords expected to join Essex's Irish army in January 1599. Condemned for his role in the Bye Plot against James I (1603) and held in the Tower until his death.",
    "letters": [
      9, 15
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Thomas_Grey,_15th_Baron_Grey_de_Wilton",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "gilbert-john",
    "name": "Sir John Gilbert",
    "shortBio": "English naval captain, elder brother of Sir Humphrey Gilbert and half-brother of Sir Walter Raleigh. Associated with Atlantic and Guiana ventures in the late 1590s.",
    "letters": [
      8, 9
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "bagshaw-christopher",
    "name": "Christopher Bagshaw",
    "shortBio": "Catholic priest and controversialist (c. 1552–1625). Arrested in autumn 1598 as one of the associates of John Stanley, who had claimed a Spanish commission to assassinate Queen Elizabeth.",
    "letters": [
      9
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "sigismund-iii",
    "name": "Sigismund III Vasa",
    "shortBio": "King of Poland-Lithuania (r. 1587–1632) and briefly King of Sweden (r. 1592–1599). His attempt to maintain the Swedish throne against his Protestant uncle Charles of Södermanland collapsed by 1598; Charles IX was crowned in 1604.",
    "letters": [
      9
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Sigismund_III_Vasa",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "bagnall-samuel",
    "name": "Sir Samuel Bagnall",
    "shortBio": "English military officer in Ireland; brother of Sir Henry Bagenal, Marshal of Ireland. Proposed for the Irish command in May 1598, dispatched to Munster after his brother's death at Yellow Ford. In October 1598 Chamberlain falsely reported him stabbed — a story he publicly retracts in November. By January 1599 he is raiding Tyrone's territory and taking fourscore cows, 'some small peece of service' that Chamberlain notes with dry understatement.",
    "letters": [
      5, 6, 9, 10, 14
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "sidney-robert",
    "name": "Sir Robert Sidney",
    "shortBio": "Younger brother of Philip Sidney and later Viscount Lisle (1605) and Earl of Leicester (1618). Governor of Flushing in the 1590s; named as a candidate for an embassy to France in autumn 1598; briefly nominated Lord Marshal of Essex's Irish army before that plan dissolved in December 1598.",
    "letters": [
      9, 12
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Robert_Sidney,_1st_Earl_of_Leicester",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "philip-iii",
    "name": "Philip III of Spain",
    "shortBio": "King of Spain (r. 1598–1621), son of Philip II. Succeeded his father in September 1598. Chamberlain reports the arrangement of his cousin the Infanta Isabella's marriage to the Archduke Albert of Austria; and by November 1598 he was reportedly stopping all Dutch and Irish ships that lacked Tyrone's pass.",
    "letters": [
      9, 10
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Philip_III_of_Spain",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "burroughs-lady",
    "name": "Frances, Lady Burroughs",
    "shortBio": "Widow of Thomas, fifth Lord Burgh (d. 1597), who served as Governor of the Brill in the Netherlands. After her husband's death, Sir Francis Vere paid her £400 a year out of the same governorship.",
    "letters": [
      9
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "condon-patrick",
    "name": "Patrick Condon",
    "shortBio": "Irish rebel described by Chamberlain as 'a shrewd fellow' active in the Munster rising of 1598 alongside the White Knight and James Fitzthomas Fitzgerald.",
    "letters": [
      9
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "herbert-john",
    "name": "John Herbert",
    "shortBio": "Master of Requests under Elizabeth I and James I; considered for an embassy to France in autumn 1598; in November 1598, given custody of the Imperial Count Arundell, who had been committed for suspected conferences with John Stanley.",
    "letters": [
      9, 10
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "parry-thomas",
    "name": "Sir Thomas Parry",
    "shortBio": "English diplomat, considered for an embassy to France in autumn 1598. Later served as ambassador to France (1601–1605).",
    "letters": [
      9
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "butler-thomas-ormond",
    "name": "Thomas Butler, tenth Earl of Ormond",
    "shortBio": "Known as 'Black Tom Butler' (1531–1614); the most powerful Anglo-Irish magnate loyal to the Elizabethan crown, and a long-standing personal favourite of the Queen. When the Nine Years' War spread into Munster in autumn 1598, threatening his own county of Tipperary, he sent urgently to England for 2,000 men and was expected to fight with renewed vigour now that the rebellion touched his own freehold.",
    "letters": [
      10
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Thomas_Butler,_10th_Earl_of_Ormond",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "arundell-thomas",
    "name": "Thomas Arundell, first Baron Arundell of Wardour",
    "shortBio": "Son of Sir Matthew Arundell of Wardour Castle (c. 1560–1639). Created Count of the Holy Roman Empire by Emperor Rudolf II in 1595 for service against the Turks in Hungary — a title viewed with suspicion in England. In November 1598 he was committed for having held conversations with John Stanley about his alleged plot; placed in the custody of Dr. John Herbert. Later created Lord Arundell of Wardour in 1605.",
    "letters": [
      10
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Thomas_Arundell,_1st_Baron_Arundell_of_Wardour",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "squire-edward",
    "name": "Edward Squire",
    "shortBio": "Ship's steward turned Spanish agent (d. 1598). Recruited by Father Richard Walpole SJ in Spain and sent back to England as an assassin; sailed with Essex on the Islands Voyage and poisoned his chair-arm, and smeared the Queen's saddle-pommel five days before the fleet departed. Confessed the whole scheme at his arraignment, reportedly with great penitence. Hanged and quartered on 23 November 1598. (Cal. S. P. Dom., 1598–1601, pp. 107–110, 111–112; Camden, Annales, pp. 498–499.)",
    "letters": [
      10, 11
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "rolles",
    "name": "Rolles",
    "shortBio": "One of Stanley's confederates, named alongside Edward Squire in the November 1598 arraignment. No further identification has been established.",
    "letters": [
      10
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "southwell-robert",
    "name": "Sir Robert Southwell",
    "shortBio": "Soldier and diplomat (1561–1598); served in Ireland and the Low Countries. Died in late October 1598, leaving his widow — Elizabeth Howard, daughter of Charles Howard, first Earl of Nottingham — in comfortable circumstances. Chamberlain notes the death as a passing piece of court news.",
    "letters": [
      10
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "fitzgerald-frances-kildare",
    "name": "Frances Howard, Countess of Kildare",
    "shortBio": "Daughter of Charles Howard, first Earl of Nottingham, and widow of Henry Fitzgerald, twelfth Earl of Kildare (d. 1597). Her jointure from the Irish Kildare estates was disrupted by the Nine Years' War; the Queen granted her £700 a year in November 1598. In January 1599 Chamberlain reports a proposed match between her and Lord Cobham.",
    "letters": [
      10, 15
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "savile-henry",
    "name": "Sir Henry Savile",
    "shortBio": "Scholar and administrator (1549–1622); editor of Chrysostom and translator of Tacitus; Warden of Merton College, Oxford, from 1585, and Provost of Eton from 1596. In autumn 1598 he prevailed in a prolonged disciplinary dispute with several Merton fellows, having some expelled — among them Jasper Colmer, who died within five days of his expulsion. Knighted in 1604.",
    "letters": [
      10
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Henry_Savile_(Bible_translator)",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "colmer-jasper",
    "name": "Jasper Colmer",
    "shortBio": "Proctor of Merton College, Oxford; expelled in the course of Warden Henry Savile's disciplinary proceedings against the fellows in autumn 1598. Chamberlain reports he died within five days of his expulsion, attributing it to grief or — in his characteristic phrase — 'curst hart.'",
    "letters": [
      10
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "reynolds-john",
    "name": "John Reynolds",
    "shortBio": "Also Rainolds (1549–1607); Puritan divine, theologian, and biblical scholar. Elected President of Corpus Christi College, Oxford, in 1598, exchanging his Lincoln position with Dr. William Cole. Later a principal instigator of the King James Bible (1611), having proposed it at the Hampton Court Conference in 1604.",
    "letters": [
      10
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/John_Reynolds_(theologian)",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "cole-william",
    "name": "William Cole",
    "shortBio": "Clergyman (d. 1600); took up a position at Lincoln College, Oxford, when John Reynolds moved to Corpus Christi in 1598. Mentioned by Chamberlain as part of the exchange of academic appointments.",
    "letters": [
      10
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "ortelius-abraham",
    "name": "Abraham Ortelius",
    "shortBio": "Flemish cartographer and geographer (1527–1598); creator of the Theatrum Orbis Terrarum (1570), the first modern atlas. He died in June 1598. His Thesaurus Geographicus (1596), purchased by Rowland Lytton for Carleton, was promised in Letter 10 but too large for ordinary post; it was finally dispatched by special bearer in December 1598.",
    "letters": [
      10, 12
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Abraham_Ortelius",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "north-anne",
    "name": "Anne North",
    "shortBio": "née Rich; wife of Roger North, second Baron North, of Kirtling Hall, Cambridgeshire. Carleton evidently had ties to the North household. Chamberlain mentions forwarding a letter to her but complains that the family returns his own letters rather than passing them on, and gives him no direction for delivery — a source of mild social exasperation.",
    "letters": [
      10
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "norris-thomas",
    "name": "Sir Thomas Norris",
    "shortBio": "Lord President of Munster from 1597 (1556–1599); son of Sir Henry Norris, first Baron Norreys of Rycote. Blamed in November 1598 for abandoning his post too soon and encouraging the rebels. By January 1599, however, Chamberlain reports him relieving the besieged town of Kilmallock — one of the few encouraging scraps of Irish news. He died in July 1599, exhausted by the command.",
    "letters": [
      11, 14
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Thomas_Norris_(President_of_Munster)",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "walpole-richard",
    "name": "Father Richard Walpole SJ",
    "shortBio": "English Jesuit (c. 1564–1607); brother of the martyr Henry Walpole (executed 1595). Working in Spain, he recruited and directed Edward Squire, providing him with the preparation used in the alleged poisoning of Essex's chair and the Queen's saddle. Walpole subsequently denied his role in the affair entirely.",
    "letters": [
      11
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "coke-edward",
    "name": "Sir Edward Coke",
    "shortBio": "Attorney General (1552–1634); later Chief Justice of Common Pleas (1606) and King's Bench (1613), and one of the towering figures of English common law. His surprise marriage on 7 November 1598 to Elizabeth Cecil, the widowed Lady Hatton, provoked widespread astonishment — Chamberlain notes that no one could believe she would accept a man of his social standing after so many grander offers, and that 'the world will not beleve that yt was without a misterie.'",
    "letters": [
      11
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Edward_Coke",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "hatton-elizabeth",
    "name": "Elizabeth Coke, Lady Hatton",
    "shortBio": "née Cecil (1578–1646); daughter of Thomas Cecil, second Lord Burghley (later Earl of Exeter), and granddaughter of William Cecil, Lord Burghley. Widow of Sir William Hatton (d. 1597), nephew and heir of the lord chancellor Sir Christopher Hatton. She married Edward Coke on 7 November 1598 in a ceremony that startled court society. As Lady Hatton she became a leading Jacobean hostess; her marriage to Coke was famously unhappy.",
    "letters": [
      11
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Elizabeth_Hatton",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "packington-john",
    "name": "Sir John Packington",
    "shortBio": "Worcestershire knight (1549–1625), knighted by Essex in 1596 and known at court as 'Lusty Packington.' He married Dorothy Smith on 6 November 1598, the day before Edward Coke's more celebrated wedding. The back-to-back marriages gave Chamberlain a neat pair of social vignettes.",
    "letters": [
      11
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "barnham-dorothy",
    "name": "Dorothy Packington",
    "shortBio": "née Smith (dates unknown); daughter of Humphrey Smith, silkman to Queen Elizabeth, and widow of Benedict Barnham, a liveryman of the Drapers' Company. She married Sir John Packington on 6 November 1598; Chamberlain describes her simply as 'one of our London widowes.'",
    "letters": [
      11
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "savage-arthur",
    "name": "Sir Arthur Savage",
    "shortBio": "Soldier and MP (d. 1631). One of the few officers who actually proceeded to Ireland in late 1598, commanding approximately a thousand men, while Essex's main expedition remained stalled in planning. He served in Ireland through the Nine Years' War in various capacities.",
    "letters": [
      12
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "obrien-donough",
    "name": "Donough O'Brien, fourth Earl of Thomond",
    "shortBio": "Irish magnate (c. 1560–1624); one of the few Gaelic-descended noblemen to remain consistently loyal to the English crown throughout the Nine Years' War. Appointed governor of Limerick in late 1598, giving the English a reliable foothold in Munster during the deteriorating military situation.",
    "letters": [
      12
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Donough_O%27Brien,_4th_Earl_of_Thomond",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "sherley-anthony",
    "name": "Sir Anthony Sherley",
    "shortBio": "Adventurer and self-styled diplomat (1565–c. 1636). Set out in 1598 on an unauthorised mission to the Shah of Persia, passing through the Ottoman Empire. At Constantinople and Aleppo he extorted money from English merchants and drew bills of exchange on Essex without authorisation, then vanished eastward. His escapades made him both notorious and celebrated across Europe.",
    "letters": [
      12
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Anthony_Sherley",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "leveson-richard",
    "name": "Sir Richard Leveson",
    "shortBio": "Naval commander (c. 1570–1605); son of Sir Walter Leveson of Lilleshall, Shropshire. In late 1598 he intercepted seventeen Hanseatic and Dutch vessels bound for Spain, but most slipped away in the night ('con tanto di naso'). Some of the escaped ships turn up at Plymouth in January 1599 among victualing vessels from the Low Countries. He later became Vice Admiral of England (1604).",
    "letters": [
      12, 13, 15
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Richard_Leveson",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "neville-edward",
    "name": "Edward Neville",
    "shortBio": "Claimant to the barony of Abergavenny (c. 1556–1618). His contested title was heard at a quasi-judicial marshals court convened under Essex's authority in late 1598; the matter was referred to the Queen and eventually resolved in his favour when he was summoned to Parliament as sixth Lord Abergavenny in 1604.",
    "letters": [
      12
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "leonard-henry",
    "name": "Sir Henry Leonard",
    "shortBio": "Son of Sampson Leonard and Margaret, suo jure Baroness Dacre (d. 1626). Claimed the barony of Dacre of the South through his mother; his case was heard at Essex's marshals court in late 1598 but deferred to the Queen. He ultimately succeeded as twelfth Lord Dacre in 1612.",
    "letters": [
      12
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "sherley-george",
    "name": "George Shirley",
    "shortBio": "Acquaintance of Chamberlain and Carleton's circle (c. 1559–1622); previously mentioned in Letter 5. In December 1598 Chamberlain reports — with sardonic detachment — that he has at last married Lady Unton, widow of the diplomat Sir Henry Unton.",
    "letters": [
      12
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "unton-dorothy",
    "name": "Dorothy Unton",
    "shortBio": "née Wroughton (d. 1634); widow of Sir Henry Unton (1558–1596), the diplomat and subject of the celebrated memorial portrait now at the National Portrait Gallery. She married George Shirley in late 1598. Chamberlain's remark — that as poor a man as he was he would not buy such another at the price — implies she had a formidable reputation.",
    "letters": [
      12
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "lytton-anne",
    "name": "Anne Lytton",
    "shortBio": "Probably a daughter or close relation of Rowland Lytton of Knebworth. Chamberlain reports in December 1598 that she had been kept in expectation of marriage by an old doctor of law, who died before fulfilling the promise — leaving her, as Chamberlain puts it, 'a widow before she was a wife.'",
    "letters": [
      12
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "morley-edward",
    "name": "Edward Parker, tenth Lord Morley",
    "shortBio": "Tenth Lord Morley (1550–1618). His brother (name unrecorded) was killed in a road brawl in December 1598 by a servant of Sir Thomas Gerard; the assailant was acquitted on grounds of self-defence.",
    "letters": [
      12
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "cope-walter",
    "name": "Walter Cope",
    "shortBio": "Administrator and collector (c. 1553–1614); secretary to Robert Cecil and later keeper of Whitehall Palace. He assembled a celebrated cabinet of curiosities at his house on Kensington High Street. Knighted 1603. Chamberlain notes him among the guests going to Rowland Lytton's house at Knebworth for Christmas 1598 — an invitation Chamberlain himself declined.",
    "letters": [
      13
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Walter_Cope",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "moore-thomas",
    "name": "Sir Thomas Moore ('the lying knight')",
    "shortBio": "English settler or officer in Ireland, killed by Irish rebels in late 1598 along with his wife (daughter of Sir Henry Duke), 'the properest gentlewoman of Ireland' in Chamberlain's phrase. The mocking sobriquet 'the lying knight' is unusual; Chamberlain relays it with some relish.",
    "letters": [
      13
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "elizabeth-i",
    "name": "Queen Elizabeth I",
    "shortBio": "Queen of England and Ireland (1533–1603). Chamberlain observes her movements — visiting Julius Caesar's house at Mitcham during the progress to Nonsuch in September 1598; mentioned in connection with the abortive Essex Irish command and the Squire plot. Appears throughout the correspondence as the unseen pivot around which political fortunes turn.",
    "letters": [
      7, 8
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Elizabeth_I",
      "odnb": "",
      "britannica": "https://www.britannica.com/biography/Elizabeth-I"
    }
  },
  {
    "id": "carey-george",
    "name": "George Carey, second Baron Hunsdon",
    "shortBio": "Lord Chamberlain of England (1597–1603); son of Henry Carey, first Baron Hunsdon and cousin of Queen Elizabeth. His illness in autumn 1598 created a vacancy for Vice-Chamberlain, which Raleigh coveted but Stanhope received.",
    "letters": [
      8
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/George_Carey,_2nd_Baron_Hunsdon",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "matthew-tobias",
    "name": "Tobias Matthew, Bishop of Durham",
    "shortBio": "Bishop of Durham (1595–1606) and later Archbishop of York (1606–1628); father of Tobie Mathew. Referenced in letter 1 when Chamberlain warns that Carleton's financial complaints, if disclosed, might discourage young Tobie from following him to France.",
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
    "id": "parker-edward",
    "name": "Master Parker (brother of Lord Morley)",
    "shortBio": "A brother of Edward Parker, tenth Lord Morley (given name unrecorded). Killed in a road brawl in December 1598 by a man of Sir Thomas Gerard's household; the assailant was acquitted on a plea of self-defence.",
    "letters": [
      12
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "wingfield-thomas",
    "name": "Sir Thomas Maria Wingfield",
    "shortBio": "English crown officer in Ireland, holding authority over troops and supply. One of the officers knighted by Lord Deputy Sir William Russell on his departure in May 1597. In January 1599, Chamberlain reports that Essex was deeply dissatisfied with Wingfield and others holding government in Ireland and intended to make 'a cleane riddaunce' and displace most of them on his arrival.",
    "letters": [
      14
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "loftus-adam",
    "name": "Adam Loftus, Archbishop of Dublin",
    "shortBio": "Archbishop of Dublin from 1567 and Lord Chancellor of Ireland from 1581 (c. 1533–1605); the longest-serving royal official in Elizabethan Ireland. That rebels could drive off his cattle from his own yard in the shadow of St. Patrick's Cathedral — a visible symbol of English Dublin — was a measure of how completely the crown had lost control of the countryside in late 1598.",
    "letters": [
      14
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Adam_Loftus,_1st_Viscount_Loftus",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "mansell-robert",
    "name": "Sir Robert Mansell",
    "shortBio": "Naval commander (1573–1656); knighted 1596. Sent with three ships in January 1599 to patrol the Irish Sea and interdict rebel communications and supply by sea. Later became Vice Admiral of England (1618–1628) and a member of the Virginia Company.",
    "letters": [
      14
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Robert_Mansell",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "greville-fulke",
    "name": "Fulke Greville",
    "shortBio": "Poet, statesman, and close friend of Sir Philip Sidney (1554–1628). Appointed Treasurer of the Navy on 21 December 1598, a post he held until 1604. Later knighted (1603) and created first Baron Brooke (1621). His poetry and biography of Sidney remain his chief literary legacy.",
    "letters": [
      14
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Fulke_Greville,_1st_Baron_Brooke",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "palmer-henry",
    "name": "Sir Henry Palmer",
    "shortBio": "Naval officer (c. 1541–1611); appointed Controller of the Navy on 21 December 1598. Served in various naval commands throughout the later Elizabethan period.",
    "letters": [
      14
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "trevor-john",
    "name": "John Trevor",
    "shortBio": "Secretary to the Lord Admiral Charles Howard, Earl of Nottingham; appointed Surveyor of the Navy on 21 December 1598. Chamberlain identifies him as 'the Lord Admiralls secretarie.'",
    "letters": [
      14
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "browne-peter",
    "name": "Peter Browne",
    "shortBio": "Agent or intelligencer arrested in January 1599 and committed to the Gatehouse prison near Westminster Abbey for intercepting the correspondence of the French ambassador Thumery de Boissise. His arrest provoked a formal protest from the ambassador, who complained that his diplomatic letters were routinely opened before reaching him.",
    "letters": [
      14
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "owen-thomas",
    "name": "Thomas Owen",
    "shortBio": "Judge of the Court of Common Pleas; died late 1598. Had been mentioned as a possible Master of the Court of Wards — the most lucrative royal office available, still disputed since Lord Burghley's death. His death removes one candidate without settling the question.",
    "letters": [
      14
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "cragius-nicholaus",
    "name": "Nicholaus Cragius",
    "shortBio": "Danish diplomat and classical scholar (1550–1602); sent to London to press for the restitution promised in Christopher Perkins's inconclusive Danish mission (see Letters 13–14). He was present at the Twelfth Night celebrations on January 6, 1599, when the Queen danced with Essex in his honour.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "howard-charles",
    "name": "Charles Howard, first Earl of Nottingham",
    "shortBio": "Lord High Admiral of England (1585–1619); principal commander against the Spanish Armada (1588) and the Cadiz expedition (1596). His quarrel with Essex in January 1599 over Sir William Woodhouse's regimental appointment reflected the broader competition between the old Elizabethan military establishment and Essex's patronage network.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Charles_Howard,_1st_Earl_of_Nottingham",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "woodhouse-william",
    "name": "Sir William Woodhouse",
    "shortBio": "Officer at the centre of the Essex–Nottingham quarrel of January 1599, when both magnates disputed who could grant him a company in Sir Thomas Knolles's Low Countries regiment. Chamberlain also reports (Letter 15, later contradicted in Letter 18) that he married Lady Southwell.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "stanley-william",
    "name": "William Stanley, sixth Earl of Derby",
    "shortBio": "Sixth Earl of Derby (1561–1642). Expected to accompany Essex's Irish expedition in January 1599; his presence was widely anticipated but he did not ultimately serve in Ireland.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/William_Stanley,_6th_Earl_of_Derby",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "manners-roger",
    "name": "Roger Manners, fifth Earl of Rutland",
    "shortBio": "Fifth Earl of Rutland (1576–1612); a young Essex favourite and Shakespeare's Cambridge contemporary. Expected to accompany Essex to Ireland in January 1599.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Roger_Manners,_5th_Earl_of_Rutland",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "gorges-ferdinando",
    "name": "Sir Ferdinando Gorges",
    "shortBio": "Soldier and colonist (c. 1568–1647); named Lord Marshall of Essex's Irish army in January 1599. After Essex's failure and the 1601 uprising, Gorges turned crown's evidence. He later became the principal promoter of English colonisation in New England and the founding governor of the Province of Maine.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Ferdinando_Gorges",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "blount-christopher",
    "name": "Sir Christopher Blount",
    "shortBio": "Soldier (c. 1555–1601); Essex's stepfather, having married Essex's widowed mother Lettice Knollys. Named among Essex's colonels for Ireland in January 1599. Among Essex's most loyal followers; executed for his role in the 1601 uprising.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Christopher_Blount",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "blackwell-george",
    "name": "George Blackwell",
    "shortBio": "First archpriest of the English Catholic clergy (c. 1545–1613); appointed by Pope Clement VIII in March 1598 to govern the secular clergy in England. His escape from the Marshalsea prison in Southwark in January 1599 angered the Queen and humiliated the Privy Council, which had detained him as part of its surveillance of the Catholic hierarchy.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/George_Blackwell",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "brooke-george",
    "name": "George Brooke",
    "shortBio": "Younger brother of Henry Brooke, eighth Lord Cobham (c. 1568–1603). In January 1599 Chamberlain reports a proposed match between him and Lord Borough's eldest daughter. Later executed for his involvement in the Main Plot against James I.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/George_Brooke_(conspirator)",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "paulet-william-iv",
    "name": "William Paulet, fourth Marquis of Winchester",
    "shortBio": "Fourth Marquis of Winchester (c. 1561–1628); succeeded to the title on his father's death in November 1598. Chamberlain reports in January 1599 that he married a youth of barely eighteen — younger son of William Fleetwood, receiver of the Court of Wards — before his father was even buried, a pointed social observation.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/William_Paulet,_4th_Marquess_of_Winchester",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "cope-frances",
    "name": "Frances Cope (née Lytton)",
    "shortBio": "Wife of Sir Anthony Cope of Hanwell, Oxfordshire; sister of Rowland Lytton of Knebworth and first cousin of Dudley Carleton. Chamberlain's 'old mistris' — his former patroness — who died on Twelfth Even (January 5, 1599). Her death is noted alongside Edmund Spenser's in the same sentence.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "spenser-edmund",
    "name": "Edmund Spenser",
    "shortBio": "Poet and colonial administrator (c. 1552–1599); author of <hi rend=\"italic\">The Faerie Queene</hi> (1590, 1596). He came to London in December 1598 carrying dispatches from Sir Thomas Norris, Lord President of Munster, and died at Westminster on January 16, 1599. Chamberlain names him simply as 'our principall poet' and moves on — a plain, brief tribute. His funeral was at Essex's charges, with poets carrying the hearse and mourning verses thrown into the tomb.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Edmund_Spenser",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "winwood-ralph",
    "name": "Ralph Winwood",
    "shortBio": "Diplomat (c. 1563–1617); appointed secretary to Henry Nevill on his embassy to France (1599–1601) at Essex's direction. Later served as envoy to the Dutch Republic (1603–1613) and Secretary of State under James I (1614–1617). His papers, published posthumously, are a major source for early Jacobean diplomacy.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "https://en.wikipedia.org/wiki/Ralph_Winwood",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "drury-dru",
    "name": "Sir Dru Drury",
    "shortBio": "Gentleman Usher of the Privy Chamber (c. 1531–1617); served in this role throughout Elizabeth's reign and until his death. In January 1599 Chamberlain notes he is 'in his old remitter' — under some restriction — and has been commanded to return to his court duties.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  },
  {
    "id": "fleetwood-william",
    "name": "William Fleetwood",
    "shortBio": "Receiver of the Court of Wards (knighted 1603). His younger son, barely eighteen years old, married the newly-succeeded fourth Marquis of Winchester in January 1599 — before the Marquis's father was even buried, as Chamberlain pointedly notes.",
    "letters": [
      15
    ],
    "externalLinks": {
      "wikipedia": "",
      "odnb": "",
      "britannica": ""
    }
  }
];

export default people;