// while loop in array 
const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];
let i = 0;
while(i<fruits.length){
    fruits2.push(fruits[i]);
    i++;
}
console.log(fruits2);

// comparing two arrays
if(fruits == fruits2){
    console.log("same");
}
else{
    console.log("not same");
}