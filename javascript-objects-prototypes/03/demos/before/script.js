'use strict';

class Animal {
  constructor(voice) {
    this.voice = voice || 'grunt'
  }

  speak() {
    display(this.voice)
  }
}

class Cat extends Animal {
  construstor(name, color) {
    super('Meow')
    this.name = name
    this.color = color
  }
}

var fluffy = new Cat('Fluffy', 'White');

display(fluffy);

// function Animal(voice) {
//   this.voice = voice || 'grunt';
// }
//
// Animal.prototype.speak = function() {
//   display(this.voice);
// }
//
// function Cat(name, color) {
//   Animal.call(this, 'Meow');
//   this.name = name;
//   this.color = color;
// }
//
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;
// var fluffy = new Cat('Fluffy', 'White');
//
// fluffy.speak();
//
// display(fluffy.__proto__.__proto__);

// A function's prototype is the object instance that will become the prototype for all objects created using this function as a constructor

// An object's prototype: An object's prototype is the object instance from which the object is inherited

// var arr = new Array['red', 'blue', 'green'];
//
// // var last = arr[arr.length-1];
//
// Object.defineProperty(Array.prototype, 'last', { get: function() {
//   return this[this.length-1]
// }})
//
// var = arr.last;
// display(arr.last);
//
// var arr2 = ['one', 'two', 'three']
// display(arr2.last);

// what about ?

// var last = arr.last;
