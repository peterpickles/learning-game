var correctCards = 0;
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var words = [ 'Apple', 'Boy', 'Cat', 'Dog', 'Elepant', 'Fort', 'Go', 'Hat', 'It', 'Jet', 'Key', 'Lenny', 'Monkey', 'Nancy', 'Ocean', 'Pet', 'Queen', 'Rat', 'Sam', 'Tea', 'Unicorn', 'Victor', 'Water', 'X-ray', 'Yosemite' , 'Zebra' ];
var num = Math.floor(Math.random()*25)
var randomLetter= letters[num];
var correctWord = words[num];
var randomWord = words[Math.floor(Math.random()*words.length)];

$( document ).ready(function() {
  $(showLetters);
  $(showWords);
  $('#successMessage').hide();
  $('#successMessage').css( {
      left: '580px',
      top: '250px',
      width: 0,
      height: 0
    } );
});

//made a div with the letter based on it's index in the array
function showLetters() {
// for ( var i=0; i<1; i++ ) {
    $('<div>' + randomLetter + '</div>').appendTo( '#cardPile' ).draggable( {
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
    console.log("index of letter is ", letters.indexOf(randomLetter));
  // }
}
// creating the word cards
function showWords() {  
      $('<div>' + randomWord + '</div>').appendTo("#cardSlots").droppable({
          accept: '#cardSlots div',
          hoverClass: 'hovered',
          drop: cardDrop
      });
      $('<div>' + words[num] + '</div>').appendTo("#cardSlots").droppable({
          accept: '#cardSlots div',
          hoverClass: 'hovered',
          drop: cardDrop
      });
      console.log("index of wrong word is ", words.indexOf(randomWord));
      console.log("index of correct word is ", words.indexOf(correctWord));
}
 

function cardDrop( event, ui ) {
  // var cardNumber = ui.draggable.data( 'number' );
  // var slotNumber = $(this).data( 'number' );
  var cardNumber = letters.indexOf(randomLetter);
  var slotNumber = words.indexOf(correctword);

  if ( slotNumber === cardNumber ) {
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
//once the card is confirmed position it directly on top of the slot, and prevent it being dragged
    $(this).droppable( 'disable' );
    ui.draggable.position({ 
      of: $(this), 
      my: 'left top', 
      at: 'left top' 
    });
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
    console.log(correctCards);
  } 
// function checkForWin () {
  if ( correctCards == 5 ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '250px',
      opacity: 1
    } );
  // } else {
    //clear the cards
    //load the next set of cards with show letter and cards


  }
// }
  

}

// if 10 cards are placed correctly and accepted, populate successmessag



