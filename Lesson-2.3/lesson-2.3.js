// Number
// Bigint
// String
// Boolean
// Undefined
// Null
// Symbol
// Object

const age = 27;
console.log(typeof age);
const bigInt = 1256325698564n;
console.log(typeof bigInt);
const firstName = 'Name';
console.log(typeof firstName);

let age2;
console.log(age2);

const obj = {
    name: 'George',
    age: 27,
    isWorked: true
}


const num = 11
const num2 = 5

console.log(num + num2)
console.log(num - num2)
console.log(num * num2)
console.log(num / num2)
console.log(num % num2)

let titleProject = 'Оценка стоимости';
let screensValue = 'шаблонные, с уникальным дизайном, с анимациями';
let screenPrice = 25000;
let percentage = 5;
let fullPrice = 120000;
let responsive = true;

console.log(titleProject);
console.log(screensValue);
console.log(screenPrice);
console.log(percentage);
console.log(fullPrice);
console.log(responsive);
console.log('Profit - ', fullPrice - (screenPrice + screenPrice * percentage / 100))