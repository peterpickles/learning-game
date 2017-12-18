
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

  // Reset the game, sets the cards back to its position
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26 ];
  var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
  // <!--letters.sort( function() { return Math.random() - .5 } );--> didn't work :(

  for ( var i=0; i<26; i++ ) {
    $('<div>' + letters[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // creating the word cards
  var words = [ 'Apple', 'Boy', 'Cat', 'Dog', 'Elepant', 'Fort', 'Go', 'Hat', 'It', 'Jet', 'Key', 'Let', 'Monkey', 'Nancy', 'Ocean', 'Pet', 'Queen', 'Rat', 'Sam', 'Tea', 'Unicorn', 'Vee', 'Water', 'X-ray', 'Yosemite' , 'Zebra' ];
  for ( var i=1; i<=26; i++ ) {
    $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: cardDrop
    } );
  }

}

// If the card was dropped to the correct slot,
 
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

  if ( correctCards == 10 ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '500px',
      opacity: 1
    } );
  }

}