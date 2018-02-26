/* objects have properties that are described in key value pairs */

// var coffeeFlavor = "espresso";
// var coffeeTemperature = "piping hot";
// var coffeeOunces = 24;
// var coffeeMilk = true;

var myCoffee = {

  flavor: "espresso",
  temperature: "hot",
  ounces: 24,
  milk: true,

  reheat: function() {
    if (myCoffee.temperature == "cold") {
      myCoffee.temperature = "piping hot";
      alert("your coffee has been reheated");
    }
  }

};


alert("My coffee is " + myCoffee.ounces + " ounces.");

alert("My coffee is " + myCoffee.temperature);

myCoffee.temperature = "cold";

alert("My coffee is " + myCoffee.temperature);

myCoffee.reheat();

alert("My coffee is " + myCoffee.temperature);


myCoffee["temperature"] = "lukewarm";

alert("My coffee is " + myCoffee.temperature);
