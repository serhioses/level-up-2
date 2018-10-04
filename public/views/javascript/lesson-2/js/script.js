'use strict';

var a = 2;
var b = 4;

var c = (b += 5) - a++ * b - 3 + (b -= 3 + 1 - --a);
console.log(b);
