//1 Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["pepperoni", "bacon", "beef", "chicken"];

//2 Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9) -Loop instead of printing with for loop-
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
  console.log("Welcome to Papa's Pizza, our toppings are: ");
  for (let topping of pizzaToppings) {
    console.log(topping)
  }
  return topping;
}

console.log(greetCustomer());

/* 3 Create a getPizzaOrder function that
has the parameters size, crust, and an indefinite amount of toppings as inputs
prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
 outputs a list with the size, crust, and toppings -use a for loop- */

 getPizzaOrder("large", "thin", "pepperoni", "bacon");

function getPizzaOrder(size, crust, ...toppings) {
  for (let topping of toppings) {
    console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up`);
  }
  return pizzaOrder = { size, crust, ...toppings };




// 4 Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza(pizzaOrder) {
  console.log("...Cooking pizza...");
  let pizzaDone = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizzaDone;
}

//  5 Create a servePizza function that
//  has a parameter of a pizza Object
//  logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//  outputs the same pizza object that was passed in

function servePizza(pizzaDone) {

  for (let topping of toppings) {
    console.log(
      "Order up! Here's your ${size} ${crust} crust pizza with {toppings}, enjoy! "
    );
  }
  return pizzaDone;
}


//  6 Call each function and (starting with preparePizza) use the returned value from the previous function as its input



function getPizzaOrder(size, crust, ...toppings) {
  for (let topping of toppings) {
    console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up`);
  } return pizzaOrder = { size, crust, ...toppings };
}

getPizzaOrder("large", "thin", "pepperoni", "bacon");

let pizzaOrder = function getPizzaOrder(size, crust, ...toppings);

function preparePizza(pizzaOrder) {
  console.log("...Cooking pizza...");
  let pizzaDone = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizzaDone;
}

let pizzaDone = function preparePizza(pizzaOrder);

  function servePizza(pizzaDone) {

    for (let topping of toppings) {
      console.log(
        "Order up! Here's your ${size} ${crust} crust pizza with {toppings}, enjoy! "
      );
    }
    return pizzaDone;
  }

  console.log(pizzaDone);
