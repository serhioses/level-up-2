'use strict';

// Events
// what is an event
// mouse, form, keyboard, document, css

// handlers

// attribute approach

// onclick property
// const email = document.getElementById('email');

// email.onchange = function () {
//   console.log(email.value);
// };

// access this
// const message = document.getElementById('message');

// message.oninput = function () {
//   console.log(this.value.toUpperCase());
// };

// setTimeout(function () {
//   // remove handler
//   message.oninput = null;
// }, 2000);

// why not to use attribute approach and property approach (multiple listeners)


// the right approach
// element.addEventListener(eventName, handler[, phase])
// const address = document.getElementById('address');

// address.addEventListener('input', function () {
//   console.log('uppercase:', this.value.toUpperCase());
// });
// address.addEventListener('input', function () {
//   console.log('code:', this.value.charCodeAt([this.value.length - 1]));
// });

// element.removeEventListener(eventName, handler)
// function makeCounter () {
//   let count = 0;

//   function counter () {
//     count += 1;
//   };
//   counter.get = function () {
//     return count;
//   };

//   return counter;
// }
// const counterButton = document.getElementById('counter');
// const counter = makeCounter();

// function changeValue () {
//   counter();
//   this.innerHTML = 'Current count is ' + counter.get();
// }
// function changeBorder () {
//   if (counter.get() % 2) {
//     counterButton.style.border = '4px solid red';
//   } else {
//     counterButton.style.border = '4px solid yellow';
//   }
// }

// counterButton.addEventListener('click', function () {
//   counter();
//   this.innerHTML = 'Current count is ' + counter.get();
// }, false);
// counterButton.addEventListener('click', function () {
//   if (counter.get() % 2) {
//     counterButton.style.border = '4px solid red';
//   } else {
//     counterButton.style.border = '4px solid yellow';
//   }
// }, false);

// counterButton.addEventListener('click', changeValue, false);
// counterButton.addEventListener('click', changeBorder, false);

// setTimeout(function () {
//   counterButton.removeEventListener('click', changeBorder);

//   setTimeout(function () {
//     counterButton.removeEventListener('click', changeValue);
//   }, 2000);
// }, 5000);


// The order of event firing
// const eventsOrder = document.getElementById('events-order');
// let counter = 0;

// eventsOrder.addEventListener('mousedown', function (e) {
//   console.log(counter += 1, e.type);
// }, false);
// eventsOrder.addEventListener('mouseup', function (e) {
//   console.log(counter += 1, e.type);
// }, false);
// eventsOrder.addEventListener('click', function (e) {
//   console.log(counter += 1, e.type);
// }, false);

// nested events (IE)
// const nested = document.getElementById('nested');
// const text = document.getElementById('text');

// nested.addEventListener('click', function () {
//   text.value = 'start click';

//   text.focus();

//   text.value += ' end click';
// }, false);
// text.addEventListener('focus', function () {
//   text.value += ' focus event';
// });


// Async event
// const nested = document.getElementById('nested');
// const text = document.getElementById('text');

// nested.addEventListener('click', function () {
//   text.value = 'start click';

//   setTimeout(function () {
//     text.focus();
//   }, 4);

//   for (let i = 0; i < 100000000; i += 1) {
//     i /= 1e000;
//   }

//   text.value += ' end click';
// }, false);
// text.addEventListener('focus', function () {
//   text.value += ' focus event';
// });


// Event object
// document.getElementById('event-object').addEventListener('click', function (e) {
//   console.log(e);
//   console.log('event name/type:', e.type);
//   console.log('event target:', e.target);
//   console.log('event current target:', e.currentTarget);
//   console.log('event page X coord.:', e.pageX);
//   console.log('event page Y coord.:', e.pageY);
//   console.log('event client X coord.:', e.clientX);
//   console.log('event client Y coord.:', e.clientY);
//   console.log('event bubbles:', e.bubbles);
// });

// document.addEventListener('click', function (e) {
//   if (e.target.closest('#event-object')) {
//     console.log(e);
//     console.log('event name/type:', e.type);
//     console.log('event target:', e.target);
//     console.log('event current target:', e.currentTarget);
//     console.log('event page X coord.:', e.pageX);
//     console.log('event page Y coord.:', e.pageY);
//     console.log('event client X coord.:', e.clientX);
//     console.log('event client Y coord.:', e.clientY);
//     console.log('event bubbles:', e.bubbles);
//   }
// });


