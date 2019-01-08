'use strict';

// Styles, getComputedStyle
// style property
// const rect = document.querySelector('.rect');
// // console.log(rect.style);
// rect.style.transform = 'rotateZ(4deg)';
// rect.style.display = 'flex';
// rect.style.alignItems = 'center';
// rect.style.justifyContent = 'center';

// // console.log(rect.style);
// // console.log(rect.style.display);
// // console.log(rect.style.justifyContent);
// // console.log(rect.style.width);
// // console.log(rect.style.backgroundColor);

// rect.style.width = '20rem';
// rect.style.backgroundColor = '#7c3056';
// rect.style.margin = '60px 40px';
// // console.log(rect.style.width);
// // console.log(rect.style.backgroundColor);
// // console.log(rect.style.margin);

// // float -> cssFloat

// // rect.style.backgroundColor = '';
// // rect.style.textTransform = '';

// document.querySelector('button').addEventListener('click', function () {
//   // rect.style.display = 'none';
//   // rect.style.display = 'block';

//   rect.style.display = rect.style.display !== 'none' ? 'none' : '';
// }, false);

// rect.style.width = '20rem';
// rect.setAttribute('style', 'background-color: #8a3d08; opacity: 0.4');
// rect.style.cssText = 'background-color: #8a3d08; opacity: 0.4';

// when to use

// getComputedStyle(element[ ,pseudo])
// const rect = document.querySelector('.rect');
// const computedStyle = getComputedStyle(rect);
// const computedStyle = getComputedStyle(rect, ':before');

// // Array.prototype.forEach.call(computedStyle, function (style) {
// //   console.log(style + ' = ' + computedStyle[style]);
// // });
// console.log(computedStyle.margin);
// console.log(computedStyle.marginTop);
// console.log(computedStyle.marginRight);
// console.log(computedStyle.marginBottom);
// console.log(computedStyle.marginLeft);
// rect.style.width = '50%';
// console.log(computedStyle.width);
// console.log(computedStyle.position);
// console.log(computedStyle.content);

// use only full property name


// Element metrics and scroll
// always number in pixels
// for "invisible" elements 0x0
// const metrics = document.querySelector('.metrics');
// const computedStyle = getComputedStyle(metrics);
// offsetParent
// console.log(metrics.offsetParent);
// offsetTop, offsetLeft
// console.log('top:', metrics.offsetTop);
// console.log('left:', metrics.offsetLeft);

// offsetWidth, offsetHeight
// console.log('full width with the border:', metrics.offsetWidth);
// console.log('full height with the border:', metrics.offsetHeight);

// clientTop, clientLeft
// distance between the outer area and the inner area of an element including scroll bar
// console.log('clientTop:', metrics.clientTop);
// console.log('clientLeft:', metrics.clientLeft);
// console.log(metrics.offsetWidth - metrics.clientLeft - metrics.clientWidth);

// clientWidth, clientHeight
// content size + paddings - scroll bar width (depends on a browser)
// console.log('clientWidth', metrics.clientWidth);
// console.log('clientHeight', metrics.clientHeight);
// console.log('computed width:', computedStyle.width);
// console.log('offset width:', metrics.offsetWidth);
// console.log('client width:', metrics.clientWidth);

// scrollWidth, scrollHeight
// console.log('scroll width:', metrics.scrollWidth);
// console.log('scroll height:', metrics.scrollHeight);

// scrollTop, scrollLeft
// console.log('scroll top:', metrics.scrollTop);
// console.log('scroll left:', metrics.scrollLeft);
// metrics.addEventListener('scroll', function () {
//   console.log('scroll top:', metrics.scrollTop);
// });


// Page metrics
// clientWidth/clientHeight
// console.log('document clientWidth:', document.documentElement.clientWidth);
// console.log('document clientHeight:', document.documentElement.clientHeight);
// console.log('window innerWidth', window.innerWidth);
// console.log('window innerHeight', window.innerHeight);

// document.body.style.height = '1000px';

// console.log('document clientWidth:', document.documentElement.clientWidth);
// console.log('document clientHeight:', document.documentElement.clientHeight);
// console.log('window innerWidth', window.innerWidth);
// console.log('window innerHeight', window.innerHeight);


// width and height with scroll
// function getPageScrollHeight () {
//   return Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight,
//   );
// }

