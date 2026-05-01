CreatureList["Bambi Mk1"] = {
	name : "Bambi Mk1",
	source : ["V", 208],
	size : 2, //Large
	type : "Construct",
	subtype : "",
	companion : sheetVersion >= 13 ? "familiar_not_al" : "familiar",
	alignment : "Unaligned",
	ac : 16,
	hp : 50,
	hd : [10, 10], //[#, die]
	speed : "15 ft",
	scores : [16, 9, 18, 3, 11, 1], //[Str, Dex, Con, Int, Wis, Cha]
	saves : [5, "", 7, "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 0
	},
	damage_immunities : "Lightning",
	damage_resistances : "cold, fire, and poison damage",
	condition_immunities : "poisoned",
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "Understands the languages of its creator but can't speak",
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Slam",
			ability : 1,
			damage : [3, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "Magic Weapons",
			description : "Bambi's attacks are considered magical."
			},  {
			name: "Construct",
			description: "Bambi does not require; air, food, drink, or sleep."
			}, {
			name : "Arcane Core",
			description : "If Bambi reaches 0 HP it's Arcane Core is exposed if Bambi suffers 10 more damage in a single round the core is destoryed and Bambi will need to be rebuilt"
			}, {
			name : "Arcane Explostion",
			description : "If Bambi's Arcane Core is destroyed it explodes. Creatures in a 20 foot radius must make a DC 17 Dex Saving Throw, if a creature fails it's save it suffers 10d10 ligthning damage, half as much on a successful one."
			}
	]
};
CreatureList["Bambi Mk2"] = {
	name : "Bambi Mk2",
	source : ["V", 208],
	size : 2, //Large
	type : "Construct",
	subtype : "",
	companion : sheetVersion >= 13 ? "familiar_not_al" : "familiar",
	alignment : "Unaligned",
	ac : 16,
	hp : 100,
	hd : [10, 10], //[#, die]
	speed : "15 ft",
	scores : [16, 9, 18, 3, 11, 1], //[Str, Dex, Con, Int, Wis, Cha]
	saves : [5, "", 7, "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 0
	},
	damage_immunities : "Lightning",
	damage_resistances : "cold, fire, and poison damage",
	condition_immunities : "poisoned",
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "Understands the languages of its creator but can't speak",
	challengeRating : "1/8",
	proficiencyBonus : 4,
	attacksAction : 2,
	attacks : [{
			name : "Slam",
			ability : 1,
			damage : [3, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "Magic Weapons",
			description : "Bambi's attacks are considered magical."
			}, {
			name : "Multiattack",
			description : "Bambi can make two weapon attacks."
			}, {
			name: "Construct",
			description: "Bambi does not require; air, food, drink, or sleep."
			}, {
			name : "Arcane Core",
			description : "If Bambi reaches 0 HP it's Arcane Core is exposed if Bambi suffers 10 more damage in a single round the core is destoryed and Bambi will need to be rebuilt"
			}, {
			name : "Arcane Explostion",
			description : "If Bambi's Arcane Core is destroyed it explodes. Creatures in a 20 foot radius must make a DC 17 Dex Saving Throw, if a creature fails it's save it suffers 10d10 ligthning damage, half as much on a successful one."
			}
	],

};
CreatureList["Bambi Mk3"] = {
	name : "Bambi Mk3",
	source : ["V", 208],
	size : 2, //Large
	type : "Construct",
	subtype : "",
	companion : sheetVersion >= 13 ? "familiar_not_al" : "familiar",
	alignment : "Unaligned",
	ac : 16,
	hp : 150,
	hd : [10, 10], //[#, die]
	speed : "15 ft",
	scores : [16, 9, 18, 3, 11, 1], //[Str, Dex, Con, Int, Wis, Cha]
	saves : [5, "", 7, "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 0
	},
	damage_immunities : "Lightning, Poison",
	damage_resistances : "cold and fire damage",
	condition_immunities : "poisoned",
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "Understands the languages of its creator but can't speak",
	challengeRating : "1/8",
	proficiencyBonus : 6,
	attacksAction : 2,
	attacks : [{
			name : "Slam",
			ability : 1,
			damage : [4, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}, {
			name : "Fist",
			ability : 1,
			damage : [3, 8, "bludgeoning"],
			range : "Melee (5 ft)",
			description : "Bambi has advantage when using Fist attacks"
		}
	],
	traits : [{
			name : "Magic Weapons",
			description : "Bambi's attacks are considered magical."
			}, {
			name : "Multiattack",
			description : "Bambi can make two weapon attacks. you can use slam and fist if you wish"
			}, {
			name: "Construct",
			description: "Bambi does not require; air, food, drink, or sleep."
			}, {
			name : "Arcane Core",
			description : "If Bambi reaches 0 HP it's Arcane Core is exposed if Bambi suffers 10 more damage in a single round the core is destoryed and Bambi will need to be rebuilt"
			}, {
			name : "Arcane Explostion",
			description : "If Bambi's Arcane Core is destroyed it explodes. Creatures in a 20 foot radius must make a DC 17 Dex Saving Throw, if a creature fails it's save it suffers 10d10 ligthning damage, half as much on a successful one."
			}
	],
};