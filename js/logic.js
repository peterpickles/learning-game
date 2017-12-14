console.log ("hooked up!");

var letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordsArr = ["cat", "hat", "dog", "fog",];	
var randomWord = [];

//make elements draggable
$( function() {
    $( ".draggable-spans span" ).draggable();
} )

// grab a word,, splice put it into an array
function stringToArray () {
	wordsArr[0].split("");
	console.log ("on");
}
// every time I drag letter, push() into an array
// make a function to compare two arrays, if they match, then you win that instance
// function >> letter I dragged, if that's not in the answer array, pop it out.
// compare arrays --- might be using includes

//allow the divs to be injected with imgs

//allow imgs to be dragged around

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

