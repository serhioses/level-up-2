'use strict';

// JS, BOM, DOM -> window

// BOM - browser object model
// console.log(window.navigator); // browser, OS
// console.log(navigator);
// console.log(window.location); // url
// console.log(window.history);
// console.log(window.screen);
// console.log(new XMLHttpRequest());
// alert, confirm, propmpt

// DOM - document object model
// console.log(document);
// console.dir(document);

// var paragraph = document.createElement('p');
// paragraph.innerHTML = 'Hello you';
// document.body.appendChild(paragraph);
// document.body.style.backgroundColor = 'seagreen';

// DOM - a representation of a document as a tree of objects available for change through JS.

// Elements, text, comments, document. Total 12 types
// console.log(Node.prototype);

// var _0x6f09=["\x6E\x6F\x64\x65\x4E\x61\x6D\x65","\x3A","\x6C\x6F\x67","\x66\x69\x72\x73\x74\x43\x68\x69\x6C\x64","\x6E\x65\x78\x74\x53\x69\x62\x6C\x69\x6E\x67"];function walkTheDOM(_0x5337x2){while(_0x5337x2){console[_0x6f09[2]](_0x5337x2[_0x6f09[0]]+ _0x6f09[1],_0x5337x2);if(_0x5337x2[_0x6f09[3]]){walkTheDOM(_0x5337x2[_0x6f09[3]])};_0x5337x2= _0x5337x2[_0x6f09[4]]}}walkTheDOM(document);

// We don't have to rely on HTML formatting


// working in the console


// DOM navigation (readonly)
// access starts from document element
// can be null. In DOM if not found - null, not "undefined"

// var html = document.documentElement;
// var body = document.body;
// var head = document.head;

// console.log(html.tagName);
// console.log(body.tagName);
// console.log(head.tagName);


// Child nodes (elements), nested nodes (elements)

// childNodes
// function printChildNodes () {
//   for (let i = 0; i < document.body.childNodes.length; i += 1) {
//     console.log(document.body.childNodes[i].nodeName, document.body.childNodes[i]);
//   }
// }
// printChildNodes();

// firstChild, lastChild
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.firstChild === document.body.childNodes[0]);
// console.log(document.body.lastChild === document.body.childNodes[document.body.childNodes.length - 1]);


// previousSibling, nextSibling
// console.log(document.body.firstChild.nextSibling);
// console.log(document.body.lastChild.previousSibling);
// console.log(document.body.lastChild.nextSibling);
// console.log(document.body.childNodes[3]);
// console.log(document.body.childNodes[3].firstChild.nextSibling);

// parentNode
// console.log(document.body.parentNode.nodeName);
// console.log(document.body.firstChild.parentNode);

// html collections are not arrays!
// console.log(document.body.childNodes);
// var names = Array.prototype.reduce.call(document.body.childNodes, function (acc, next) {
//   return acc + next.nodeName + '-';
// }, '');
// console.log(names);


// Only elements navigation
// children
// console.log(document.body.children);
// for (let i = 0; i < document.body.children.length; i += 1) {
//   console.log('element:', document.body.children[i].tagName);
//   console.log('element:', document.body.children[i]);
// }
// Array.prototype.forEach.call(document.body.children, function (el) {
//   console.log(el);
// });

// firstElementChild, lastElementChild
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(document.body.children[1].children);
// Array.prototype.forEach.call(document.body.children[1].children, function (li) {
//   console.log(li.firstElementChild);
//   console.log(li.lastElementChild);
//   console.log(li.firstElementChild === li.lastElementChild);
// });

// previousElementSibling, nextElementSibling
// console.log(document.body.nextElementSibling);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.lastElementChild.previousElementSibling);


// special links for tables

// var table = document.body.children[2];
// console.log('table:', table);
// console.log('caption:', table.caption);
// // capital H
// console.log('thead:', table.tHead);
// console.log('tfoot:', table.tFoot);
// console.log('tbodies:', table.tBodies);
// console.log('all rows:', table.rows);
// console.log('all rows length:', table.rows.length);

// console.log('thead rows:', table.tHead.rows);
// console.log('tfoot rows:', table.tFoot.rows);
// console.log('tbody 0 rows:', table.tBodies[0].rows);
// console.log('tbody 1 rows:', table.tBodies[1].rows);