// Bubbling and capturing
// bubbling
// document.querySelector('.shell--1').addEventListener('click', function (e) {
//   console.log('where from:', e.target);
//   console.log('current target:', e.currentTarget);
// }, false);
// function handler (e) {
//   console.log('target:', e.target.tagName);
//   console.log('currentTarget:', e.currentTarget.tagName);
//   console.log('this:', this.tagName);
// }
// document.querySelector('.shell--1').addEventListener('click', handler, false);
// document.querySelector('.shell--2').addEventListener('click', handler, false);
// document.querySelector('.shell--3').addEventListener('click', handler, false);
// document.querySelector('.shell--4').addEventListener('click', handler, false);

// this === e.currentTarget (exceptions)


// cancel bubbling
// function handler (e) {
//   console.log(e.target.tagName);
//   console.log(this.tagName);
// }
// function cancelBubbling (e) {
//   e.stopPropagation();
//   console.log(e.target.tagName);
//   console.log(this.tagName);
// }
// document.querySelector('.shell--1').addEventListener('click', handler, false);
// document.querySelector('.shell--2').addEventListener('click', handler, false);
// document.querySelector('.shell--2').addEventListener('click', cancelBubbling, false);
// document.querySelector('.shell--3').addEventListener('click', handler, false);
// document.querySelector('.shell--4').addEventListener('click', handler, false);
// document.querySelector('.shell--4').addEventListener('click', cancelBubbling, false);


// capturing
// 1. capturing phase - an event goes down to an element
// 2. target phase - the event reaches the target element
// 3. bubbling phase - the event goes up from the element
// function handler (e) {
//   // console.log(e.target.tagName);
//   console.log(this.className);
//   console.log(e.eventPhase);
// }
// document.querySelector('.shell--1').addEventListener('click', handler, true);
// document.querySelector('.shell--2').addEventListener('click', handler, false);
// document.querySelector('.shell--3').addEventListener('click', handler, false);
// document.querySelector('.shell--4').addEventListener('click', handler, false);
// document.querySelector('.shell--1').addEventListener('click', handler, true);
// document.querySelector('.shell--2').addEventListener('click', handler, true);
// document.querySelector('.shell--3').addEventListener('click', handler, true);
// document.querySelector('.shell--4').addEventListener('click', handler, true);


// Event delegation 
// wrong event listening

// (function () {
//   let active;

//   Array.prototype.forEach.call(document.querySelectorAll('button'), function (btn) {
//     btn.addEventListener('click', function (e) {
//       if (e.target.tagName.toLowerCase() !== 'button') {
//         return;
//       }

//       if (active) {
//         active.classList.remove('active');
//       }

//       active = e.target;
//       active.classList.add('active');
//     }, false);
//   });
// }());

// (function () {
//   let active;

//   Array.prototype.forEach.call(document.querySelectorAll('button'), function (btn) {
//     btn.addEventListener('click', function (e) {
//       let target = e.target;

//       while (target !== e.currentTarget) {
//         if (target.tagName.toLowerCase() === 'button') {
//           break;
//         }

//         target = target.parentNode;
//       }

//       if (target !== e.currentTarget) {
//         return;
//       }

//       if (active) {
//         active.classList.remove('active');
//       }

//       active = target;
//       active.classList.add('active');
//     }, false);
//   });
// }());

// (function () {
//   let active;

//   Array.prototype.forEach.call(document.querySelectorAll('button'), function (btn) {
//     btn.addEventListener('click', function (e) {
//       let target = e.target.closest('button');

//       if (!target) {
//         return;
//       }

//       if (active) {
//         active.classList.remove('active');
//       }

//       active = target;
//       active.classList.add('active');
//     }, false);
//   });
// }());

// (function () {
//   let active;
  
//   document.addEventListener('click', function (e) {
//     let target = e.target.closest('button');

//     if (!target) {
//       return;
//     }

//     if (active) {
//       active.classList.remove('active');
//     }

//     active = target;
//     active.classList.add('active');
//   }, false);
// }());

// function Accordion (container) {
//   this.container = container;

//   this.activeElement = null;
//   this.activeTrigger = null;

//   this.toggle = this.toggle.bind(this);
// }
// Accordion.prototype.toggle = function (e) {
//   let target = e.target.closest('.accordion-item__trigger');

//   if (!target) {
//     return;
//   }

//   if (this.activeElement) {
//     this.activeElement.classList.remove('active');
//     this.activeTrigger.textContent = '+';
//   }

//   this.activeTrigger = target;
//   this.activeElement = this.activeTrigger.closest('.accordion-item');

//   this.activeElement.classList.add('active');
//   this.activeTrigger.textContent = '-';
// };
// Accordion.prototype.setClick = function () {
//   // document.addEventListener('click', this.toggle, false);
//   this.container.addEventListener('click', this.toggle, false);
// };

