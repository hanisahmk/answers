/*
    Task 1:
    - Add a new property "breed" with the value "Poodle"

    Task 2: 
    - Implement a for-in to loop through the keys in "dog" object and print it with console.log()
*/

// Answer to Question 3

const dog = {
    petName:"Bobby"
}

console.log(dog)

// Task 1: Add code here

dog.breed = "Poodle"

console.log(dog)

// Task 2: Add code here

for (const key in dog) {
    console.log(`${key}: ${dog[key]}`);
}
