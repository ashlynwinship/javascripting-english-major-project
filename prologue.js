//HW 1: If you use $( this ).modern to try to get the .modern property, your code will look like this:
//clickedWord = $( this ).modern();
//glossText = "<h2>You clicked on the word: " + clickedWord + "</h2>";
//This will not work because the word you click on needs to be the one defined in the .text property (the "old-timey" one). If we set clickedWord to the definition above, then the user would need to click on the modern version of the word, which they cannot see. For example, the code would be trying to make the word "When" into a clickable link, but "When" is not what appears on the page - it's "Whan".

// 1. Set the default #glosses value. I'm setting it to a blank string because I think stating "The glosses will go here" looks a little tacky.
$("#glosses").html("<p></p>");
// 2. Set the content of #prologue.
$.getJSON("https://the-javascripting-english-major.org/prologue.json", function(data){
  let prologueText;
  prologueText = "<blockquote><p>";
  data.lines.forEach(function(line){
    let lineText;
    lineText = "";
    line.forEach(function(word){
      let wordString;
      wordString = word.text;
      if (word.modern){
        wordString = "<a href='#' data-modern='" + word.modern + "'>" + wordString + "</a>";
      }
      lineText = lineText + wordString + " ";
    });
    prologueText = prologueText + lineText + "<br/>";
  });
  prologueText = prologueText + "</p></blockquote>";
  $("#prologue").html(prologueText);
  // This is the callback.
  $("#prologue a").click(function(){
    let glossText, clickedWord, modernWord, wikipediaLink;
    clickedWord = $( this ).text();
    modernWord = $( this ).data("modern");
    glossText = "<h2>You clicked on " + clickedWord + ", which means " + modernWord + "; you could also visit Wikipedia if you'd like." +"</h2>";
    $("#glosses").html(glossText);
  });
});


//I tried to turn the word Wikipedia into a link that would take you straight to Wikipedia's homepage, but the // in the URL voided it, like it's doing for the comments here. Strange.
//$("#prologue a").click(function(){
//  let glossText, clickedWord, modernWord;
//  clickedWord = $( this ).text();
//  modernWord = $( this ).data("modern");
//  glossText = "<h2>You clicked on " + clickedWord + ", which means " + modernWord + "; you could also visit <a href="https://www.wikipedia.org/">Wikipedia</a> if you'd like." +"</h2>";
//  $("#glosses").html(glossText);
//});

//for reference:
//$("#prologue a").click(function(){
  //let glossText, clickedWord, modernWord;
  //clickedWord = $( this ).text();
  //modernWord = $( this ).data("modern");
  //glossText = "<h2>You clicked on " + clickedWord + ", which means " + modernWord + "; you could also visit Wikipedia if you'd like." +"</h2>";
  //$("#glosses").html(glossText);
//});
