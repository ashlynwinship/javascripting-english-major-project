//1.

let numberArray, doubleFunction;
numberArray = [1, 2, 3, 4, 5];
doubleFunction = numberArray.map(function(number){return number * 2; }).join(", ");
$("#response").html(doubleFunction);

//2. Wow, so I tried different ways and even asked my brother to help me and nothing that I did worked.

//original
//let leonardo, donatello, raphael, michelangelo, turtles, weapons;
//leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
//donatello = {name: "Donatello", color: "purple", weapon: "bo"};
//raphael = {name: "Raphael", color: "red", weapon: "sai"};
//michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
//turtles = [leonardo, donatello, raphael, michelangelo];
//weapons = turtles.map(function(turtle){ return turtle.weapon; }).sort().join(", ");
//$("#response").html(weapons);

//let leonardo, donatello, raphael, michelangelo, turtles, weapons;
//leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
//donatello = {name: "Donatello", color: "purple", weapon: "bo"};
//raphael = {name: "Raphael", color: "red", weapon: "sai"};
//michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
//turtles = [leonardo, donatello, raphael, michelangelo];
//weapons = turtles.map(function(turtle){ for (let i = 0; i < turtles.length; i = i + 1 ) { if ( i === [turtles.length - 1] ) { return ("and " + turtle.weapon); } else { return (turtle.weapon + ", "); } }}.sort());
//$("#response").html(weapons);

//let leonardo, donatello, raphael, michelangelo, turtles, weapons;
//leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
//donatello = {name: "Donatello", color: "purple", weapon: "bo"};
//raphael = {name: "Raphael", color: "red", weapon: "sai"};
//michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
//turtles = [leonardo, donatello, raphael, michelangelo];
//weapons = turtles.map(function(turtle){ turtles.map(function(turtle){ let notLast = turtle.weapon + ", "; let Last = "and " + turtle.weapon; for ( let i = 0; i < weapons.length; i = i + 1 ) { return turtle.weapon;} } );}.sort());
//$("#response").html(weapons);

//3.

//According to a quick Web search I did, it seems that using .filter provides a response that is a new, changed array, while if statements just respond with whatever fits the condition, without changing the array. So if you want to alter your array so that you have a new array you can work with, one that fits your desired conditions, you should use the .filter method.
