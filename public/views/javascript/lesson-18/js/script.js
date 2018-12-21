'use strict';

// function Building (data) {
//   this.data = data;

//   this._isBuilt = false;

//   return this;
// }

// Building.prototype.build = function () {
//   this._isBuilt = true;
// };
// Building.prototype.destroy = function () {
//   this._isBuilt = false;
// };

// function House (data) {
//   Building.apply(this, arguments);

//   this.name = this.data.name;

//   this._isDoorOpened = false;

//   return this;
// }

// House.prototype = Object.create(Building.prototype);
// House.prototype.constructor = House;

// House.prototype.build = function () {
//   Building.prototype.build.call(this);
//   console.log('House ' + this.name + ' has been successfully built.');
//   console.log('isBuilt:', this._isBuilt);
// };

// House.prototype.destroy = function () {
//   var isConfirmed = confirm('Are you sure to destroy house?');

//   if (isConfirmed) {
//     Building.prototype.destroy.call(this);
//     console.log('House ' + this.name + ' has been successfully destroyed.');
//     console.log('isBuilt:', this._isBuilt);
//   } else {
//     console.log('Cancelled.');
//     console.log('isBuilt:', this._isBuilt);
//   }
// };

// House.prototype.openDoor = function () {
//   this._isDoorOpened = true;
//   console.log('The door is opened.');
// };
// House.prototype.closeDoor = function () {
//   this._isDoorOpened = false;
//   console.log('The door is closed.');
// };

// var lakeHouse = new House({
//   name: 'Lake House',
//   floors: 2,
//   material: 'wood',
//   windows: 13,
//   rooms: 4,
// });
// lakeHouse.build();
// lakeHouse.openDoor();
// lakeHouse.closeDoor();
// setTimeout(function () {
//   lakeHouse.destroy();
// }, 3000);


// Mixins
// var testMixin = {
//   log: function (arg) {
//     this.counter += 1;
//     console.log('Message №' + this.counter, '<' + arg + '>');
//   },
//   counter: 0
// };

// function Dog (name) {
//   this.name = name;

//   return this;
// }

// Dog.prototype.bark = function () {
//   console.log('Bark Bark!!!');
// };

// Object.keys(testMixin).forEach(function (key) {
//   Dog.prototype[key] = testMixin[key];
// });

// var grant = new Dog('Grant');
// var grant2 = new Dog('Grant2');
// grant.bark();
// grant.log('I am Grant');
// grant.log('I am 2');

// grant2.bark();
// grant2.log('I am Grant');
// grant2.log('I am 2');


// var eventMixin = {
//   subscribe: function (eventName, handler) {
//     if (!this._handlers) {
//       this._handlers = {};
//     }
//     if (!this._handlers[eventName]) {
//       this._handlers[eventName] = [];
//     }

//     this._handlers[eventName].push(handler);
//   },
//   unsubscribe: function (eventName, handler) {
//     if (!this._handlers || !this._handlers[eventName]) {
//       return;
//     }

//     this._handlers[eventName] = this._handlers[eventName].filter(function (subscribedHandler) {
//       return subscribedHandler !== handler;
//     });
//   },
//   trigger: function (eventName, data) {
//     if (!this._handlers || !this._handlers[eventName]) {
//       return;
//     }

//     const self = this;

//     this._handlers[eventName].forEach(function (handler) {
//       handler.call(self, data);
//     });
//   }
// };

// function Building (data) {
//   this.data = data;

//   this._isBuilt = false;

//   return this;
// }

// Building.prototype.build = function () {
//   this._isBuilt = true;
// };
// Building.prototype.destroy = function () {
//   this._isBuilt = false;
// };

// Object.keys(eventMixin).forEach(function (key) {
//   Building.prototype[key] = eventMixin[key];
// });

// function House (data) {
//   Building.apply(this, arguments);

//   this.name = this.data.name;

//   this._isDoorOpened = false;

//   return this;
// }

// House.prototype = Object.create(Building.prototype);
// House.prototype.constructor = House;

// House.prototype.build = function () {
//   Building.prototype.build.call(this);
//   console.log('House ' + this.name + ' has been successfully built.');
//   console.log('isBuilt:', this._isBuilt);
// };

// House.prototype.destroy = function () {
//   var isConfirmed = confirm('Are you sure to destroy house?');

//   if (isConfirmed) {
//     Building.prototype.destroy.call(this);
//     console.log('House ' + this.name + ' has been successfully destroyed.');
//     console.log('isBuilt:', this._isBuilt);
//   } else {
//     console.log('Cancelled.');
//     console.log('isBuilt:', this._isBuilt);
//   }
// };

// House.prototype.openDoor = function () {
//   this._isDoorOpened = true;
//   console.log('The door is opened.');
//   this.trigger('door:open', 'Woooooooops!!!');
// };
// House.prototype.closeDoor = function () {
//   this._isDoorOpened = false;
//   console.log('The door is closed.');
// };

// var lakeHouse = new House({
//   name: 'Lake House',
//   floors: 2,
//   material: 'wood',
//   windows: 13,
//   rooms: 4,
// });

// lakeHouse.subscribe('door:open', function (arg) {
//   console.log(arg);
// });

// lakeHouse.build();
// lakeHouse.openDoor();
// lakeHouse.closeDoor();
