// part one 
// 1. Print numbers from 1 to 10
// answer
for (let x = 1; x <= 10; x++) {
    document.write(x, "<br>")
}
// 2. Print the odd numbers less than 100
// answer
for (let i = 1; i < 100; i++) {
    if (i % 2 == 1) {
        document.write("<br>", i, "<br>")
    }

}
// 3. Print the multiplication table with 7
// answer
for (let y = 1; y <= 10; y++) {
    let m = y * 7;
    document.write("<br>", m, "<br>")
}
//4. Print all the multiplication tables with numbers from 1 to 10

//5. Calculate the sum of numbers from 1 to 10
// answer
let numbrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = numbrs.reduce((a, b) => {
    return a + b;

})
// 6.  Calculate 10!
// answer one
let num = 10; let char = "!";
let concat = num + char;
document.write(concat);

// 7. Calculate the sum of even numbers greater than 10 and less than 30
// answer
for (let z = 11; z <= 30; z++) {
    if (z % 2 == 0) {
        document.write("<br>", z, "<br>")
    }

}
// 8 . Create a function that will convert from Celsius to Fahrenheit
// answer 
let fun = function (f) {
    return f * 1.8 + 32;

}
let res = fun(40);
document.write("<br>", res, "<br>")


// 9.Create a function that will convert from Fahrenheit to
//Celsius
// answer 


function convert(c) {
    return (c - 32) / 18;


}
let answer = convert(96);
document.write(answer);

//. 10. Calculate the sum of numbers in an array of numbers;
// answer 
function f() {
    let arr = [1, 2, 3, 4, 5, , 6, 7, 8];
    let sum = arr.reduce((s, c) => {
        return s + c;

    })
    document.write("<br>", sum);
}
f();

// 11. Calculate the average of the numbers in an array of numbers
// answer 
let average = 0;

function ave() {
    let arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    let sumaverage = arr2.reduce((a, b) => {
        return a + b / average;

    })
    document.write("<br>", sumaverage, "<br>");

}
ave();
// 12. Create a function that receives an array of numbers as argument and returns an
//array containing only the positive numbers
// answer 

// 13.Find the maximum number in an array of numbers
// answer   
let arr3 = [1, 2, 3, 4, 5];
let maxvalue = arr3.reduce((a, b) => {
    if (a > b) {
        return a

    }
    else if (a < b) {
        return b;
    }
})
document.write(maxvalue);
// 14.  Print the first 10 Fibonacci numbers without recursion
let first = 0;
document.write(first);
let second = 1;
document.write(second);
for (let x = 2; x <= 10; x++) {
    let thrid = first + second;
    document.write(thrid, "<br>")
    first = second;
    second = thrid;
}
//15. Create a function that will find the nth Fibonacci number using recursion

// 16.Create a function that will return a Boolean specifying if a number is prime
// answer 











