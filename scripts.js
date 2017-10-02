let userInput, myObject;
userInput = prompt("Enter your array here.");
let lastItem;
lastItem = userInput[userInput.length-1];
$("#response").html("The last item in your array is " + lastItem + ".");
