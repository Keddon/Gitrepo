var favoriteFruits = ["Apples", "Bananas", "Plums", "Oranges", "Grapes"];








var nextFruit = function(){
	textLabelmain.text = favoriteFruits[0];
};

var previousFruit = function(){
	textLabelmain.text = favoriteFruits[4];
};

nextButton.addEventListener("click", nextFruit);



previousButton.addEventListener("click", previousFruit);
