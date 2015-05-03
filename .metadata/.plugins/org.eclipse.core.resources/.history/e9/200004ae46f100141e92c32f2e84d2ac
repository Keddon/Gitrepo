/**
 * @author Keddon Campbell
 */


var extraWindow = Ti.UI.createWindow({
	backgroundColor: "fff",
	title: "Story Generator"
});


var extraView = Ti.UI.createView({
	backgroundColor: "fff",
	width: "100%",
	height: "100%",
	top: 0,
	borderRadius: 10
});

var extraViewnoun = Ti.UI.createView({
	backgroundColor: "aefff1",
	width: "80%",
	height: "8%",
	top: 60,
	borderRadius: 10
});
var extraViewverb = Ti.UI.createView({
	backgroundColor: "aefff1",
	width: "80%",
	height: "8%",
	top: 90,
	borderRadius: 10
});
var extraViewplace = Ti.UI.createView({
	backgroundColor: "aefff1",
	width: "80%",
	height: "8%",
	top: 120,
	borderRadius: 10
});


var theNoun = Ti.UI.createTextField({
	top: 0
});

var theVerb = Ti.UI.createTextField({
	top: 0
	
});

var thePlace = Ti.UI.createTextField({
	top: 0
});



var nounlabel = Ti.UI.createLabel({
	text: "please type a noun",
});


var verblabel = Ti.UI.createLabel({
	text: "please type a verb",
});


var placelabel = Ti.UI.createLabel({
	text: "please type a place",
});

var resultLabel = Ti.UI.createLabel({
	text: "generate!",
	color: "fff"
});
var resultButton = Ti.UI.createView({
	height: "8%",
	width: "40%",
	bottom: 5,
	backgroundColor: "000",
	borderRadius: 15
});
var theResult = Ti.UI.createLabel({
	text: theNoun.value +" laught to see such fun as the fish "+ theVerb.value +" all night with the shark all night around the "+ thePlace.value ,
});

		function MakeExtra(){	
					
					
					resultButton.add(resultLabel);	
					extraViewplace.add(thePlace);
			        extraViewverb.add(theVerb);		
					extraViewnoun.add(theNoun);
					extraView.add(extraViewnoun,resultButton,extraViewverb,extraViewplace);
					extraWindow.add(extraView);
					navWin.openWindow(extraWindow);
					};



extrasButton.addEventListener("click", MakeExtra);
