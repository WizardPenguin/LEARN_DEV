console.log("program to remove all occurences of element in array");

arr = [1,2,3,4,5,6,2,3];

console.log("original array:", arr);

function removeElement(array, element) {
    for(let i=0;i<array.length;i += 1){
        if(array[i] == element){
            array.splice(i,1);
            i -= 1;
        }
    }
}

removeElement(arr,2);

console.log("array after removing element :", arr);

console.log("program to find no of digits in number");

num = 1234567890;

console.log("number is:", num);

function countDigits(number) {
    let count = 0;
    while(number != 0){
        number = Math.floor(number / 10);
        count += 1;
    }
    return count;
}

let digitCount = countDigits(num);

console.log("no of digits in number is :", digitCount);

console.log("program to find sum of digits in number");

num2 = 12345;

console.log("number is :", num2);

function sumOfDigit(number) {
    let sum = 0;
    while(number != 0){
        sum += number % 10;
        number = Math.floor(number/10);
    }
    return sum;
}

let digitSum = sumOfDigit(num2);

console.log("sum of digits in number is :", digitSum);

console.log("Program to find factorial of number");

factNum = 5;

console.log("number is :", factNum);

function factorial(number){
    let fact = 1;
    while(number > 0){
        fact *= number;
        number -= 1;
    }
    return fact;
}

let factResult = factorial(factNum);

console.log("factorail of number is :", factResult);
