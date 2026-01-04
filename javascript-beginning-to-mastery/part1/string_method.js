// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = " Raman ";

console.log(firstName.length);
// they gives new string, doesn't modifies original.
firstName = firstName.trim(); // "raman"
console.log(firstName)
console.log(firstName.length);
firstName = firstName.toUpperCase();
firstName = firstName.toLowerCase();
console.log(firstName);

// start index 
// end index

let newString = firstName.slice(1); // aman, take slice from index 1 to end
// we can also provide end index
// works like [startindex, endindex)
console.log(newString);