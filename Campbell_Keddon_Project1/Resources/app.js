Ti.UI.setBackgroundColor("#fff");

var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#6dd1f7"
});

var foodDisplayView = Ti.UI.createView({
	backgroundColor: "#dbffe4",
	borderRadius: 2,
	borderWidth: 1,
	width: "80%",
	height: "50%",
	top: 40
	
});








mainWindow.add(foodDisplayView);
mainWindow.open();
