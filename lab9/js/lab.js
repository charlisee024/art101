// index.js - purpose and description here
// Author: Charlise Gonzales
// Date:5/12/25

// Constants

// Functions

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add button to problems section
$("#problems").append("<button id='button-problems'>Make Special</button>");
// add button to solutions section
$("#result").append("<button id='button-result'>Make Special</button>");



// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add a click listener to the problems button
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

// add a click listener to the result button
$("#button-result").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#result").toggleClass("special");
});












// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  
  // let's get this party started
  main();
  