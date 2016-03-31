var swapCase = function(characters) {
	var newChars = "";
	for (var i = 0; i < characters.length; i++) {
		if (characters[i] === characters[i].toLowerCase()) {
			newChars += characters[i].toUpperCase();
		} else {
			newChars += characters[i].toLowerCase();
		}
	}
	console.log(newChars);
	return newChars;
}

var sentence = 'Life is 10% what happens to you, and 90% of how you REACT to it';
var newText = swapCase(sentence);
