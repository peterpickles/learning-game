var NUM_WORDS = 5;
var correctCards = 0;
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var words = [ 'Apple', 'Boy', 'Cat', 'Dog', 'Elepant', 'Fort', 'Go', 'Hat', 'It', 'Jet', 'Key', 'Lenny', 'Monkey', 'Nancy', 'Ocean', 'Pet', 'Queen', 'Rat', 'Sam', 'Tea', 'Unicorn', 'Victor', 'Water', 'X-ray', 'Yosemite' , 'Zebra' ];
var correctWord = getRandomWord();
var randomWord = getRandomWord();

$(document).ready(function init() {
  resetCards();
  $('#successMessage').hide();
});

$("#start-button").on("click", function(){
    $("#wideBox").addClass("animated bounceOutUp");
    console.log("clicked");
});


function getRandomWord() {
    return words[Math.floor(Math.random()*words.length)];
}

function getFirstLetter(word) {
    return word[0]

}
//made a div with the letter based on it's index in the array
function showLetters() {
    var firstLetter = getFirstLetter(correctWord);
    $('<div>' + firstLetter + '</div>').appendTo( '#cardPile' ).draggable( {
      stack: '#cardPile div',
      cursor: 'pointer',
      revert: true,
    } );
    // console.log("index of letter is ", letters.indexOf(randomLetter));
}
// creating the word cards
function showWords() {  
    // randomWord = getRandomWord();
    correctWord = getRandomWord();
    //find index position of the corresponding word and display that word

    //add the correct word to the array of words for this turn
    var currentWords = [correctWord];

    //pick X amount of random words
    for(var i = 1; i < NUM_WORDS; i++){
      currentWords.push(getRandomWord());
    }

    //Randomize order of cards
    currentWords.sort(function(){
      return 0.5 - Math.random();
    });


    for(var i = 0; i < currentWords.length; i++){
      $('<div>' + currentWords[i] + '</div>').appendTo("#cardSlots").droppable({
          accept: '#cardPile div',
          hoverClass: 'hovered',
          drop: cardDrop
      });
    }

     showLetters();
}
 

function cardDrop( event, ui ) {
  var letter = getFirstLetter(correctWord);
  var word = getFirstLetter($(this)[0].textContent);

  if ( letter == word ) {
    // $("#message").remove();
    $("#message").addClass("animated zoomIn").append( "<p>Yay!! that was the correct one!</p>" );
    ui.draggable.draggable("disable");

    
    //once the card is confirmed position it directly on top of the slot, and prevent it being dragged
    correctCards++;
    $(this).droppable('disable');
    ui.draggable.position({ 
      of: $(this), 
      my: 'left top', 
      at: 'left top' 
    });
    ui.draggable.draggable( 'option', 'revert', false );
    checkForWin();
    console.log("Number of correct cards " + correctCards);
  } 
  else {
    // $("#message").remove();
    $("#message p").append( "<p>Ohnoes!! Try again</p>" );;
  }
}

function checkForWin () {
  if ( correctCards >= 5 ) {
    $('#successMessage').addClass("animated bounceInDown").show();

  }else {

    resetCards()
  }
}

//reset card after the card drop happens
//Will need a slight pause in the removal and some animations when the card comes into view
//Get 
function resetCards () {
  $(".ui-droppable").remove();
  $(".ui-draggable").remove();
  showWords();
}






