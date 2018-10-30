// 'use strict';

// array sort
// let nums = [5, 1, 7, 12, 9, 4, 2];
// nums.sort();
// console.log(nums);

// a compare b > 0 -> b, a; a compare b < 0 -> a, b; a compare b === 0 -> stay the same
// function sortNumsASC (a, b) {
//   return a - b;
// }
// nums.sort(sortNumsASC);
// console.log(nums);

// function sortNumsDESC (a, b) {
//   return b - a;
// }
// nums.sort(sortNumsDESC);
// console.log(nums);

// let strings = ['Apple', 'Orange', 'Banana', 'Lemon'];
// // strings.sort();
// // console.log(strings);
// strings.sort(function (a, b) {
//   return b > a ? 1 : b < a ? -1 : 0;
// });
// console.log(strings);

// const users = [
//   {
//     name: 'Aragorn',
//     age: 120
//   },
//   {
//     name: 'Arven',
//     age: 340
//   },
//   {
//     name: 'Elrond',
//     age: 2800
//   },
//   {
//     name: 'Gendolf',
//     age: 2350
//   }
// ];

// function sortByField (arr, field, dir) {
//   arr.sort(function (a, b) {
//     if (dir === 'DESC') {
//       return a[field] > b[field] ? -1 : a[field] < b[field] ? 1 : 0;
//     }

//     return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;

//     // return a[field] - b[field];
//   });
// }
// sortByField(users, 'age');
// sortByField(users, 'name', 'DESC');
// console.log(users);
