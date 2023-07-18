/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

// Answer to Question 1

let x = 17
let y = 26
let z = "not a number"
console.log(x,y)

function swap(x, y){
    if(!isNaN(x && y)){
        temp = x
        x = y
        y = temp;
        console.log(x,y);
    } else {
        return -1;
    }

}

swap(x, y);

module.exports = swap;

// I added variable "z" to help me test whether the function will return me a -1 for non-numeric value when coded with console.log(swap (x, z));

console.log(swap (x, z));



