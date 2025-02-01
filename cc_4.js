///////////////////////////
// Task 1: If Statements //
///////////////////////////

console.log("--------------------------------------");
console.log("Task 1: If Statements");

// initialize purchase amount
let purchaseAmount = 150;
console.log(`Initial purchase amount: $${purchaseAmount}`);

// apply discounter percentage of 10%  if value > 100
if (purchaseAmount > 100) {
  purchaseAmount *= 0.9; 
}

console.log(`Final amount after 10% discount: $${purchaseAmount}`);

//////////////////////
// Task 2: For Loop //
//////////////////////

console.log("--------------------------------------");
console.log("Task 2: For Loop");

// initialize sales figure array and sum
let sales = [98, 76, 110, 36, 236];
let sum = 0;
console.log(`Inital Sales: ${sales}`);

// Calculate total sales by adding each sales figure in array
for (let index = 0; index < sales.length; index++) {
  sum += sales[index];
}

console.log(`Sales Total: $${sum}`);

/////////////////////////
// Task 3: While Loops //
/////////////////////////

console.log("--------------------------------------");
console.log("Task 3: While Loops");

// intialize stock amount
let stock = 10;

// Decrease stock until 0
while (stock >= 0) {
  console.log(`Stock Value Decreasing: ${stock}`);
  stock--;
}

/////////////////////////////
// Task 4: Do...While Loop //
/////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Do...While Loop");

// initialize responses count to zero
let responses = 0;

// Increment response count and printout until it reaches 3
do {
  console.log(`Responses: ${responses}`);
  responses++;
} while (responses <= 3);

////////////////////////////
// Task 5: For... In Loop //
////////////////////////////

console.log("--------------------------------------");
console.log("Task 5: For... In Loop");

// initialze an employee object
let employee = {
  name: "Bill",
  position: "Manager",
  salary: 80000,
};
console.log(`Inital employee object: ${JSON.stringify(employee)}`);


// Print each property value in object and it's value
for (let property in employee) {
  console.log(`${property}: ${employee[property]}`);
}

///////////////////////////
// Task 6: For...Of Loop //
///////////////////////////

console.log("--------------------------------------");
console.log("Task 6: For...Of Loop");

// create an array of products
let products = ["Laptop", "Keyboard", "Monitor"];
console.log(`Inital products array: ${products}`);

// Display each product name
for (let product of products) {
  console.log(`Product Name: ${product}`);
}

//////////////////////////////
// Task 7: forEach() Method //
//////////////////////////////

console.log("--------------------------------------");
console.log("Task 7: forEach() Method");

// initialize an array of order ids
let orders = [10, 11, 12, 13, 14];
console.log(`Inital orders array: ${orders}`);

// Loop through orders array and log it's position in array and value
orders.forEach((order, index) => {
  console.log(`Order ${index + 1}: ${order}`);
});

//////////////////////////////////
// Task 8: Function Declaration //
//////////////////////////////////

console.log("--------------------------------------");
console.log("Task 8: Function Declaration");

// Create function to calculate tax
function calculateTax(amount, taxRate) {
  return amount * taxRate;
}

let num = 100;
let taxRate = 0.07;

console.log(`For purchase of $${num} at 7% tax rate`);
console.log(`Tax Amount: $${calculateTax(num, taxRate).toFixed(2)}`);

//////////////////////////////////
// Task 9: Function Expressions //
//////////////////////////////////

console.log("--------------------------------------");
console.log("Task 9: Function Expressions");

// create function to apply discount to a given price
// input parameters are price and discount percentage
let applyDiscount = function (price, discount) {
  return price * (1 - discount);
};

let discount = 0.05;
let price = 500;

console.log(`For purchase of $${price} at 5% discount rate`);
console.log(`Discounted Price: $${applyDiscount(price, discount)}`);

//////////////////////////////
// Task 10: Arrow Functions //
//////////////////////////////

console.log("--------------------------------------");
console.log("Task 10: Arrow Functions");

// Create function to alculate points based off of purchase amount
// Points are rounded down to nearest whole number
const calculatePoints = (totalPurchase) => Math.floor(totalPurchase * 0.1);

let purchase = 125;

// calculate points for purchase
let points = calculatePoints(purchase);
console.log(`Points Accumulated for purchase of $${purchase}: ${Math.floor(points)} pts`); 
