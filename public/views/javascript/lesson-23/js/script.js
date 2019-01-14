'use strict';

// function SpeedDetector (container, className, minSpeed, callbacks) {
//   this.container = container;
//   this.className = className;
//   this.minSpeed = minSpeed || SpeedDetector.MIN_SPEED;
//   this.callbacks = callbacks;

//   this.timerId = null;
//   this.active = null;
//   this.speed = 0;

//   this.onMouseMove = this.onMouseMove.bind(this);
//   this.onMouseOver = this.onMouseOver.bind(this);
//   this.onMouseOut = this.onMouseOut.bind(this);

//   return this;
// }
// SpeedDetector.prototype.onMouseMove = function (e) {
//   this.currentX = e.pageX;
//   this.currentY = e.pageY;
// };
// SpeedDetector.prototype.onMouseOver = function (e) {
//   if (this.active) {
//     return;
//   }

//   let target = e.target.closest('.' + this.className);

//   if (!target) {
//     return;
//   }

//   console.log('over');

//   this.active = target;

//   this.startX = e.pageX;
//   this.startY = e.pageY;

//   this.timerId = setInterval(() => {
//     console.log('interval');
//     this.calcSpeed();
//   }, 300);

//   document.addEventListener('mousemove', this.onMouseMove, false);
// };
// SpeedDetector.prototype.onMouseOut = function (e) {
//   if (!this.active) {
//     return;
//   }

//   let relatedTarget = e.relatedTarget;

//   if (relatedTarget) {
//     if (e.relatedTarget.closest('.' + this.className)) {
//       return;
//     }
//   }
//   console.log('out');

//   clearInterval(this.timerId);

//   this.timerId = null;
//   this.active = null;

//   this.callbacks.onOut();

//   document.removeEventListener('mousemove', this.onMouseMove);
// };
// SpeedDetector.prototype.calcSpeed = function () {
//   const distance = SpeedDetector.getDistance(this.currentX, this.startX, this.currentY, this.startY);

//   this.speed = distance / 300 * 1000;

//   if (this.speed > this.minSpeed) {
//     this.startX = this.currentX;
//     this.startY = this.currentY;
//   } else {
//     clearInterval(this.timerId);

//     this.timerId = null;

//     this.callbacks.onSpeedMore({ top: this.currentY, left: this.currentX });
//   }
// };

// SpeedDetector.prototype.setDetection = function () {
//   document.addEventListener('mouseover', this.onMouseOver, false);
//   document.addEventListener('mouseout', this.onMouseOut, false);
// };
// SpeedDetector.getDistance = function (x1, x2, y1, y2) {
//   return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// };
// SpeedDetector.MIN_SPEED = 100;

// function Tooltip (container, className, message) {
//   this.container = container;
//   this.className = className;
//   this.message = message;

//   this.follow = this.follow.bind(this);

//   return this;
// }
// Tooltip.prototype.show = function (coords) {
//   const tooltip = document.createElement('div');

//   tooltip.className = 'tooltip';
//   tooltip.textContent = this.message;

//   this.coords = coords;

//   tooltip.style.top = this.coords.top + 10 + 'px';
//   tooltip.style.left = this.coords.left + 10 + 'px';

//   this.tooltip = tooltip;

//   document.body.appendChild(tooltip);

//   document.addEventListener('mousemove', this.follow, false);
// };
// Tooltip.prototype.hide = function () {
//   this.tooltip && this.tooltip.remove();

//   this.tooltip = null;

//   document.removeEventListener('mousemove', this.follow);
// };
// Tooltip.prototype.follow = function (e) {
//   this.coords.top = e.pageY;
//   this.coords.left = e.pageX;

//   this.tooltip.style.top = this.coords.top + 10 + 'px';
//   this.tooltip.style.left = this.coords.left + 10 + 'px';
// };
// Tooltip.prototype.setDetection = function () {
//   this.speedDetector = new SpeedDetector(this.container, this.className, 50, {
//     onSpeedMore: this.show.bind(this),
//     onOut: this.hide.bind(this),
//   });

//   this.speedDetector.setDetection();
// };

// Array.prototype.forEach.call(document.querySelectorAll('.speed-detector'), function (item, idx) {
//   const tooltip = new Tooltip(item, 'speed-detector-' + (idx + 1), item.dataset.tooltip);

//   tooltip.setDetection();
// });

// browser default actions
// event.preventDefault() -> cannot be cancelled
// document.querySelector('a').addEventListener('click', function (e) {
//   e.preventDefault();

