// // // // function add(d, f) {
// // // //     let sum = d + f;
// // // //     return sum;
// // // // }
// // // // console.log(add(4, 6));

// // // function checkEvenOrOdd(number){
// // //     if (number % 2===0){
// // //         return "Even";
// // //     }
// // //     else{
// // //         return"Odd";
// // //     }
// // // }
// // // console.log(checkEvenOrOdd(5));
// // // console.log(checkEvenOrOdd(8));


// // let add = function (a, b, c) {
// //     console.log(a + b + c);  // return a+b+c;
// // }
// // add(1, 2, 3)

// // let Add = function (a, b, c) {
// //     return a + b + c;
// // }
// // let AddResult = Add(2, 5, 7);
// // console.log(AddResult);


// // let multiply = (c, d, e) => c * d * e;
// // let multiplyResult = multiply(2, 4, 6);
// // console.log(multiplyResult);

// // const greetSomeone = function (names, hru) {
// //     console.log(hru)
// //     return `Hello ${names}`;
// // }
// // const hru = function () {
// //     return 'I am fine';
// // }
// // let greetSomeoneResult = greetSomeone("shiva,hru");
// // console.log(greetSomeoneResult);

// const add = function (a,b,multiply) {
//     console.log(multiply)
//     return a+b;
// }
//  const multiply=function(c,d){
//     return c*d;
//  }
//  let result=add(2,4, multiply(4,8));
//  console.log(result)

// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0;
//     }
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     return sum / numbers.length;
// }
// const numbers = [10, 20, 30, 40, 50];
// const average = calculateAverage(numbers);
// console.log("Average:", average);

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// const originalString = "hello world";
// const reversedString = reverseString(originalString);
// console.log("Reversed string", reversedString);

// function findMaxValue(numbers) {
//     if (numbers.length === 0) {
//         return undefined;
//     }
//     let max = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i];
//         }
//     }
//     return max;
// }
// const numbers = [10, 5, 20, 40, 30, 4, 8, 2];
// const maxValue = findMaxValue(numbers);
// console.log("Maximun value:", maxValue);

function celsiusToFahrenheit(celcius) {
    const farehinite = (celcius * 9 / 5) + 32;
    return farehinite
}
const celciusTemperature = 40;
const resultFahrenheitTemperature = celsiusToFahrenheit(celciusTemperature);
console.log(resultFahrenheitTemperature);