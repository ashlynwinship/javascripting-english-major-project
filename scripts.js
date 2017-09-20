let userInput;
userInput = prompt("Choose a number.", "Type your answer here.");
let i;
i = 1;
for ( let i = 1; i <= userInput; i = i + 2 ) { $("#response").append("<br />" + i + " is odd."); }
for ( let i = 2; i <= userInput; i = i + 2 ) { $("#response").append("<br />" + i + " is even."); }
