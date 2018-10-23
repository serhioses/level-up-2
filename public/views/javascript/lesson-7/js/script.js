'use strict';

// slicing a substring
// substring(start, [, end]) - from start till the end, but not including the end
// a negative value becomes 0
// var str = 'Just a string';
// console.log(str.substring(0));
// console.log(str.substring(0, 4));
// console.log(str.substring(-1));
// console.log(str.substring(4, 0));
// console.log(str.substring(-4, 0));

// substr(start, [, length])
// var str = 'Just a string';
// console.log(str.substr(0));
// console.log(str.substr(0, 4));
// console.log(str.substr(-1));
// console.log(str.substr(6, 0));
// console.log(str.substr(-4, 0));
// console.log(str.substr(-4, -2));
// console.log(str.substr(-4, 2));

// slice(start, [, end]) - from start till the end, but not including the end
// var str = 'Just a string';
// console.log(str.slice(0));
// console.log(str.slice(0, 4));
// console.log(str.slice(-1));
// console.log(str.slice(-4));
// console.log(str.slice(4, 0));
// console.log(str.slice(-4, 0));
// console.log(str.slice(-4, -2));
// console.log(str.slice(-4, -6));

// string comparison
// var str1 = 'Some long string';
// var str2 = 'W';
// console.log(str1 > str2);
// function compareStrings (str1, str2) {
//   let len = Math.max(str1.length, str2.length);
//   let sum1 = 0;
//   let sum2 = 0;

//   for (let i = 0; i < len; i += 1) {
//     console.log(str1[i] + ' -> ' + str1.charAt(i).charCodeAt(0));
//     console.log(str2[i] + ' -> ' + str2.charAt(i).charCodeAt(0));

//     sum1 += str1.charAt(i).charCodeAt(0) || 0;
//     sum2 += str2.charAt(i).charCodeAt(0) || 0;
//   }

//   console.log(sum1, sum2);
//   console.log(str1 > str2);
// }
// compareStrings('Some long string', 'Some short');

// String.fromCharCode(code)
// console.log(String.fromCharCode(148));
// console.log(String.fromCharCode(1048));
// console.log(String.fromCharCode(2011));
// console.log(String.fromCharCode(5484));
// console.log(String.fromCharCode(9742));
// console.log(String.fromCharCode(15474));

// local comparison
// console.log('Ё' > 'А');
// console.log('Ё'.charCodeAt(0));
// console.log('А'.charCodeAt(0));
// 0 - if equal, 1 if str1 > str2, -1 if str2 > str1
// console.log('Ё'.localeCompare('А'));


// Objects (hashes)
// var obj = {
//   key: value,
//   key: value
// };

// object creation
// let obj = new Object(5);
// let obj2 = {};
// console.log(obj);

// working with hashes
// let book = {};

// book.name = '1984';
// book.author = 'George Orwell';
// book.pages = 300;
// book.cover = 'Hard';
// book.price = 240;
// book.hasIllustrations = true;

// let key = 'pages';

// console.log(book);

// console.log(book.name);
// console.log(book['author']);
// console.log(book[key]);
// console.log(book.key);

// delete book.price;
// console.log(book.price);
// console.log('price' in book);
// difference between undefined and in operator

// let book = {
//   name: '1984',
//   pages: 300,
//   cover: 'Hard',
//   price: 240,
//   hasIllustrations: true,
//   author: {
//     name: 'George Orwell',
//     dob: 'Jun 25 1903'
//   },
//   'stringProp': 1,
//   'string with any characters // +-0-09': 'anything',
//   'даже на русском': 'тут тоже можно'
// };
// console.log(book);
// console.log(book['string with any characters // +-0-09']);
// console.log(book['даже на русском']);
// console.log(book.author);
// console.dir(book);

// for in loop
// let book = {
//   name: '1984',
//   pages: 300,
//   cover: 'Hard',
//   price: 240,
//   hasIllustrations: true,
//   author: {
//     name: 'George Orwell',
//     dob: 'Jun 25 1903',
//     size: {
//       w: 10,
//       h: 11,
//       sdfl: 13
//     }
//   }
// };

// for (let key in book) {
//   console.log(key);
//   console.log(book[key]);
// }

// task
// function countObjKeys (obj, deep) {
  
// }
// console.log(countObjKeys(book));
// props order (convention)


// objects cloning
// let cat = {
//   name: 'Barsik',
//   age: 2
// };

// function cloneObj (source) {
//   let result = {};

//   for (let key in source) {
//     result[key] = source[key];
//   }

//   return result;
// }
// let cat2 = cloneObj(cat);
// console.log(cat2);
// console.log(cat2 === cat);

// ADDITIONAL TASKS
// Reverse the given string
(function () {
  function funcName (param) {
    // code...
  }
  funcName('Some string'); // -> 'gnirts emoS'
}());

// Compare two objects
// This function must return true if two objects refer to the same object or they refer to different objects but have the same keys number and their corresponding values are equal. The function must work with unlimited nestend objects. You can use "book" object with different set of properties to test.
(function () {
  function funcName (param1, param2) {
    // code...
  }
  funcName(
    { key: 'Value' },
    { key: 'Value' }
  ); // -> true
  funcName(
    { key: 'Value' },
    { key: 'Value 1' }
  ); // -> false
  funcName(
    { key: 'Value', nested: { key: 'Value' } },
    { key: 'Value', nested: { key: 'Value' } }
  ); // -> true
  funcName(
    { key: 'Value', nested: { key: 'Value' } },
    { key: 'Value 1', nested: { key: 'Value' } }
  ); // -> false
}());

// Draw an area
// Draw an area N wide and N height like it the example below. Use ' @ ' and ' - '.
(function () {
  function funcName (N) {
    // code...
  }
  funcName(8); // -> http://prntscr.com/jpobhn
}());

// Strings comparison
// Check whether two strings have the same set of chars. Return true if they are equal length and have the same set of chars no matter at which index those chars are
(function () {
  function funcName (param1, param2) {
    // code...
  }
  funcName('clock', 'lockc'); // -> true. Because two "c", one "l", one "o" and one "k". Doesn't matter they are at different positions
  funcName('tree', 'three'); // -> false. Different lenghts
  funcName('mttudd', 'dutmtd'); // -> true. Because two "t", two "d", one "m" and one "u". Doesn't matter they are at different positions
}());