//   console.log('the click event has been intercepted');
// }, false);

// document.querySelector('form').addEventListener('submit', function (e) {
//   e.preventDefault();
// }, false);

// document.querySelector('input').addEventListener('mousedown', function (e) {
//   e.preventDefault();
// }, false);
// document.querySelector('input').addEventListener('focus', function (e) {
//   console.log('cannot be fired');
// }, false);

// defaultPrevented
// document.querySelector('.shell--1').addEventListener('click', function (e) {
//   console.log('shell--1');
// }, false);
// document.querySelector('.shell--4').addEventListener('click', function (e) {
//   console.log('shell--4');
// }, false);

// wrong
// document.querySelector('.shell--1').addEventListener('click', function (e) {
//   console.log('shell--1');
// }, false);
// document.querySelector('.shell--4').addEventListener('click', function (e) {
//   e.stopPropagation();
//   console.log('shell--4', 'propagation is stopped');
// }, false);

// document.querySelector('.shell--1').addEventListener('click', function (e) {
//   if (e.defaultPrevented) {
//     console.log('Skip this');
//     return;
//   }
//   console.log('shell--1');
// }, false);
// document.querySelector('.shell--4').addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('shell--4');
// }, false);

// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault();
// }, false);


// Mouse events
// simple events - mousedown, mouseup, mouseover, mouseout, mousemove, mouseenter, mouseleave
// complex events - click, contextmenu, dblclick

// Modifiers shift, alt, ctrl, meta
// document.getElementById('button').addEventListener('click', function (e) {
//   console.log('shift key: ', e.shiftKey);
//   console.log('alt key: ', e.altKey);
//   console.log('ctrl/cmd key: ', e.ctrlKey || e.metaKey);
// }, false);

// Cursor coords
// document.addEventListener('click', function (e) {
//   // window coords
//   console.log('window x:', e.clientX);
//   console.log('window y:', e.clientY);

//   // page coords
//   console.log('page x:', e.pageX);
//   console.log('page y:', e.pageY);
// }, false);


// Mouse movement
// e.target, e.relatedTarget
// e.relatedTarget can be null
// let counter = 0;
// function handler (e) {
//   if (e.type === 'mouseout') {
//     console.clear();
//   }
//   console.log('event type:', e.type);

//   if (e.type === 'mouseover') {
//     console.log('came to (target):', e.target);
//     console.log('left from (relatedTarget):', e.relatedTarget);
//   } else {
//     console.log('left from (target):', e.target);
//     console.log('came to (relatedTarget):', e.relatedTarget);
//   }
// }
// document.addEventListener('mouseover', handler, false);
// document.addEventListener('mouseout', handler, false);

// Array.prototype.forEach.call(document.querySelectorAll('li'), function (item) {
//   item.addEventListener('mouseover', handler, false);
//   item.addEventListener('mouseout', handler, false);
// });

// let moveCounter = 0;
// let overCounter = 0;
// document.querySelector('.line').addEventListener('mousemove', function (e) {
//   moveCounter += 1;
//   console.log('mousemove fired:', moveCounter);
// }, false);
// document.addEventListener('mouseover', function (e) {
//   console.clear();
//   overCounter += 1;
//   console.log('MOUSEOVER FIRED:', overCounter);
// }, false);

// mouseenter, mouseleave (no bubbling)
// function handler (e) {
//   console.log(e.type, e.target);
// }
// Array.prototype.forEach.call(document.querySelectorAll('li'), function (item) {
//   item.addEventListener('mouseenter', handler, false);
//   item.addEventListener('mouseleave', handler, false);
// });

// Event delegation
// const grid = document.querySelector('.grid');

// wrong
// grid.addEventListener('mouseover', function (e) {
//   e.target.style.backgroundColor = 'salmon';
// }, false);
// grid.addEventListener('mouseout', function (e) {
//   e.target.style.backgroundColor = '';
// }, false);

// wrong
// Array.prototype.forEach.call(grid.querySelectorAll('.grid__item'), function (item) {
//   item.addEventListener('mouseenter', function (e) {
//     e.target.style.backgroundColor = 'salmon';
//   }, false);
//   item.addEventListener('mouseleave', function (e) {
//     e.target.style.backgroundColor = '';
//   }, false);
// });

// right (delegation)
// let currentItem = null;
// grid.addEventListener('mouseover', function (e) {
//   if (currentItem) {
//     return;
//   }

//   // let target = e.target;

//   // while (target !== grid) {
//   //   if (target.className === 'grid__item') {
//   //     break;
//   //   }

