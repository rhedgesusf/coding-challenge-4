///////////////////////////
// Task 1: If Statements //
///////////////////////////

console.log('--------------------------------------');
console.log('Task 1: If Statements');

let purchaseAmount = 150;
if (purchaseAmount > 100) {
    purchaseAmount *= .9; // Applying 10% discount
}
console.log(`Final amount after discount: $${purchaseAmount}`); 

//////////////////////
// Task 2: For Loop //
//////////////////////

console.log('--------------------------------------');
console.log('Task 2: For Loop');

let sales = [98, 76, 110, 36, 236];
let sum = 0;

for (let index = 0; index < sales.length; index++) {
    sum += sales[index];
}
console.log(`Sales Total: $${sum}`)

/////////////////////////
// Task 3: While Loops //
/////////////////////////

console.log('--------------------------------------');
console.log('Task 3: While Loops');

let stock = 10;
while (stock >= 0) {
    console.log(`Stock Value Decreasing: ${stock}`);
    stock--;
}

/////////////////////////////
// Task 4: Do...While Loop //
/////////////////////////////

console.log('--------------------------------------');
console.log('Task 4: Do...While Loop');

let responses = 0;

do {
    console.log(`Responses: ${responses}`);
    responses++
} while (responses <= 3);

////////////////////////////
// Task 5: For... In Loop //
////////////////////////////

console.log('--------------------------------------');
console.log('Task 5: For... In Loop');

let employee = {
    name: "Bill",
    position: "Manager",
    salary: 80000
};

for (let property in employee) {
    console.log(`${property}: ${employee[property]}`);
}

///////////////////////////
// Task 6: For...Of Loop //
///////////////////////////

console.log('--------------------------------------');
console.log('Task 6: For...Of Loop');

let products = ["Laptop", "Keyboard", "Monitor"];
for (let product of products) {
    console.log(`Product Name: ${product}`);
}

//////////////////////////////
// Task 7: forEach() Method //
//////////////////////////////

console.log('--------------------------------------');
console.log('Task 7: forEach() Method');

let orders = [10,11,12,13,14];

orders.forEach((order, index) => {
    console.log(`Order ${index + 1}: ${order}`);
});

//////////////////////////////////
// Task 8: Function Declaration //
//////////////////////////////////

console.log('--------------------------------------');
console.log('Task 8: Function Declaration');

function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

let num = 100;
let taxRate = .07;


console.log(`Tax Amount: $${calculateTax(num, taxRate).toFixed(2)}`);

//////////////////////////////////
// Task 9: Function Expressions //
//////////////////////////////////

console.log('--------------------------------------');
console.log('Task 9: Function Expressions');

let applyDiscount = function(price, discount) {
    return price * (1 - discount);
}
let discount = .05;
let price = 500;

console.log(`Discounted Price: $${applyDiscount(price, discount)}`);



