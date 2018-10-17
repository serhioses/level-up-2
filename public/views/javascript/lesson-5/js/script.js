'use strict';

// function printName (name, times) {
//   if (!times || typeof times !== 'number') {
//     return;
//   }

//   if (!name) {
//     name = 'Anonymous';
//   }

//   for (let i = 0; i < times; i += 1) {
//     console.log(i + 1 + '. ' + name);
//   }

//   return true;
// }
// printName('Vasya', 5);

// function checkPermission () {
//   let isAdmin = confirm('Are you an administrator?');

//   if (!isAdmin) {
//     return false;
//   }

//   let answer = prompt('Enter secret phrase.', '');

//   if (answer !== 'Soup') {
//     return false;
//   }

//   return true;
// }
// console.log(checkPermission());

// function name, function call





// function expression
// var printName = function (name) {
//   return 'Hello ' + name;
// };
// console.log(printName('Aragorn'));

// differences
// console.log(sum(5, 12));
// function sum (a, b) {
//   return a + b;
// }

// var sum = function (a, b) {
//   return a + b;
// };

// conditional declaration (use strict)

// let isLoggedIn = true;

// if (isLoggedIn) {
//   function saySomething () {
//     console.log('Hi there!');
//   }
// } else {
//   function saySomething () {
//     console.log('Log in to have an access.');
//   }
// }
// saySomething();

// let isLoggedIn = true;
// let saySomething;

// if (isLoggedIn) {
//   saySomething = function () {
//     console.log('Hi there!');
//   };
// } else {
//   saySomething = function () {
//     console.log('Log in to have an access.');
//   };
// }
// saySomething();

// anonymous function
// function request (url, onSuccess, onError) {
//   // request to url...
//   let response = prompt('Response', '');

//   if (response === 'OK') {
//     onSuccess(response);
//   } else {
//     onError(null);
//   }
// }

// function onSuccess (response) {
//   console.log('Success!', response);
// }
// function onError (err) {
//   console.log('Error!', err);
// }
// // request('https://webpage.com', onSuccess, onError);
// request(
//   'https://webpage.com',
//   function (response) {
//     console.log('Success!', response);
//   },
//   function (err) {
//     console.log('Error!', err);
//   }
// );

// anonymous self invoking functions
// (function (){
//   console.log('Anonymous self invoking function');
// }());

// new Function
// let sayHi = new Function('name', 'return "Hello " + name');
// console.log(sayHi('Legolas'));


// recursion
// function pow (x, n) {
//   debugger;
//   return n > 1 ? x * pow(x, n - 1) : x;
// }

// iterative recursion
// function pow (x, n) {
//   function iteration (x, n, acc) {
//     // if (n > 1) {
//     //   return iteration(x, n - 1, acc * x);
//     // } else {
//     //   return acc;
//     // }
//     return n > 1 ? iteration(x, n - 1, acc * x) : acc;
//   }

//   return iteration(x, n, x);
// }

// context, stack


// Named function expression

// function func (arg) {
//   return arg;
// }
// let func = function funcName (arg) {
//   funcName = null;
//   return arg;
// }
// console.log(funcName);

// function pow (x, n) {
//   return n > 1 ? x * pow(x, n - 1) : x;
// }
// let power = function pow (x, n) {
//   return n > 1 ? x * pow(x, n - 1) : x;
// }

// // let powCopy = pow;
// let powCopy = power;
// // pow = null;
// power = null;
// powCopy(2, 2);


// properties and methods
// null and undefined have nothing

// property
// let string = 'A very important text';
// console.log(string.length);
// console.log('la la la'.length);

// method (function)
// let string = 'DO NOT TYPE CAPS!!!';
// console.log(string.toLowerCase());
// console.log('DO NOT type CAPS!!!'.toLowerCase());

// let num = 54.4533545454;
// console.log(num.toFixed(3));
// console.log(10.4564564.toFixed(3));
// console.log(10..toString(2));
// console.log(10 .toString(2));

// Numbers
// declaration
// let num1 = 10;
// let num2 = 10.54554;
// let num3 = 0x100;
// let num4 = 5e3;
// let num5 = 5e-3;

// Infinity
// console.log(10 / 0);
// console.log(10e500);

// NaN
// console.log(0 / 0);
// console.log(NaN === NaN);
// console.log(NaN !== NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(NaN));

// isFinite(n) NaN/Infinity/-Infinity
// console.log(isFinite(NaN));
// console.log(isFinite(-54));
// console.log(isFinite(null));

// converting to number (math transformations)
// console.log(+'16');
// console.log(+'164l');
// console.log(+' 164 ');
// console.log(+'\n 164 \r');
// console.log(Number('11'));
// console.log(Number('11 \t'));
// console.log(Number('11u'));

// parseInt(s, radix), parseFloat(s)
console.log(parseInt('15', 10));
console.log(parseInt('-15', 10));
console.log(parseInt('15.54654', 10));
console.log(parseInt('15.54654dfjsdkjf', 10));
console.log(parseInt('skdjf54', 10));
console.log(parseInt('0111', 2));
console.log(parseInt('A0', 16));

console.log(parseFloat('15D'));
console.log(parseFloat('15.5454'));
console.log(parseFloat('-0.6565'));

// parseFloat vs parseInt
// console.log(parseInt(true, 10), parseFloat(true));
// console.log(parseInt(false, 10), parseFloat(false));
// console.log(parseInt(null, 10), parseFloat(null));
// console.log(parseInt(undefined, 10), parseFloat(undefined));
// console.log(parseInt('', 10), parseFloat(''));
// console.log(parseInt(Infinity, 10), parseFloat(Infinity));

// toString(radix)
console.log(15 .toString(2));

// toFixed(precision)
// let n = 4.846869;
// let precision = 4;
// console.log(Math.round(n * Math.pow(10, precision)) / Math.pow(10, precision));
// console.log(n.toFixed(precision)); // string
// console.log(1.1.toFixed(8));

// inaccurate calculations
// console.log(0.6 + 0.3 === 0.9);
// console.log(0.6 + 0.3);

// Math floor, ceil, round, cos, sin, atan, log, sqrt, pow, abs, max, min, random

// formatting
// console.log(4654654 .toLocaleString());