// console.log(getPageScrollHeight());
// document.body.style.height = '1200px';
// console.log(getPageScrollHeight());


// current scroll from the top and form the left
// console.log(window.pageYOffset);
// console.log(window.pageXOffset);

// document.body.style.height = '1000px';

// console.log(window.pageYOffset);
// console.log(window.pageXOffset);

// function getScrollTop () {
//   return window.pageYOffset || document.documentElement.scrollTop;
// }


// to scroll a page with JS DOM tree must be loaded
// scrollTo - to x and y

// function rand (min, max) {
//   return Math.floor(min + Math.random() * (max - min + 1));
// }
// const queue = [];

// function makeLineMaker () {
//   let coord = 0;
//   let left = 20;

//   return function (y) {
//     const line = document.createElement('div');
//     const height = Math.abs(y - coord);

//     line.style.width = '2px';
//     line.style.height = height + 'px';
//     line.style.backgroundColor = y >= coord ? 'red' : 'green';
//     line.style.position = 'absolute';
//     line.style.top = (y >= coord ? coord : y) + 'px';
//     line.style.left = left + 'px';

//     queue.push({
//       top: y >= coord ? coord : y,
//       h: height,
//       left: left
//     });

//     coord = y;
//     left += 20;

//     document.body.appendChild(line);
//   };
// }
// document.body.style.height = '2000px';

// const makeLine = makeLineMaker();

// document.getElementById('scroll-to').addEventListener('click', function () {
//   window.scrollTo(0, rand(100, 400));
//   makeLine(window.pageYOffset);
//   console.log('scrollTop:', window.pageYOffset);
// }, false);

// const c = document.getElementById('circle');

// document.getElementById('play').addEventListener('click', function () {
//   let line = queue.shift();
//   let top = line.top;

//   requestAnimationFrame(function play () {
//     c.style.top = top + 'px';
//     c.style.left = line.left - 4 + 'px';

//     top += 4;

//     if (line) {
//       if (top >= line.h + line.top) {
//         line = queue.shift();
//         if (!line) {
//           document.body.style.height = window.innerHeight + 'px';
//           document.body.style.backgroundImage = 'url("https://www.etonline.com/sites/default/files/styles/640xh/public/images/2014-10/500_TOH_shinning.jpg?itok=UBL-RHRD")';
//           document.body.style.backgroundSize = 'cover';
//           document.body.style.backgroundAttachement = 'fixed';
//           document.body.style.backgroundPosition = 'center';
//           return;
//         }
//         top = line.top;
//       }
//       requestAnimationFrame(play);
//     }
//   });
// }, false);


// scrollBy - scroll form here to x and y
// document.body.style.height = '2000px';

// document.getElementById('scroll-by').addEventListener('click', function () {
//   window.scrollBy(0, 40);
// }, false);


// scrollIntoView - make an element visible
// document.body.style.height = '2000px';
// document.getElementById('scroll-into-view').addEventListener('click', function () {
//   // this.scrollIntoView();
//   this.scrollIntoView(false);
// }, false);


// Coordinates in window
// element.getBoundingClientRect() -> {top, left, bottom, right, width, height}
// const rect = document.querySelector('.rect');
// const coords = rect.getBoundingClientRect();
// console.log(coords);

// document.addEventListener('click', function (e) {
//   const x = e.pageX;
//   const y = e.pageY;

//   rect.style.top = y + 'px';
//   rect.style.left = x + 'px';

//   console.log(rect.getBoundingClientRect());
// }, false);

// elementFromPoint(x,y) -> if negative or out of the window returns null
// document.addEventListener('click', function (e) {
//   console.log(document.elementFromPoint(e.clientX, e.clientY));
// }, false);


// Coordinates in document
// screen coords
// console.log(window.screen.width, window.screen.height);
// console.log(window.screen.availWidth, window.screen.availHeight);
// console.log(window.screenX, window.screenY);

// const rect = document.querySelector('.rect');
// function getCoords (el) {
//   const coordsInWindow = el.getBoundingClientRect();

//   return {
//     top: coordsInWindow.top + window.pageYOffset,
//     left: coordsInWindow.left + window.pageXOffset,
//   };
// }

// console.log(getCoords(rect));
// console.log(rect.getBoundingClientRect());
