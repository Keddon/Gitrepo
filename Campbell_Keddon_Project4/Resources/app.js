Ti.UI.setBackgroundColor("#fff");

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "fff",
	title: "Fruits & Veggies"
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var titleView = Ti.UI.createView({
	top: 380,
	width: "100%",
	height: 30,
	backgroundColor: "f2f2f2",

});


var galleryButton = Ti.UI.createView({
	top: 65,
	borderRadius: 10,
	width: "80%",
	height: 50,
	backgroundColor: "a6e0ae",
	name: "Gallery"
});

var detailButton = Ti.UI.createView({
	top: 120, 
	borderRadius: 10,
	width: "80%",
	height: 50,
	backgroundColor: "a6cfe0",
	name: "Details"
});

var extrasButton = Ti.UI.createView({
	top: 175, 
	borderRadius: 10,
	width: "80%",
	height: 50,	
	backgroundColor: "dfe0a6",
	name: "Extras"
});

var titleLabel = Ti.UI.createLabel({
	text: "C201504 Term by Keddon Campbell"
});

var galleryLabel = Ti.UI.createLabel({
	text: "Gallery",
	name: "Gallery"
});

var detailLabel = Ti.UI.createLabel({
	text: "Details",
	name: "Details"
});

var extrasLabel = Ti.UI.createLabel({
	text: "Extras",
	name: "Extras"
});

var fnLoader = require("function");
var gaLoader = require("Gallery");
var deLoader = require("Details");
var exLoader = require("Extras");

extrasButton.add(extrasLabel);
detailButton.add(detailLabel);
galleryButton.add(galleryLabel);
titleView.add(titleLabel);
mainWindow.add(titleView, galleryButton, detailButton, extrasButton);
navWin.open();
