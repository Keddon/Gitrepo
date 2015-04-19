Ti.UI.setBackgroundColor("#fff");

var fruits = [{title:"Apples", infoAbout: "The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple"},{title:"Bananas", infoAbout: "A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."},{title:"Plums", infoAbout: "A plum is a fruit of the subgenus Prunus of the genus Prunus. The subgenus is distinguished from other subgenera (peaches, cherries, bird cherries, etc.) in the shoots having a terminal bud and solitary side buds"},{title:"Grapes", infoAbout: "A grape is a fruiting berry of the deciduous woody vines of the botanical genus Vitis. Grapes can be eaten raw or they can be used for making wine, jam, juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Grapes are a non-climacteric type of fruit, generally occurring in clusters."},{title:"Oranges", infoAbout: "The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."}];
var veggie = [{title:"Carrots", infoAbout: "The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in colour, though purple, red, white, and yellow varieties exist. It has a crisp texture when fresh"},{title:"Broccoli", infoAbout: "Broccoli is an edible green plant in the cabbage family whose large, flowering head is eaten as a vegetable. The word broccoli comes from the Italian plural of broccolo, which means the flowering crest of a cabbage, and is the diminutive form of brocco, meaning small nail or sprout."},{title:"Cabbage", infoAbout: "Cabbage (Brassica oleracea or variants) is a leafy green or purple biennial plant, grown as an annual vegetable crop for its dense-leaved heads"},{title:"Turnip", infoAbout: "The turnip or white turnip (Brassica rapa subsp. rapa) is a root vegetable commonly grown in temperate climates worldwide for its white, bulbous taproot. "},{title:"Onion", infoAbout: "The onion (Allium cepa) (Latin 'cepa' = onion), also known as the bulb onion or common onion, is used as a vegetable and is the most widely cultivated species of the genus Allium."},];
var AllFoods = {
	"fruits" : {
		"MainTitle": "Fruits",
		"fruitsList":[
			{
				"name":"Apple",
				"about":"The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple"
			},
			{
				"name":"Banana",
				"about":"A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."
			},
			{
				"name":"Plums",
				"about":"A plum is a fruit of the subgenus Prunus of the genus Prunus. The subgenus is distinguished from other subgenera (peaches, cherries, bird cherries, etc.) in the shoots having a terminal bud and solitary side buds"
			},
			{
				"name":"Grapes",
				"about":"A grape is a fruiting berry of the deciduous woody vines of the botanical genus Vitis. Grapes can be eaten raw or they can be used for making wine, jam, juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Grapes are a non-climacteric type of fruit, generally occurring in clusters."
			},
			{
				"name":"Orange",
				"about":"The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."
			},
		]
	},
	"veggies" : {
		"MainTitle": "Veggies",
		"veggieList" :[
					{
				"name":"Carrot",
				"about":"The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in colour, though purple, red, white, and yellow varieties exist. It has a crisp texture when fresh"
			},
			{
				"name":"Broccoli",
				"about":"Broccoli is an edible green plant in the cabbage family whose large, flowering head is eaten as a vegetable. The word broccoli comes from the Italian plural of broccolo, which means the flowering crest of a cabbage, and is the diminutive form of brocco, meaning small nail or sprout."
			},
			{
				"name":"Cabbage",
				"about":"Cabbage (Brassica oleracea or variants) is a leafy green or purple biennial plant, grown as an annual vegetable crop for its dense-leaved heads"
			},
			{
				"name":"Turnip",
				"about":"The turnip or white turnip (Brassica rapa subsp. rapa) is a root vegetable commonly grown in temperate climates worldwide for its white, bulbous taproot. "
			},
			{
				"name":"Onion",
				"about":"The onion (Allium cepa) (Latin 'cepa' = onion), also known as the bulb onion or common onion, is used as a vegetable and is the most widely cultivated species of the genus Allium."
			}
		]	
	}
};





var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#bdd684"
});

