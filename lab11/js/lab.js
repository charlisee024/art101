// 
// 
 //lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

//Requirements: jQuery must be loaded for this script to work.
// Author: Charlise Gonzales
// Date: 5/19/25






// Constants

// Functions

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  }


  // click listener for button
$("#submit").click(function(){
    const userName = $("#user-name").val();

// now let's sort it
    const userNameSorted = sortString(userName);

// append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
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
  