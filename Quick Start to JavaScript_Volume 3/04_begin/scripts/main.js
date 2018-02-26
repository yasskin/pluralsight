// creating an instance of an object literal

var mark = {
  name: "Mark",
  tshirtColor: "Navy Blue"

};

var lisa = {
  name: "Lisa",
  tshirtColor: "red"

};

// create multiple instances of an object by creating an object constructor - a function that creates object - convention is to name constructor with a capital letter

// a template or prototype

function Friend(name, tshirtColor) {
  this.name = name;
  this.tshirtColor = tshirtColor;

}

var denny = new Friend("Denny", "green");

alert(denny.name);

var lisa = new Friend("Lisa", "yellow");

alert(lisa.name);

// JavaScript is an Object Oriented language

// Three types of objects in JavaScript:
// Host objects - based on the device, like the window
// Core objects - built into the language itself
// Objects defined by the code's author