var mainView = Ti.UI.createView({
	backgroundColor: "#dbffe4",
	borderRadius: 2,
	borderWidth: 1,
	borderColor: "#fff",
	width: "100%",
	height: 60,
	top: 0
});
var fruitfooter = Ti.UI.createView({
	backgroundColor: "#dbffe4",
	width: "100%",
	height: 20,
});

var veggiefooter = Ti.UI.createView({
	backgroundColor: "#dbffe4",
	width:"100%",
	height: 20,
});

var fruitfooterText = Ti.UI.createLabel({
	text: "great for the road",
	color: "3d398a",
	font:{fontSize:12,fontWeight:"bold"}
});

var veggiefooterText = Ti.UI.createLabel({
	text: "great for cooking",
	color: "3d398a",
	font:{fontSize:12,fontWeight:"bold"}
});

veggiefooter.add(veggiefooterText);
fruitfooter.add(fruitfooterText);


var mainViewLabel = Ti.UI.createLabel({
	text: "Fruit-pedia",
	color: "#000",
	font: (fontSize = 24, fontFamily = "trebuchetMS", fontWeight = "bold"),
	top : 40
});

var Foods = Ti.UI.createTableView({
//	data: fruits,
	top: mainView.top + mainView.height,
	borderColor: "fffcca",
	style : Ti.UI.iPhone.TableViewStyle.GROUPED
});

var fruitSection = Ti.UI.createTableViewSection  ({
	headerTitle: "Delicious Fruits",
	//footerTitle: "great for the road"
	footerView: fruitfooter
});

var veggieSection = Ti.UI.createTableViewSection ({
	headerTitle: "Healthy Veggies",
	//footerTitle: "great for coocking"
	footerView: veggiefooter
});

var info = function(){
	
	var infoWindow = Ti.UI.createWindow({
		backgroundColor: "216c3e"
	});
	
		var infoViewLabel = Ti.UI.createLabel({
		text: this.title,
		color: "8e17ea",
		font: (fontSize = 34, fontFamily = "trebuchetMS", fontWeight = "bold"),
		top : 20
	});
		var infoAboutLabel = Ti.UI.createLabel({
		text: this.about,
		color: "394f4e",
		font: (fontSize = 44, fontFamily = "trebuchetMS"),
		top : 50
	});
		var infoView = Ti.UI.createView({
		backgroundColor: "#dbffe4",
		borderColor: "#fff",
		width: "100%",
		height: 40,
		top: 0
	});
		var infoAboutView = Ti.UI.createView({
		backgroundColor: "#dbffe4",
		borderColor: "1fdfd4",
		width: "100%",
		height: "60%",

	});
	
	var exitButton = Ti.UI.createLabel({
		text: "Exit",
		backgroundColor: "d2bd5d",
		color: "5d6ed2",
		height: 35,
		font: (fontSize = 24, fontFamily = "trebuchetMS", fontWeight = "bold"),
		width: "40%",
		bottom: 0,
		textAlign: "center"
		
	});
	
	var closeInfo = function(){
		infoWindow.close({transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
	};
	
	exitButton.addEventListener("click", closeInfo);
	
	infoAboutView.add(infoAboutLabel);
	infoView.add(infoViewLabel);
	infoWindow.add(infoView,exitButton,infoAboutView);
	infoWindow.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
};

for (var a=0, b=fruits.length ; a<b ; a++){
	var fruitName = Ti.UI.createTableViewRow({
		title: fruits[a].title,
		about: fruits[a].infoAbout,
		hasChild: true
	});
	fruitSection.add(fruitName);
	fruitName.addEventListener("click", info);
}

for(var a=0, b=veggie.length ;a<b ; a++){
	var veggieName = Ti.UI.createTableViewRow({
		title: veggie[a].title,
		about: veggie[a].infoAbout,
		hasChild: true
	});
	veggieSection.add(veggieName);
	veggieName.addEventListener("chick", info);
}

var FoodSection = [fruitSection, veggieSection];

Foods.setData(FoodSection);

//var LoadFoods = require("Functions");

mainView.add(mainViewLabel);
mainWindow.add(mainView,Foods);
mainWindow.open();