var correctCards = 0;
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var words = [ 'Apple', 'Boy', 'Cat', 'Dog', 'Elepant', 'Fort', 'Go', 'Hat', 'It', 'Jet', 'Key', 'Let', 'Monkey', 'Nancy', 'Ocean', 'Pet', 'Queen', 'Rat', 'Sam', 'Tea', 'Unicorn', 'Vee', 'Water', 'X-ray', 'Yosemite' , 'Zebra' ];
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
//Made a for loop to go through the letters array
//made a div with the letter based on it's index in the array
function showLetters() {
// for ( var i=0; i<1; i++ ) {
    $('<div>' + randomLetter + '</div>').appendTo( '#cardPile' ).draggable( {
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  // }
}
// creating the word cards
function showWords() {
  // for ( var i=1; i<=2; i++ ) {
  //   $('<div>' +  + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable({
  //     accept: '#cardPile div',
  //     hoverClass: 'hovered',
  //     drop: cardDrop
  //   });
  // }
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

}
}
function cardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  if ( slotNumber == cardNumber ) {
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
//once the card is confirmed position it directly on top of the slot, and prevent it being dragged
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
  } 
  
// if 10 cards are placed correctly and accepted, populate successmessage



}
function checkWin {
  if ( correctCards == 5 ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '250px',
      opacity: 1
    } );
  }
}