/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/

// Answer to Question 2

const patients = [];

console.log(patients)

function addPatient(patientName){
    patients.push(patientName);
}

addPatient("John");
addPatient("Mary");
addPatient("Mark");

console.log(patients)

function listPatient(patients){
    for (var key in patients) {
        var value = patients[key];
    
        console.log(key + ' : ' + value);
    }
}

listPatient(patients)
