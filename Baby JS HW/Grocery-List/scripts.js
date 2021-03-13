// three items and how many of each item

let item1 = prompt("What item would you like from the grocery store?")

let quantity1 = prompt (`How many ${item1} would you like?`)

let item2 = prompt("What's another thing would you like from the grocery store?")

let quantity2 = prompt (`How many ${item2} would you like?`)

let item3 = prompt("What's one last thing would you like from the grocery store?")

let quantity3 = prompt (`How many ${item3} would you like?`)

// Output to the console the shopping list of items 
// with each item on its own each line.

console.log (`Shopping List: 
${quantity1} ${item1} 
${quantity2} ${item2} 
${quantity3} ${item3}`)

// . Output to the console the total number of grocery items (Hint: create a `sum` variable to store total number of items)

let sum = Number(quantity1) + Number(quantity2) + Number (quantity3);
console.log ("Total number of items:" + sum)