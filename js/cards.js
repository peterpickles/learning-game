var correctCards = 0;
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var words = [ 'Apple', 'Boy', 'Cat', 'Dog', 'Elepant', 'Fort', 'Go', 'Hat', 'It', 'Jet', 'Key', 'Let', 'Monkey', 'Nancy', 'Ocean', 'Pet', 'Queen', 'Rat', 'Sam', 'Tea', 'Unicorn', 'Vee', 'Water', 'X-ray', 'Yosemite' , 'Zebra' ];
var num = Math.floor(Math.random()*25)
var randomLetter= letters[num];
var correctWord = words[num];
var randomWord = words[Math.floor(Math.random()*25)];


// var cards = [
// { 
// 	letters: "A",
// 	words: "Apple"
// },	
// { 
// 	letters: "B",
// 	words: "Boy"
// },
// { 
// 	letters: "C",
// 	words: "Cat"
// },
// { 
// 	letters: "D",
// 	words: "Dog"
// },
// { 
// 	letters: "E",
// 	words: "Elepant"
// },
// { 
// 	letters: "F",
// 	words: "Fort"
// },
// { 
// 	letters: "G",
// 	words: ""
// },
// { 
// 	letters: "",
// 	words: "Apple"
// },
// { 
// 	letters: "",
// 	words: "Apple"
// },
// { 
// 	letters: "",
// 	words: "Apple"
// },
// { 
// 	letters: "",
// 	words: "Apple"
// },
// { 
// 	letters: "",
// 	words: "Apple"
// },
// { 
// 	letters: "",
// 	words: "Apple"
// }

// ];