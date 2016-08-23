// ES6 tutorial
//forEach => this can run asynchronously

/*function getStockOver(stocks, minPrice) {
	var results = [];

	stocks.forEach(function(stock) {
		if (stock.price >= minPrice) {
			results.push(stock);
		} 
	});
	return results;
}*/

function getStockOver(stocks, minPrice) { //has the same result as above function
	return stocks.filter(function(stock){
		return stock.price >= minPrice;
	});
}

Array.prototype.filter = function(predicate) { //the filter method accepts a function called a predicate which returns a true or false
	var results = [];

	this.forEach(function(item) { //'this' is the Array because 'this' filters a method on Array
		if (predicate(item)) { //apply the predicate() to the item,if it returns true, it will be added to results
			results.push(item);
		}
	});
	return results;
};

var expensiveStock = getStockOver(
	[
		{
			symbol: "XGC",
			price: 240.00,
			volume: 2342
		},
		{
			symbol: "AAD",
			price: 30.00,
			volume: 12
		},
		{
			symbol: "TDF",
			price: 140.20,
			volume: 1001
		}
	],
	150.00
);

console.log(JSON.stringify(expensiveStock));