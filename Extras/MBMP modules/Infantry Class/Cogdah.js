RequiredSheetVersion(12.999);
// This file adds all material from the Player's Handbook to MPMB's Character Record Sheet

// Define the source
SourceList.P={
	name : "The Isles of Cogdah",
	abbreviation : "IC",
	group : "Primary Sources",
	url : "https://github.com/RustyAlgorithm/Cogdah",
	date : "2026/12/31"
};

RaceList["iron dwarf"] = {
	regExpSearch : /^((?=.*(hylar|daewar))|((?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b)(?=.*\b(mountain|shield)\b))).*$/i,
	name : "Iron Dwarf",
	sortname : "Dwarf, Iron",
	source : ["P", 20],
	plural : "Iron Dwarves",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish", "Gnomish",],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"] },
	dmgres : ["Poison"],
	weaponprofs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	armor : [true, true, false, false],
	toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (4' + 2d4\")",
	weight : " weigh around 150 lb (130 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (120 + 5d4 cm)",
	weightMetric : " weigh around 75 kg (60 + 5d4 \xD7 4d6 / 10 kg)",
	improvements : "Mountain Dwarf: +2 Strength, +2 Constitution;",
	scores : [2, 0, 2, 0, 0, 0],
	trait : "Mountain Dwarf (+2 Strength, +2 Constitution)\n\nStonecunning:\n   Whenever I make an Intelligence (History) check related to the origin of stonework, I am considered proficient in the History skill and add double my proficiency bonus to the check, instead of my normal proficiency bonus."
};