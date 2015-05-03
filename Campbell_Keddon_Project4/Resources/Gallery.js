/**
 * @author Keddon Campbell
 */

var imgFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imgFile = imgFolder.getDirectoryListing();
var ranCheck;



		var ranButton = Ti.UI.createView({
						backgroundColor: "343434",
						borderRadius: 10,
						width: "80%",
						height: "30",
						bottom: 5
						
					});
					
		var viewGallery = Ti.UI.createView({
						width: "100%",
						height: "100%",
						backgroundColor: "fff",
						
					});
			
		var findRan  =	function randomXToY(min,max){
							var randVal = min+(Math.random()*(max-min)); 
							return Math.round(randVal); 
					};
									
		var viewImage = Ti.UI.createImageView({
						bottom: 50,
					});
					
		var gallWindow = Ti.UI.createWindow({
						backgroundColor: "fff",
					});
					
		var ranLabel = Ti.UI.createLabel({
						text: "Change",
						Color: "e1e1e1",
						});
						
						
		function MakeGallery(){
						var doRan = findRan(0,9);
						viewImage.image = "images/" + imgFile[doRan];
						gallWindow.title = imgFile[doRan];
						ranCheck = doRan;
						openGallery();
					
					};						
						
		function openGallery(){						
						ranButton.add(ranLabel);
						viewGallery.add(ranButton);
						gallWindow.add(viewGallery);
						viewGallery.add(viewImage);
						navWin.openWindow(gallWindow);
					};

	function remakeGallery(){
						var doRan = findRan(0,9);
						if(doRan === ranCheck){
							remakeGallery();
							return;
						}else{
							viewImage.image = "images/" + imgFile[doRan];
							gallWindow.title = imgFile[doRan];
							ranCheck = doRan;
							openGallery();}
					};

					 				
ranButton.addEventListener("click", remakeGallery);

galleryButton.addEventListener("click", MakeGallery);
