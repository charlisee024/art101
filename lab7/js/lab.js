// Lab 7: Functions
// Author: Charlise Gonzales
// Date: 05/04/25


// Constants

// Functions

function sortUserName() {
    // Prompt the user for their name
    var userName = window.prompt("What is your name so I can fix it?");
    console.log("userName =", userName);

    // Convert the name to an array, sort it, then join it back into a string
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort Array

    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
        // Return the sorted name
    return nameSorted;
}

//output
document.writeln("Your sorted name is: ", sortUserName(), "</br>");
