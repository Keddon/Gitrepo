/**
 * @author Keddon Campbell
 */

var AllFoods = {
	"fruits" : {
		"MainTitle": "Fruits",
		"fruitsList":[
		{
	"value":"0", "title":"Apples", "infoAbout": "The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple"
		},
		{
	"value":"1","title":"Bananas", "infoAbout": "A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."
		},
		{
		"value":"8","title":"Plums", "infoAbout": "A plum is a fruit of the subgenus Prunus of the genus Prunus. The subgenus is distinguished from other subgenera (peaches, cherries, bird cherries, etc.) in the shoots having a terminal bud and solitary side buds"
		},
		{
		"value":"5","title":"Grapes", "infoAbout": "A grape is a fruiting berry of the deciduous woody vines of the botanical genus Vitis. Grapes can be eaten raw or they can be used for making wine, jam, juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Grapes are a non-climacteric type of fruit, generally occurring in clusters."
		},
		{
		"value":"7","title":"Oranges", "infoAbout": "The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."
		}
		]
	},
	"veggies" : {
		"MainTitle": "Veggies",
		"veggieList" :[
					{
					"value":"4","title":"Carrots", "infoAbout": "The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in colour, though purple, red, white, and yellow varieties exist. It has a crisp texture when fresh"
					},
					{
					"value":"2","title":"Broccoli", "infoAbout": "Broccoli is an edible green plant in the cabbage family whose large, flowering head is eaten as a vegetable. The word broccoli comes from the Italian plural of broccolo, which means the flowering crest of a cabbage, and is the diminutive form of brocco, meaning small nail or sprout."
					},
					{
					"value":"3","title":"Cabbage", "infoAbout": "Cabbage (Brassica oleracea or variants) is a leafy green or purple biennial plant, grown as an annual vegetable crop for its dense-leaved heads"
					},
					{
					"value":"9","title":"Turnip", "infoAbout": "The turnip or white turnip (Brassica rapa subsp. rapa) is a root vegetable commonly grown in temperate climates worldwide for its white, bulbous taproot. "
					},
					{
					"value":"6","title":"Onion", "infoAbout": "The onion (Allium cepa) (Latin 'cepa' = onion), also known as the bulb onion or common onion, is used as a vegetable and is the most widely cultivated species of the genus Allium."
					},
			]
	}
};

for(var prop in AllFoods){
console.log(AllFoods[prop]);
};
  
var gaLoader = require("Gallery");
var deLoader = require("Details");
var exLoader = require("Extras");
