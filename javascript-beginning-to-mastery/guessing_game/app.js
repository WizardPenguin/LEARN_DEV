const max = prompt("Enter the maximum number for the guessing game:");
if (!max || isNaN(max)) {
  alert("Please enter a valid number.");
  throw new Error("Invalid maximum number.");
}

const targetNum = Math.floor(Math.random()*Number(max)) + 1;
let guess = prompt("Enter your first guess:");
let attempts = 1;

while(Number(guess) !== targetNum) {
    if(guess === 'q') break;
    attempts++;
    if(Number(guess) < targetNum) {
        guess = prompt("Too low! Try again:");
    }
    else {
        guess = prompt("Too high! Try again:");
    }
}

console.log(`You got it! The number was ${targetNum}. It took you ${attempts} guesses.`);