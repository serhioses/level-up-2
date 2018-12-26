'use strict';

// className
// const address = document.getElementById('address');
// console.log(address.className);
// console.log(address.getAttribute('class'));
// address.className = 'new-classname';
// address.setAttribute('class', 'attribute-classname');
// htmlFor


// classList
// element.classList.add(className)
// element.classList.remove(className)
// element.classList.contains(className)
// element.classList.toggle(className)
// const address = document.getElementById('address');
// console.log(address.classList.add('extra-class'));
// console.log(address.classList.contains('extra-class'));
// console.log(address.classList.remove('extra-class'));
// console.log(address.classList.contains('extra-class'));
// setInterval(function () {
//   address.classList.toggle('extra-class');
//   console.log(address.classList.contains('extra-class'));
// }, 1000);


// data-* attributes, dataset
// const settings = document.getElementById('settings');
// console.log(settings['data-price']);
// console.log(settings.getAttribute('data-price'));
// console.log(settings.dataset.price);
// console.log(settings.dataset.favorite);
// console.log(settings.dataset.oldPrice);
// console.log(settings.dataset.props);
// console.log(JSON.parse(settings.dataset.props));
// settings.dataset.id = 10;
// settings.setAttribute('data-id', 15);
// console.log(settings.dataset);


// contains, compareDocumentPosition
// const container = document.getElementById('container');
// const child = document.getElementById('child');
// console.log(container.contains(child));
// console.log(container.contains(container));

// nodeA.compareDocumentPosition(nodeB);
// 000000 -> 0 -> nodeA === nodeB
// 000001 -> 1 -> different documents
// 000010 -> 2 -> nodeB is before nodeA
// 000100 -> 4 -> nodeA is before nodeB
// 001000 -> 8 -> nodeB contains nodeA
// 010000 -> 16 -> nodeA contains nodeB
// 100000 -> 32 -> for browsers
// const table = document.getElementById('table');
// const thead = table.tHead;
// const row = thead.rows[0];
// const cell = row.cells[0];
// const par = cell.querySelector('p');

// const sentence = document.getElementById('sentence');

// console.log(table.compareDocumentPosition(row)); // 16 + 4
// console.log(row.compareDocumentPosition(table)); // 8 + 2
// console.log(cell.compareDocumentPosition(thead)); // 8 + 2
// console.log(par.compareDocumentPosition(table)); // 8 + 2
// console.log(sentence.compareDocumentPosition(cell)); // 4
// console.log(row.compareDocumentPosition(sentence)); // 2


// Adding and removing DOM nodes

// element creation
// const div = document.createElement('div');
// const textNode = document.createTextNode('Some text');
// console.dir(div);
// console.dir(textNode);

// function showNotification () {
//   const message = prompt('Enter message', '');

//   const notification = document.createElement('div');
//   notification.className = 'notification';
//   const text = document.createTextNode(message);
//   const closeIcon = document.createElement('span');
//   closeIcon.className = 'notification__close';
//   closeIcon.innerHTML = '&times;';

//   notification.appendChild(text);
//   notification.appendChild(closeIcon);

//   document.body.appendChild(notification);

//   void notification.offsetWidth;
//   notification.classList.add('animated');
// }
// showNotification();

// const notifications = document.getElementById('notifications');

// function showNotification () {
//   const message = prompt('Enter message', '');

//   if (!message) {
//     return;
//   }

//   const notification = document.createElement('div');
//   notification.className = 'notification';
//   const text = document.createTextNode(message);
//   const closeIcon = document.createElement('span');
//   closeIcon.className = 'notification__close';
//   closeIcon.innerHTML = '&times;';

//   notification.appendChild(text);
//   notification.appendChild(closeIcon);

//   // notifications.insertBefore(notification, notifications.firstElementChild);
//   notifications.insertBefore(notification, null);

//   return message;
// }
// let result = showNotification();
// let timerId = setTimeout(function tick() {
//   if (result) {
//     result = showNotification();
//     timerId = setTimeout(tick, 3000);
//   }
// }, 3000);
// each method returns added object

// cloneNode
// const clones = document.getElementById('clones');
// const cloneSample = clones.querySelector('.clone');

// let counter = 0;
// let timerId = setTimeout(function tick () {
//   if (counter < 5) {
//     counter += 1;
//     const newClone = cloneSample.cloneNode();
//     clones.insertBefore(newClone, clones.lastElementChild);

//     timerId = setTimeout(tick, 2000);
//   }
// }, 2000);


// removeChild
// const list = document.getElementById('list');
// const span = list.children[1].querySelector('span');
// list.removeChild(list.firstElementChild);
// list.removeChild(list.lastElementChild);
// span.parentNode.parentNode.removeChild(span.parentNode);

// replaceChild
// const list = document.getElementById('list');
// const newLi = document.createElement('li');
// newLi.innerHTML = '<p><span>New list item from JS</span></p>';
// list.replaceChild(newLi, list.children[2]);

// automatic removing
// const fromEl = document.getElementById('from');
// const toEl = document.getElementById('to');
// toEl.appendChild(fromEl.querySelector('p'));
// const clone = fromEl.cloneNode(true);
// toEl.appendChild(clone);

// insertAdjacentHTML
// const list = document.getElementById('list');
// const newItems = `
//   <li>
//     <p>
//       <span>New list item 1</span>
//     </p>
//   </li>
//   <li>
//     <p>
//       <span>New list item 2</span>
//     </p>
//   </li>
//   <li>
//     <p>
//       <span>New list item 3</span>
//     </p>
//   </li>
// `;
// console.log(newItems);
// wrong
// list.insertBefore(newItems, list.children[2]);

