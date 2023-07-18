/*
    Task 1: 
    - Implement a Child class that extends the Parent.
    - Add a constructor to the Child class can calls super().
    - Implement a new function addNewAbilities(newAbility) in the Child class where the new ability will be added to the Parent's #abilities array.     
*/

// Answer to Question 4

class Parent{
    abilities = []

    constructor(){
        this.abilities.push("Parenting");
        this.abilities.push("Role modeling");
    }

    showAbilities(){
        console.log("These are the abilities:")
        for(const a of this.abilities){
            console.log(a);
        }
    }
 
    
}

const p = new Parent();
p.showAbilities(); // Observe that this function prints "Parenting" and "Role modeling".

class Child extends Parent{
    constructor(){
        super();
    }

    addNewAbility(newAbility){
        this.abilities.push(newAbility);
        p.abilities.push(newAbility)
    }
}

const c = new Child();
c.addNewAbility("Dancing");
c.showAbilities();
p.showAbilities();




