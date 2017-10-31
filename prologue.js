$("#prologue").html("<p>The text of the Prologue will go here.</p>");
$("#glosses").html("<p>The glosses will go here.</p>");

$("#glosses").html("<p>The glosses will go here.</p>");
let line1, line1Text;
line1 = [{text: "Whan", modern: "When"}, {text: "that"}, {text: "Aprill,",
        modern: "April,"}, {text: "with"}, {text: "his"}, {text: "shoures",
        modern: "showers"}, {text: "soote", modern: "sweet"}];
line1Text = "<blockquote><p>";
line1.forEach(function(word){
  let wordString;
  wordString = word.text;
  if (word.modern){
    wordString = "<a href='#' data-modern=' " + word.modern + " '>" + wordString + "</a>";
  }
  line1Text = line1Text + wordString + " ";
});
line1Text = line1Text + "<br />(line 2 would go here)</p></blockquote>";
$("#prologue").html(line1Text);

$("#prologue a").click(function(){
  let glossText, clickedWord, modernWord;
  clickedWord = $( this ).text();
  modernWord = $( this ).data("modern");
  glossText = "<h2>You clicked on the word: " + clickedWord + ", which means " + modernWord + "</h2>";
  $("#glosses").html(glossText);
});