// console.log('tr cells:', table.tFoot.rows[0].cells);
// console.log('tr section row index:', table.tBodies[0].rows[1].sectionRowIndex);
// console.log('tr row index:', table.tBodies[0].rows[1].rowIndex);

// console.log('tr cell index:', table.tHead.rows[0].cells[2].cellIndex);


// walkTheDOM function. firstChild are nextSibling is enough, recursion, loop


// search inside DOM
// document.getElementById(id), id should be unique
// console.log(document.getElementById('container'));
// console.dir(document.getElementById('container'));
// console.log(window.container);

// getElementsByTagName(tagName);
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByTagName('p'));
// console.log(document.getElementsByTagName('script'));

// var listItems = document.getElementsByTagName('li');
// Array.prototype.forEach.call(listItems, function (li) {
//   console.log(li);
// });

// document.getElementsByName
// console.log(document.getElementsByName('color'));

// getElementsByClassName(className)
// var cards = document.getElementsByClassName('card');
// console.log(cards);

// querySelectorAll(cssSelector) - returns a collection of elements that match selector
// var cards = document.querySelectorAll('.card');

// console.log(document.querySelectorAll('.container'));
// console.log(cards);

// Array.prototype.forEach.call(cards, function (card) {
//   console.log(card);
//   console.log(card.querySelectorAll('div > p'));
// });

// document.querySelectorAll(':hover')


// querySelector(cssSelector) - returns only one first element if any
// console.log(document.querySelector('.card'));


// matches(css) - is elements matches selector
// console.log(document.querySelector('.card').matches('div'));
// console.log(document.querySelector('.card').matches('.card'));
// console.log(document.querySelector('.card').matches('.card_'));
// wrong -> error
// console.log(document.querySelectorAll('.card').matches('.card_'));
// var divs = document.getElementsByTagName('div');
// Array.prototype.forEach.call(divs, function (div) {
//   if (div.matches('.card')) {
//     console.log(div);
//   }
// });


// closest(css) - from the current element check whether a current element matches selector and if so return it and stop. So only one element can be found. If not found - null.
// var paragraphs = document.getElementsByTagName('p');
// Array.prototype.forEach.call(paragraphs, function (p) {
//   if (p.closest('.card')) {
//     console.log(p);
//   }
// });


// type, tag, content
// Node -> text
// Node -> Element -> HTMLElement -> anyElement
// Node -> Element -> SVGElement
// Node -> Comment

// console.log(String(document.body));
// console.log(String(document.querySelector('div')));

// console.dir vs console.log


// IDL(Interface Definition Language) - used for elements properties and elements methods


// nodeType
// console.log(Node.prototype);
// console.log(Node.prototype.ELEMENT_NODE);
// console.log(Node.prototype.TEXT_NODE);

// var childNodes = document.body.childNodes;

// for (let i = 0; i < childNodes.length; i += 1) {
//   if (childNodes[i].nodeType === Node.ELEMENT_NODE) {
//     console.log(childNodes[i]);
//   }
// }


// nodeName and tagName
// nodeName is present in all nodes, tagName is present only on elements
// tag name is always in uppercase INPUT

// console.log(document.body.nodeName);
// console.log(document.body.tagName);

// console.log(document.nodeName);
// console.log(document.tagName);


// innerHTML - html content of an element represented as a string
// console.log(document.body.innerHTML);

// var list = document.getElementById('list');
// console.log(list.innerHTML);
// console.log(typeof list.innerHTML);
// list.innerHTML = '';
// list.innerHTML = '<li><span>New list item from JS</span></li>';

// += overrides html
// innerHTML for tables on IE not working, TD and TH are exceptions
// scripts are non executable


// outerHTML
// var list = document.getElementById('list');
// console.log(list.outerHTML);
// console.log(list.innerHTML);

// unexpected behavior
// list.outerHTML = '<div>New HTML</div>';
// console.log(list.outerHTML);


// nodeValue/data - text node content
// var text = document.body.childNodes[0];
// console.log(text);
// console.log(text.data);
// text.data = 'New text';

// nodeValue - the same, but where is no data, nodeValue is equal to null


// textContent - only text inside an element, skips all HTML
// var list = document.getElementById('list');
// console.log(list.textContent);

// list.textContent = '<li>New text content</li>';
// Array.prototype.forEach.call(list.children, function (li, i) {
//   li.textContent = 'New text content ' + i;
// });