// const accordion = new Accordion(document.querySelector('.accordion'));
// accordion.setClick();


function SpeedDetector (container, className, minSpeed, callbacks) {
  this.container = container;
  this.className = className;
  this.minSpeed = minSpeed || SpeedDetector.MIN_SPEED;
  this.callbacks = callbacks;

  this.timerId = null;
  this.active = null;
  this.speed = 0;

  this.onMouseMove = this.onMouseMove.bind(this);
  this.onMouseOver = this.onMouseOver.bind(this);
  this.onMouseOut = this.onMouseOut.bind(this);

  return this;
}
SpeedDetector.prototype.onMouseMove = function (e) {
  this.currentX = e.pageX;
  this.currentY = e.pageY;
};
SpeedDetector.prototype.onMouseOver = function (e) {
  if (this.active) {
    return;
  }

  let target = e.target.closest('.' + this.className);

  if (!target) {
    return;
  }

  console.log('over');

  this.active = target;

  this.startX = e.pageX;
  this.startY = e.pageY;

  this.timerId = setInterval(() => {
    console.log('interval');
    this.calcSpeed();
  }, 300);

  document.addEventListener('mousemove', this.onMouseMove, false);
};
SpeedDetector.prototype.onMouseOut = function (e) {
  if (!this.active) {
    return;
  }

  let relatedTarget = e.relatedTarget;

  if (relatedTarget) {
    if (e.relatedTarget.closest('.' + this.className)) {
      return;
    }
  }
  console.log('out');

  clearInterval(this.timerId);

  this.timerId = null;
  this.active = null;

  this.callbacks.onOut();

  document.removeEventListener('mousemove', this.onMouseMove);
};
SpeedDetector.prototype.calcSpeed = function () {
  const distance = SpeedDetector.getDistance(this.currentX, this.startX, this.currentY, this.startY);

  this.speed = distance / 300 * 1000;

  if (this.speed > this.minSpeed) {
    this.startX = this.currentX;
    this.startY = this.currentY;
  } else {
    clearInterval(this.timerId);

    this.timerId = null;

    this.callbacks.onSpeedMore({ top: this.currentY, left: this.currentX });
  }
};

SpeedDetector.prototype.setDetection = function () {
  document.addEventListener('mouseover', this.onMouseOver, false);
  document.addEventListener('mouseout', this.onMouseOut, false);
};
SpeedDetector.getDistance = function (x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
SpeedDetector.MIN_SPEED = 100;

function Tooltip (container, className, message) {
  this.container = container;
  this.className = className;
  this.message = message;

  this.follow = this.follow.bind(this);

  return this;
}
Tooltip.prototype.show = function (coords) {
  const tooltip = document.createElement('div');

  tooltip.className = 'tooltip';
  tooltip.textContent = this.message;

  this.coords = coords;

  tooltip.style.top = this.coords.top + 10 + 'px';
  tooltip.style.left = this.coords.left + 10 + 'px';

  this.tooltip = tooltip;

  document.body.appendChild(tooltip);

  document.addEventListener('mousemove', this.follow, false);
};
Tooltip.prototype.hide = function () {
  this.tooltip && this.tooltip.remove();

  this.tooltip = null;

  document.removeEventListener('mousemove', this.follow);
};
Tooltip.prototype.follow = function (e) {
  this.coords.top = e.pageY;
  this.coords.left = e.pageX;

  this.tooltip.style.top = this.coords.top + 10 + 'px';
  this.tooltip.style.left = this.coords.left + 10 + 'px';
};
Tooltip.prototype.setDetection = function () {
  this.speedDetector = new SpeedDetector(this.container, this.className, 50, {
    onSpeedMore: this.show.bind(this),
    onOut: this.hide.bind(this),
  });

  this.speedDetector.setDetection();
};

Array.prototype.forEach.call(document.querySelectorAll('.speed-detector'), function (item, idx) {
  const tooltip = new Tooltip(item, 'speed-detector-' + (idx + 1), item.dataset.tooltip);

  tooltip.setDetection();
});


// Design pattern "Behavior"
// document.addEventListener('click', function (e) {
//   let target = e.target.closest('[data-toggle]');

//   if (!target) {
//     return;
//   }

//   const el = document.getElementById(target.dataset.toggle);

//   el.hidden = !el.hidden;
// }, false);


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
//   console.log('shell--4');
// }, false);

// document.querySelector('.shell--1').addEventListener('click', function (e) {
//   if (e.defaultPrevented) {
//     return;
//   }
//   console.log('shell--1');
// }, false);
// document.querySelector('.shell--4').addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('shell--4');
// }, false);
