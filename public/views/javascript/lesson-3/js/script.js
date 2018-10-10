'use strict';

// // if always converts to boolean
// let score = 10;
// if (score >= 10) {
//   console.log('You win!');
// }

// // falsy values are false, null, undefined, 0, -0, NaN, ''
// let falsyValue = 0;
// if (falsyValue) {
//   console.log('Never executed.');
// }

// // if else
// let isAdmin = true;
// if (isAdmin) {
//   console.log('You have an access to everything.');
// } else {
//   console.log('Bye bye!');
// }

// // if else if else
// let color = 'red';
// if (color === 'green') {
//   console.log('Ok, you can come in.');
// } else if (color === 'orange') {
//   console.log('I have to check you before you come in.');
// } else if (color === 'red') {
//   console.log('Stop. I cannot pass you.');
// } else {
//   console.log('Plese, specify a color.');
// }

// // when to nest
// var a = 0, b = 1, c = 3;
// if (a === 1) {
//   console.log('a is 1');
// } else {
//   if (b === 2) {
//     console.log('b is 2');
//   } else {
//     if (c === 3) {
//       console.log('c is 3');
//     }
//   }
// }

// // ternary ?
// let isHomeworkDone = false;
// let message = isHomeworkDone ? 'You can drink the water.' : 'Stop! Don\'t touch the water.';
// console.log(message);

// // multiple ternaries
// let xOWinner = 'D';
// let message = xOWinner === 'X' ? 'The winner is X' : xOWinner === 'O' ? 'The winner is O' : 'Draw';
// console.log(message);



// // logical operators && || ! (&& || return the value iteself)
// console.log(1 || 0);
// console.log(true || false);
// console.log(null || 10);
// console.log(NaN || 'string');

// let a = 10, b = 20;
// if (a > 10 || b < 25) {
//   console.log('message');
// }

// let x;
// true || (x = 5);
// console.log(x);

// let y = (5 && 10);
// console.log(y);

// console.log(1 && 0);
// console.log(true && false);
// console.log(null && 10);
// console.log(NaN && 'string');

// let a = 10, b = 20;
// if (a > 10 && b < 25) {
//   console.log('message');
// }

// // converts to boolean and returns the opposite value
// console.log(!1);
// console.log(!false);
// console.log(!NaN);

// types converting for primitives

// // string
// console.log(String(1));
// console.log(1 .toString());
// console.log(1 + '1');
// console.log('8' + undefined);

// // number (math, different types). Exceptions === !===
// console.log(+'14');
// console.log(Number('8.047'));
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(''));
// console.log(Number('string'));
// console.log(Number(' 10 '));

// // comparison of different types is a numeric convertion
// console.log('' == false);
// console.log('1' == true);
// console.log('' == null);

// // logical convertion
// console.log(Boolean(false));
// console.log(Boolean('0'));
// console.log(Boolean(function () {}));
// console.log(!!1);
// console.log(!!undefined);
// console.log(!![]);