// solution 1
// const tempContainer = document.createElement('div');
// tempContainer.innerHTML = newItems;
// wrong way
// Array.prototype.forEach.call(tempContainer.children, function (child) {
//   list.insertBefore(child, list.children[3]);
// });
// wrong order
// while (tempContainer.children.length) {
//   list.insertBefore(tempContainer.firstElementChild, list.children[3]);
// }
// right
// let target = list.children[3];
// while (tempContainer.children.length) {
//   list.insertBefore(tempContainer.firstElementChild, target);
// }

// solution 2
// beforeBegin, afterBegin, beforeEnd, afterEnd
// list.children[2].insertAdjacentHTML('afterEnd', newItems);

// insertAdjacentElement
// const select = document.getElementById('select');
// const fantasyGroup = document.createElement('optgroup');
// fantasyGroup.label = 'Fantasy';

// fantasyGroup.innerHTML = `
//   <option value="4">The Lord of the Rings</option>
//   <option value="5">Warcraft</option>
// `;
// select.insertAdjacentElement('afterBegin', fantasyGroup);
// fantasyGroup.children[0].selected = true;

// insertAdjacentText



// DocumentFragment
// function timingDecorator (func) {
//   return function () {
//     const start = Date.now();

//     const result = func.apply(this, arguments);

//     console.log(Date.now() - start);

//     return result;
//   }
// }

// const xhr = new XMLHttpRequest();
// const table = document.getElementById('table');
// const tbody = table.tBodies[0];
// let items;
// xhr.open('GET', 'https://api.github.com/search/repositories?q=javascript+topic:react');

// function draw () {
//   items = JSON.parse(this.responseText).items;
//   // solution 1
//   // for (let i = 0; i < 100; i += 1) {
//   //   items.forEach(function (item) {
//   //     const newRow = document.createElement('tr');

//   //     newRow.innerHTML = `
//   //       <td>${item.id}</td>
//   //       <td>${item.description}</td>
//   //       <td>
//   //         <a href="${item.ssh_url}">${item.ssh_url}</a>
//   //       </td>
//   //       <td>${item.watchers_count}</td>
//   //     `;

//   //     tbody.appendChild(newRow);
//   //   });
//   // }

//   // solution 2
//   // const fragment = document.createDocumentFragment();

//   // for (let i = 0; i < 100; i += 1) {
//   //   items.forEach(function (item) {
//   //     const newRow = document.createElement('tr');

//   //     newRow.innerHTML = `
//   //       <td>${item.id}</td>
//   //       <td>${item.description}</td>
//   //       <td>
//   //         <a href="${item.ssh_url}">${item.ssh_url}</a>
//   //       </td>
//   //       <td>${item.watchers_count}</td>
//   //     `;

//   //     fragment.appendChild(newRow);
//   //   });
//   // }
//   // tbody.appendChild(fragment);
// }


// xhr.onload = timingDecorator(draw);

// xhr.send();


// new DOM methods
// const container = document.getElementById('container');

// // append
// const par1 = document.getElementById('par-1');
// const par2 = document.getElementById('par-2');
// container.append(par1, par2);

// // prepend
// const par3 = document.getElementById('par-3');
// const par4 = document.getElementById('par-4');
// container.prepend(par3, par4);

// // after
// container.after(par1, par2);

// // before
// container.before(par3, par4);

// // replaceWith
// const replacer1 = document.getElementById('replacer-1');
// const replacer2 = document.getElementById('replacer-2');
// container.replaceWith(replacer1, replacer2);

// // remove
// par1.remove();
// par3.remove();


// document.write (don't use)

// example
// function NotificationList (container) {
//   this.container = container;
//   this.notifications = [];

//   this.askMessage = this.askMessage.bind(this);
//   this.close = this.close.bind(this);

//   return this;
// }
// NotificationList.prototype.add = function (message) {
//   const notification = new Notification(message);

//   notification.show(this.container);

//   this.notifications.push(notification);
// };
// NotificationList.prototype.askMessage = function () {
//   const message = prompt('Enter a message', '');

//   this.add(message);
// };
// NotificationList.prototype.close = function (e) {
//   let target = e.target.closest('.notification__close');

//   if (!target) {
//     return;
//   }

//   const id = target.closest('.notification').notificationId;

//   this.notifications = this.notifications.filter(function (notification) {
//     if (notification._id === id) {
//       notification.close();
//     }

//     return notification._id !== id;
//   });

//   console.log(this.notifications);
// };

// function Notification (message) {
//   this._id = Math.random();

//   this.message = message;

//   return this;
// }
// Notification.prototype.show = function (parent) {
//   const notification = document.createElement('div');
//   notification.className = 'notification';

//   const text = document.createTextNode(this.message);
//   const closeIcon = document.createElement('span');
//   closeIcon.className = 'notification__close';
//   closeIcon.innerHTML = '&times;';

//   notification.appendChild(text);
//   notification.appendChild(closeIcon);

//   parent.insertBefore(notification, parent.firstElementChild);

//   void notification.offsetWidth;
//   notification.classList.add('animated');

//   this.el = notification;
//   this.el.notificationId = this._id;
// };
// Notification.prototype.close = function (e) {
//   this.el.parentNode.removeChild(this.el);
// };

// const notificationList = new NotificationList(document.getElementById('notifications'));
// document.getElementById('add-notification').addEventListener('click', notificationList.askMessage, false);
// document.addEventListener('click', notificationList.close, false);