//   //   target = target.parentNode;
//   // }

//   // if (target === grid) {
//   //   return;
//   // }

//   let target = e.target.closest('.grid__item');

//   if (!target) {
//     return;
//   }

//   console.log('mouseover');

//   currentItem = target;
//   currentItem.style.backgroundColor = 'salmon';
// }, false);

// grid.addEventListener('mouseout', function (e) {
//   if (!currentItem) {
//     return;
//   }

//   // let target = e.relatedTarget;

//   // if (target) {
//   //   while (target) {
//   //     if (target === currentItem) {
//   //       return;
//   //     }

//   //     target = target.parentNode;
//   //   }
//   // }

//   let target = e.relatedTarget;

//   if (target) {
//     if (target.closest('.grid__item') === currentItem) {
//       return;
//     }
//   }

//   console.log('mouseout');

//   currentItem.style.backgroundColor = '';
//   currentItem = null;
// }, false);


// Scroll (doesn't bubble)
// window.addEventListener('scroll', function (e) {
//   console.log('scroll top:', window.pageYOffset);
// }, false);

// document.querySelector('.scroll').addEventListener('scroll', function (e) {
//   console.log(e.target);
//   console.log('scroll top:', e.target.scrollTop);
// }, false);

// let imagesToLoad = Array.prototype.slice.call(document.querySelectorAll('[realsrc]'));

// function handleLoad () {
//   if (!imagesToLoad.length) {
//     return;
//   }

//   imagesToLoad.forEach(function (img) {
//     const coords = img.getBoundingClientRect();

//     if (coords.top <= document.documentElement.clientHeight && coords.bottom >= 0) {
//       img.setAttribute('src', img.getAttribute('realsrc'));
//       img.loaded = true;
//     }
//   });

//   imagesToLoad = imagesToLoad.filter(function (img) {
//     return !img.loaded;
//   });

//   console.log(imagesToLoad.length);
// }
// handleLoad();
// window.addEventListener('scroll', handleLoad);


// Keyboard
// keydown, keyup, keypress
// const area = document.getElementById('keyboard-area');
// area.addEventListener('keydown', function (e) {
//   console.log(e.type);
//   console.log(e.keyCode);
//   console.log(e.shiftKey);
// }, false);
// area.addEventListener('keyup', function (e) {
//   console.log(e.type);
//   console.log(e.keyCode);
//   console.log(e.shiftKey);
// }, false);

// function getChar (e) {
//   if (e.which === null || e.which === undefined) {
//     if (e.keyCode < 32) {
//       return null;
//     }

//     return String.fromCharCode(e.keyCode);
//   } else if (e.which !== 0 && e.charCode !== 0) {
//     if (e.which < 32) {
//       return null;
//     }

//     return String.fromCharCode(e.which);
//   }

//   return null;
// }
// document.addEventListener('keypress', function (e) {
//   console.log(e);
// }, false);

// keydown, keypress work with an old value
// Don't use for inputs


// Load events
// document.addEventListener('DOMContentLoaded', function () {
//   console.log('DOMContentLoaded');
//   console.log(document.getElementById('img').width);
// });
// window.addEventListener('load', function () {
//   console.log('load');
//   console.log(document.getElementById('img').width);
// });
// window.onbeforeunload = function () {
//   return 'Are you sure you want to leave the page?';
// };

// (function () {
//   const script = document.createElement('script');
//   script.src = 'js/load.js';
//   script.async = true;
//   script.defer = true;

//   script.addEventListener('load', function () {
//     console.log('script loaded');
//   });
//   script.addEventListener('error', function (e) {
//     console.log('script error');
//   });

//   document.body.appendChild(script);
// }());
// (function () {
//   const link = document.createElement('link');
//   link.href = 'css/load.css';
//   link.rel = 'stylesheet'; // must have

//   link.addEventListener('load', function () {
//     console.log('stylesheet loaded');
//   });
//   link.addEventListener('error', function (e) {
//     console.log('stylesheet error');
//   });

//   document.body.appendChild(link);
// }());

// (function () {
//   const img = new Image();
//   img.src = 'https://lonelyplanetwpnews.imgix.net/2018/02/1st-Max-Rive-8396.jpg';

//   img.addEventListener('load', function () {
//     console.log('image loaded');
//     document.body.appendChild(this);
//   });
//   img.addEventListener('error', function (e) {
//     console.log('img error');
//   });
// }());

