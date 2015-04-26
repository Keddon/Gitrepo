Ti.UI.setBackgroundColor("#fff");
var galleria = require("gallery");


var deviceWth = Ti.Platform.displayCaps.platformWith;
var deviceHgt = Ti.Platform.displayCaps.platformHeight;
var itemCount = 30;
var itemRow = 4;
var margin = 5;
var canvasWth = (10);
var itemsize = "65";
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imagesFile = imagesFolder.getDirectoryListing();
console.log(imagesFile);

var mainActivity = Ti.UI.createWindow({
	backgroundColor: "528bb2",
	hasChild : true,

});

var mainActivityView = Ti.UI.createView({
	backgrounfColor: "e6e6e6",
	top: 20,
	width: "80%",
	height: "15%"
});


var mainActivityLabel = Ti.UI.createLabel({
	text: "Main Menu"
});

var galleryButton = Ti.UI.createView({
	backgroundColor: "47e3da",
	top: mainActivityView.top + 100,
	width: "60%",
	height: 40,
	hasChild: true,

});
 
var galleryText = Ti.UI.createLabel({
	text: "Gallery",
	textColor: "000"

});
 
 var mainGallery = function(){

 	 console.log("here!");
 	 console.log(imagesFile);
  	
 	 var GalleryWindow = Ti.UI.createWindow({
	 backgroundcolor: "727272",
	 width: deviceWth,
	
	
	 });
	 var GalleryView = Ti.UI.createScrollView({
	 width: "100%",
	 height: "100%",
	 backgroundColor: "b9cb42",
	 layout: "horizontal",
	 top:20,
	 contentWidth: "100",
	 showVerticalScrollIndicator: true
 		
	 });
	 
	 for (var i=0; i<imagesFile.length; i++){
	 	
		var viewer = Ti.UI.createView({
			backgroundColor: "fff",
			top: margin,
			left: margin,
			right:margin,
			width: itemsize,
			height: itemsize,

	});
		var thumb = Ti.UI.createImageView({
			image: "images/" + imagesFile[i],
			top: 0,
			width: viewer.width*2,
			name: imagesFile[i],
	});
		GalleryView.add(viewer);
		viewer.add(thumb);
	} 
		GalleryWindow.add(GalleryView);
		GalleryView.addEventListener("click", function(imager){
			console.log(imager.source.name);
			
			var imageWindow = Ti.UI.createWindow({
				backgroundColor: "66337e",
				width: "100%",
				height: "100%"
			});
			var imageWindowView = Ti.UI.createImageView({
				image: "images/" + imager.source.name
				
			});
			var imageCloseBTN = Ti.UI.createView({
				width:"100%",
				backgroundcolor: "47aef4"
			});
			var imageCloseLB = Ti.UI.createLabel({
				bottom: 20,
				text: imager.source.name + " click to exit",
				textColor: "fff",
				size: 20,
				
			});
			
			imageCloseLB.addEventListener("click", function(close){
				imageWindow.close({transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
			});
			imageCloseBTN.add(imageCloseLB);
			imageWindowView.add(imageCloseBTN);
			imageWindow.add(imageWindowView);
			imageWindow.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
		});
     GalleryWindow.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
};






galleryButton.add(galleryText);
galleryButton.addEventListener("click", mainGallery);
mainActivity.add(galleryButton);
mainActivityView.add(mainActivityLabel);
mainActivity.add(mainActivityView);
mainActivity.open();

