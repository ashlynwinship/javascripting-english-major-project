let userInput;
userInput = prompt("Choose a number.", "Type your answer here.");
let i;
i = 1;
for ( let i = 1; i <= userInput; i = i + 1 ) { if ( i % 2 === 0 ) { $("#response").append("<br />" + i + " is even."); } if ( i % 2 === 1 ) { $("#response").append("<br />" + i + " is odd."); } }
