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
