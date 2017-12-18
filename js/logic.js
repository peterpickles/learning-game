var correctCards = 0;

$( init );
function init() {

  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26 ];
  var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
  // <!--letters.sort( function() { return Math.random() - .5 } );-->

  for ( var i=0; i<26; i++ ) {
    $('<div>' + letters[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }


























// var letterArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var words = new Array;
// words[0] = "CAT"
// words[1] = "HAT"
// words[2] = "BOY"
// words[3] = "TOY"
// var AnswerArray= [];

// startGame();

// //start game, grab a letter from the letterArr and put them inside each div
// function startGame(){
// 	var divAvailable = document.getElementById("letters");
	
// 	for(var i=0; i < letterArr.length; i++) {
// 		var l = document.createElement('div');
// 		l.innerHTML = letterArr[i];
// 		l.className = "letterTiles";
// 		divAvailable.appendChild(l);
// 	}
// }

// //make elements draggable
// $( function() {
//     $(".letterTiles").draggable();
// } )

// // grab a word,, splice put it into an array
// function stringToSplit(str) {

// 	word = str.split ('');
// 	AnswerArray.push(word);
	
// }
// stringToSplit(words[0]);
// console.log(AnswerArray);

// //clear word to empty brackets
// function clearWord () {

// }





















// //next word function
// function nextWord {
// 	console.log("Next word!")
// } 
//another function that has a for loop, run the stringSplit function in there
//compare the content inside of the brackets



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