// hidden property


// specific properties
// var specific = document.getElementById('specific');
// var input = specific.querySelector('input');
// var anchor = specific.querySelector('a');
// var paragraph = specific.querySelector('p');

// console.log(input.type);
// console.log(input.name);
// console.log(input.value);

// console.log(anchor.href);

// console.log(paragraph.className);


// How to know properties
// console.dir(input);
// console.dir(anchor);
// console.dir(p);

// Polifills
// general purpose
// null vs undefined is important
// if (document.documentElement.nextElementSibling === undefined) {
//   Object.defineProperty(Element.ptototype, 'nextElementSibling', {
//     get: function () {
//       let next = this.nextSibling;

//       do {
//         if (next.nodeType === Node.ELEMENT_NODE) {
//           return next;
//         }

//         next = next.nextSibling;
//       } while (next);

//       return null;
//     }
//   });
// }
// if (document.documentElement.nextElementSiblingCopy === undefined) {
//   Object.defineProperty(Element.prototype, 'nextElementSiblingCopy', {
//     get: function () {
//       let next = this.nextSibling;

//       do {
//         if (next.nodeType === Node.ELEMENT_NODE) {
//           return next;
//         }

//         next = next.nextSibling;
//       } while (next);

//       return null;
//     }
//   });
// }

// console.log(document.getElementById('first-child').nextElementSibling);
// console.log(document.getElementById('first-child').nextElementSiblingCopy);

// property we are checking must exist


// extending native DON classes
// add to all
// Element.prototype.cut = function (maxLength) {
//   if (this.textContent.length > maxLength && maxLength > 3) {
//     this.textContent = this.textContent.slice(0, maxLength - 3) + '...';
//   }
// };

// document.getElementById('cut').cut(10);

// Object.defineProperty(Element.prototype, 'extremeChildren', {
//   get: function () {
//     return [this.firstElementChild, this.lastElementChild];
//   }
// });
// console.log(document.getElementById('extreme').extremeChildren);

// HTMLInputElement.prototype.setPlaceholderToValue = function () {
//   this.value = this.placeholder;
// };
// document.getElementById('name').setPlaceholderToValue();

// HTMLInputElement.prototype.valueToCodes = function () {
//   return Array.prototype.map.call(this.value, function (char) {
//     return char.charCodeAt(0);
//   });
// };
// console.log(document.getElementById('email').valueToCodes());


// Attributes and properties
// our properties
// const example = document.getElementById('example');
// example.extraData = {
//   name: 'example',
//   shape: 'circle',
//   speed: 184,
//   nums: [1, 2, 3],
//   saySomething: function () {
//     console.log('Hi there');
//   }
// };
// console.dir(example);
// console.log(example.extraData.shape);
// console.log(example.extraData.nums);
// example.extraData.saySomething();
// no influence on the view


// Attributes
// element.attributes
// element.hasAttribute(name)
// element.getAttribute(name)
// element.setAttribute(name)
// element.removeAttribute(name)

// An attribute is always a string, case insensitive, visible in html
// const address = document.getElementById('address');
// console.log(address.attributes);
// Array.prototype.forEach.call(address.attributes, function (attr) {
//   console.log(attr.name + ' =', attr.value);
// });
// console.log(address.getAttribute('description'));
// address.setAttribute('time', new Date());
// console.log(address.getAttribute('time'));
// console.log(address.getAttribute('tIMe'));
// address.removeAttribute('description');
// console.log(address.getAttribute('description'));

// console.log(address.getAttribute('name'));
// address.setAttribute('name', 'new_address');
// console.log(address.getAttribute('name'));
// address.removeAttribute('name');
// console.log(address.getAttribute('name'));

// address.setAttribute('value', 'New value from JS');
// console.log(address.time);
// console.log(address.getAttribute('time'));


// Use cases for attributes
// DOM props and HTML attributes are not always the same
// when creating DOM a browser creates props for all standard attributes
// const link = document.getElementById('link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// const checkbox = document.getElementById('checkbox');
// console.log(checkbox.getAttribute('checked'));
// console.log(checkbox.checked);
// checkbox.removeAttribute('checked');
// checkbox.checked = false;

// const input = document.getElementById('input');
// input.value = 'New input value';
// console.log(input.value, input.getAttribute('value'));
