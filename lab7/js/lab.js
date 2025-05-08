// Lab 7: Functions and Arrays
// Author: Charlise Gonzales
// Date: 05/04/25

function squareTen(x){
    var results = (x * x) + 10;
    return results;
}

//test thefunction
console.log("What is 20 squared plus ten?", squareTen(20));
console.log("What is 5 squared plus ten?", squareTen(5));

coolArray = [3, 4, 5, 6, 9, 12, 20]
console.log("My Cool Array: ", coolArray);

var result = coolArray.map(squareTen);
//should return [19, 26, 35, 46, 82, 154, 410]
console.log("Test of squareTen of array:" , result);

var result = coolArray.map(function(x) {
    return result (x + 3 * 1111);
})

//should return [3336, 3337, 3338, 3339, 3342, 3345, 3353]
console.log("Array plus 3 times 1111: ", results);
 















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
