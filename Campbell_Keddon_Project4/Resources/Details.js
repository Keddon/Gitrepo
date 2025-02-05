/**
 * @author Keddon Campbell
 */
var imgFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imgFile = imgFolder.getDirectoryListing();
var fruits = [{value:"0", title:"Apples", infoAbout: "The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple"},{value:"1",title:"Bananas", infoAbout: "A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."},{value:"8",title:"Plums", infoAbout: "A plum is a fruit of the subgenus Prunus of the genus Prunus. The subgenus is distinguished from other subgenera (peaches, cherries, bird cherries, etc.) in the shoots having a terminal bud and solitary side buds"},{value:"5",title:"Grapes", infoAbout: "A grape is a fruiting berry of the deciduous woody vines of the botanical genus Vitis. Grapes can be eaten raw or they can be used for making wine, jam, juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Grapes are a non-climacteric type of fruit, generally occurring in clusters."},{value:"7",title:"Oranges", infoAbout: "The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."}];
var veggie = [{value:"4",title:"Carrots", infoAbout: "The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in colour, though purple, red, white, and yellow varieties exist. It has a crisp texture when fresh"},{value:"2",title:"Broccoli", infoAbout: "Broccoli is an edible green plant in the cabbage family whose large, flowering head is eaten as a vegetable. The word broccoli comes from the Italian plural of broccolo, which means the flowering crest of a cabbage, and is the diminutive form of brocco, meaning small nail or sprout."},{value:"3",title:"Cabbage", infoAbout: "Cabbage (Brassica oleracea or variants) is a leafy green or purple biennial plant, grown as an annual vegetable crop for its dense-leaved heads"},{value:"9",title:"Turnip", infoAbout: "The turnip or white turnip (Brassica rapa subsp. rapa) is a root vegetable commonly grown in temperate climates worldwide for its white, bulbous taproot. "},{value:"6",title:"Onion", infoAbout: "The onion (Allium cepa) (Latin 'cepa' = onion), also known as the bulb onion or common onion, is used as a vegetable and is the most widely cultivated species of the genus Allium."},];




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








var detailWindow = Ti.UI.createWindow({
	backgroundColor : "#fff",
	title: "Foods",
});


var Foods = Ti.UI.createTableView({
	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});



var fruitsSection= Ti.UI.createTableViewSection({
	headerTitle: "Fruits"
});

var veggiesSection= Ti.UI.createTableViewSection({
	headerTitle: "Veggies"
});

var FoodsSection = [fruitsSection, veggiesSection];


Foods.setData(FoodsSection);
 
function tableMaker(){
	for (var a=0, b=fruits.length ; a<b ; a++){
	var fruitName = Ti.UI.createTableViewRow({
		title: fruits[a].title,
		about: fruits[a].infoAbout,
		valv:  fruits[a].value,
				hasChild: true
	});
	fruitsSection.add(fruitName);
}

for(var a=0, b=veggie.length ;a<b ; a++){
	var veggieName = Ti.UI.createTableViewRow({
		title: veggie[a].title,
		about: veggie[a].infoAbout,
		valv: veggie[a].value,
		hasChild: true
	});
	veggiesSection.add(veggieName);
}
};

function TheDetail(){
	tableMaker();
	detailWindow.add(Foods);
	navWin.openWindow(detailWindow);
};
var info = function(event){
	
	var infoWindow = Ti.UI.createWindow({
		backgroundColor: "fff"
	});
	
		var infoViewLabel = Ti.UI.createLabel({
		text: event.title,
		color: "000",
		font: (fontSize = 54, fontFamily = "trebuchetMS", fontWeight = "bold"),
		top : 20,
	});
		var infoAboutLabel = Ti.UI.createLabel({
		text: event.about,
		color: "000",
		font: (fontSize = 44, fontFamily = "trebuchetMS"),
		top : 0,
		right: 10,
		left: 10,
	});
		var infoView = Ti.UI.createView({
		backgroundColor: "#fff",
		borderColor: "#fff",
		width: "100%",
		height: 40,
		top: 0
	});
		var infoAboutView = Ti.UI.createView({
		backgroundColor: "#fff",
		borderColor: "1fdfd4",
		width: "100%",
		height: "60%",
		bottom: 5

	});
	var infoImage = Ti.UI.createImageView({
		image:"images/" + imgFile[event.valv],
		width: "30%",
		left: 5,
		top: 0,
	});
	
	console.log(infoImage.image);
	
	
	
	
	infoAboutView.add(infoAboutLabel);
	infoView.add(infoViewLabel);
	infoWindow.add(infoView,infoAboutView,infoImage);
	navWin.openWindow(infoWindow);//({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
};

Foods.addEventListener("click", function(event){
	info(event.source);
});


detailButton.addEventListener("click", TheDetail);