// focus/blur
// document.getElementById('name').addEventListener('focus', function (e) {
//   console.log(e.type);
// }, false);
// document.getElementById('name').addEventListener('blur', function (e) {
//   console.log(e.type);
// }, false);
// document.querySelector('[tabindex="0"]').addEventListener('focus', function (e) {
//   console.log('div:', e.type);
// }, false);
// document.querySelector('[tabindex="0"]').addEventListener('blur', function (e) {
//   console.log('div:', e.type);
// }, false);

// function validateName (field, errElement) {
//   const val = field.value;

//   if (!val.length) {
//     errElement.textContent = 'Name field cannot be empty';
//     errElement.classList.add('form-error--visible');
//     field.classList.add('error');

//     return false;
//   }
//   if (val.length > 12) {
//     errElement.textContent = 'Your name is too long';
//     errElement.classList.add('form-error--visible');
//     field.classList.add('error');

//     return false;
//   }

//   return true;
// }

// document.getElementById('name').addEventListener('focus', function (e) {
//   this.classList.remove('error');
//   this.nextElementSibling.classList.remove('form-error--visible');
//   this.nextElementSibling.textContent = '';
//   // this.blur();
// }, false);
// document.getElementById('name').addEventListener('blur', function (e) {
//   const errElement = this.nextElementSibling;

//   validateName(this, errElement);
// }, false);
// document.forms[0].addEventListener('submit', function (e) {
//   const nameField = this.querySelector('#name');
//   const errElement = nameField.nextElementSibling;

//   e.preventDefault();

//   if (!validateName(nameField, errElement)) {
    
//     nameField.focus();
//   } else {
//     this.submit();
//   }
// });

// document.addEventListener('focus', function (e) {
//   console.log(e.type, e.target);
// }, true);
// document.addEventListener('blur', function (e) {
//   console.log(e.type, e.target);
// }, true);


// submit event
// document.addEventListener('submit', function (e) {
//   e.preventDefault();

//   console.log(e.target);
// });
// document.querySelector('.button').addEventListener('click', function (e) {
//   e.preventDefault();

//   console.log(e.target);
// });


// change event
// document.getElementById('name').addEventListener('change', function (e) {
//   console.log(e.target, e.type);
// }, false);
// document.addEventListener('change', function (e) {
//   console.log(e.target, e.type);
// }, false);


// input event
// document.addEventListener('input', function (e) {
//   e.target.nextElementSibling.textContent = e.target.value;
//   e.target.nextElementSibling.classList.add('form-error--visible');
// }, false);

// function PressSpeed (input) {
//   this.start = null;
//   this.input = input;

//   this.onFocus = this.onFocus.bind(this);
//   this.onBlur = this.onBlur.bind(this);
//   this.onInput = this.onInput.bind(this);

//   this.input.addEventListener('focus', this.onFocus);
//   this.input.addEventListener('blur', this.onBlur);
//   this.input.addEventListener('input', this.onInput);

//   return this;
// }
// PressSpeed.prototype.onFocus = function (e) {
//   this.start = Date.now();
// };
// PressSpeed.prototype.calcSpeed = function (val) {
//   const charsLength = val.length;

//   console.log((charsLength - 1) / ((Date.now() - this.start) / (1000)));
// };
// PressSpeed.prototype.onBlur = function (e) {
//   this.start = null;
//   this.input.value = '';
//   console.clear();
// };
// PressSpeed.prototype.onInput = function (e) {
//   this.calcSpeed(e.target.value);
// };

// const pressSpeed = new PressSpeed(document.getElementById('name'));
// document.getElementById('name').addEventListener('paste', function (e) {
//   e.preventDefault();
// });

// document.addEventListener('copy', function (e) {
//   e.preventDefault();
// }, false);
// document.addEventListener('paste', function (e) {
//   e.preventDefault();
// }, false);
// document.addEventListener('cut', function (e) {
//   e.preventDefault();
// }, false);

// document.addEventListener('input', function (e) {
//   console.log(e.target.value);
// }, false);

// function delegate (selector, cb) {
//   return function (e) {
//     let target = e.target.closest(selector);

//     if (!target) {
//       return;
//     }

//     cb.call(this, e);
//   };
// }

// function copyToClipboard (str) {
//   let textarea = document.createElement('textarea');
//   textarea.value = str;

//   document.body.append(textarea);

//   textarea.select();
//   document.execCommand('copy');

//   textarea.remove();
// }

// function handleClick (e) {
//   copyToClipboard(document.getElementById('name').value);
// }
// document.addEventListener('click', delegate('[type="button"]', handleClick), false);
