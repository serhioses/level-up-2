'use strict';

// function makeCounter (initialValue) {
//   var currentCount = initialValue || 0;

//   function counter (val, action) {
//     if (action === '-') {
//       currentCount -= val || 1;
//     } else {
//       currentCount += val || 1;
//     }

//     return currentCount;
//   }

//   counter.get = function () {
//     return currentCount;
//   };
//   counter.set = function (val) {
//     currentCount = val;
//   };
//   counter.reset = function () {
//     currentCount = initialValue || 0;
//   }

//   return counter;
// }

// var counter1 = makeCounter(10);
// console.log(counter1.get());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1(null, '-'));
// console.log(counter1(4, '-'));
// counter1.set(40);
// console.log(counter1.get());
// counter1.reset();
// console.log(counter1.get());

// var counter2 = makeCounter();
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// console.log(counter1.get(), counter2.get());

// Modules

// ;(function () {
//   var myVar1 = '...';
//   var myVar2 = '.......';

//   var myModule = {};

//   myModule.method1 = function (param) {
//     // code goes here
//   };

//   myModule.method2 = function (param) {
//     // code goes here
//   };

//   // and so on...

//   window.myModule = myModule;
// }());


// Object methods and this
// var photograph = {
//   name: 'Photo 1',
//   width: 1024,
//   height: 768,
//   boom: function () {
//     console.log('BOOM!!!');
//   }
// };


// var photograph = {
//   name: 'Photo 1',
//   width: 1024,
//   height: 768
// };
// photograph.boom = function () {
//   console.log('BOOM!!!');
// };


// // rename, copy to another variable
// var photograph = {
//   name: 'Photo 1',
//   width: 1024,
//   height: 768,
//   getProportion: function () {
//     return photograph.width / photograph.height;
//   },
//   getOrientation: function () {
//     return photograph.width > photograph.height ? 'landscape' : photograph.height > photograph.width ? 'portrait' : 'square';
//   }
// };

// var photograph {
//   name: 'Photo 1',
//   width: 1024,
//   height: 768,
//   getProportion: function () {
//     return this.width / this.height;
//   },
//   getOrientation: function () {
//     return this.width > this.height ? 'landscape' : this.height > this.width ? 'portrait' : 'square';
//   }
// };

// function getProportion () {
//   return this.width / this.height;
// }

// var photograph = {
//   width: 1024,
//   height: 768
// };
// var photograph2 = {
//   width: 640,
//   height: 480
// };

// photograph.getProp = getProportion;
// photograph.getProp();
// photograph['getProp']();

// photograph2.getProp = getProportion;
// photograph2.getProp();
// photograph2['getProp']();

// call without a context (with "use strict" and without it)
// function example () {
//   console.log(this);
// }
// example();
