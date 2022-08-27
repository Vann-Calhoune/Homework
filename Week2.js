let pizzaPlace = "Papa's Pizza";

let numberOfToppings = 2;

console.log(pizzaPlace);
console.log(numberOfToppings);

console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

console.log(
  `"Hey ${pizzaPlace}, I would like ${numberOfToppings} toppings on my large pizza please!"`
);

if (numberOfToppings >= 10) {
  console.log("A whole lot of pizza.");
} else {
  console.log("Quality, not quantity.");
}

// Bonus
let x = 1;
while (x <= numberOfToppings) {
  if (x % 2 == 0) console.log(x);
  x++;
}
