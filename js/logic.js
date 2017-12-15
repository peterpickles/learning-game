console.log ("linked");
var letterArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var words = new Array;
words[0] = "CAT"
words[1] = "HAT"
words[2] = "BOY"

startGame();
function startGame(){
	var divAvailable = document.getElementById("letters");
	
	for(var i=0; i < letterArr.length; i++) {
		var l = document.createElement('div');
		l.innerHTML = letterArr[i];
		l.className = "btnLetter";
		divAvailable.appendChild(l);
	}
}
//make elements draggable
$( function() {
    $(".btnLetter").draggable();
} )

// grab a word,, splice put it into an array
function stringsToArray () {
	wordsArr[0].split("")
	console.log ("on")
}
// every time I drag letter, push() into an array
// make a function to compare two arrays, if they match, then you win that instance
// function >> letter I dragged, if that's not in the answer array, pop it out.
// compare arrays --- might be using includes

//allow img to be dragged from one place to another

//allow imgs to return to the origin point if not dragged to the desired place


// snap a piece of content to another piece of content 

// assign something to each content when its clicked

// when two content = same key/class/id are together

// know when the content is not the correct content

// check

// if the letters are going to be a win case, when a letter is touching the correct word letter

// make a button to go to the next word in the array

// make a jquery logic for button showing after the word has been matched

