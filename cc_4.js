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
    console.log("Stock Value Decreasing:", stock);
    stock--;
}
