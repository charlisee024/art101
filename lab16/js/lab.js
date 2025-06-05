// index.js - purpose and description here
// Author: Charlise Gonzales
// Date: 6/5/25


$.ajax({
    url: "https://api.codetabs.com/v1/proxy?quest=https://xkcd.com/info.0.json",
    type: "GET",
    dataType: "json",
    success: function (comicObj) {
        console.log("API success:", comicObj);

        const title = $("<h3>").text(comicObj.title);
        const image = $("<img>")
            .attr("src", comicObj.img)
            .attr("alt", comicObj.alt)
            .attr("title", comicObj.alt)
            .css("max-width", "100%");
        const caption = $("<p>").text(comicObj.alt);

        $("#output").append(title, image, caption);
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.error("API call failed:", textStatus, errorThrown);
        $("#output").text("An error occurred while fetching the comic.");
    }
});



// Constants

// Functions

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
  