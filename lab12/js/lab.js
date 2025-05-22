// index.js - purpose and description here
// Author: Charlise Gonzales
// Date: 5/22/25





// Constants

// Functions

function sortingHat(str) {
    let length = str.length;
    let mod = length % 4;

// return a house depending on the mod result
    if (mod === 0) {
        return "Gryffindor";
    } else if (mod === 1) {
        return "Ravenclaw";
    } else if (mod === 2) {
        return "Hufflepuff";
    } else if (mod === 3) {
        return "Slytherin";
    }
}

// main function to run when page is ready
function main() {
    console.log("Main function started.");
    // click listener for button
    $("#button").click(function() {
        let name = $("#input").val();
        let house = sortingHat(name);
        $("#output").append(
            <p>The Sorting Hat has sorted you into <strong>${house}</strong>!</p>
        );
    });
}

main();
