/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = transactions.map(transaction => transaction.category);
categories = [...new Set(categories)];
// console.log(categories);

let totalSpentByCategory = [];
let finalOutput= [];
// console.log(categories.length);
// console.log(transactions.length);
// console.log(transactions[1]['price']);

for(let i=0;i<categories.length ;i++){
    totalSpentByCategory[i]=0;
    for(let j=0;j<transactions.length;j++){
        if(categories[i]==transactions[j]['category']){
            totalSpentByCategory[i]=totalSpentByCategory[i]+transactions[j]['price'];
        }
    }
    let tempArr={category: categories[i], totalSpent: totalSpentByCategory[i]}
    finalOutput.push(tempArr);
}
// console.log(totalSpentByCategory);
return finalOutput;

}

module.exports = calculateTotalSpentByCategory;
