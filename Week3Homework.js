//1 Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["pepperoni", "bacon", "beef", "chicken"];

//2 Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9) -Loop instead of printing with for loop-
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
  let greeting = `Welcome to Papa's Pizza, our toppings are: `;
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }
  console.log(greeting);
}

greetCustomer();

/* 3 Create a getPizzaOrder function that
has the parameters size, crust, and an indefinite amount of toppings as inputs
prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
 outputs a list with the size, crust, and toppings -use a for loop- */

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let topping of toppings) {
    order += `${topping}, `;
  }
  console.log(`${order}. Coming up!`);
  return [size, crust, toppings];
}

let customerOrder = getPizzaOrder("large", "thin", "pepperoni", "bacon");

// 4 Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza([orderSize, orderCrust, orderToppings]) {
  console.log("...Cooking pizza...");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
}

console.log(preparePizza(customerOrder));

//  5 Create a servePizza function that
//  has a parameter of a pizza Object
//  logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//  outputs the same pizza object that was passed in

function servePizza(pizza) {
  let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    orderReady += `${topping}, `;
  }
  console.log(`${orderReady}. Enjoy!`);
  return pizza;
}

//  6 Call each function and (starting with preparePizza) use the returned value from the previous function as its input

servePizza(preparePizza(customerOrder));

// let cookedPizza =preparePizza(customerOrder);
