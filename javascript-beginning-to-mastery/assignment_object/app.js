// generate a random number between 1 and 6

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log("Your roll is: " + rollDice());

// create object representing ar stores, name model, color
// print car's name. 

let car = {
    name : "Toyota",
    model : "Corolla",
    color : "Blue"
}

console.log("name of car :", car.name);

// create person object, (name, age, city)
// edit city's value and change it to new york 
// add a property country and set it United States

let person = {
    name : "raman",
    age : 23,
    city : "los angeles"
}

console.log(person);

person.city = 'New Yors';

console.log(person);

person.country = "United States";

console.log(person);

