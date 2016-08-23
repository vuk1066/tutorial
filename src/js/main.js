// ES6 tutorial
//forEach => this can run asynchronously

function getStockSymbols(stocks) {
	return stocks.map(function(stock) {
		return stock.symbol;
	})
}

Array.prototype.map = function(projection) { //explanation
	var results = [];

	this.forEach(function(item){
		results.push(projection(item));
	});
	return results;
};

var symbols = getStockSymbols([
	{
		symbol: "XGC",
		price: 240.00,
		colume: 2342
	},
	{
		symbol: "AAD",
		price: 30.00,
		colume: 12
	},
	{
		symbol: "TDF",
		price: 140.20,
		colume: 1001
	}
]);

console.log(JSON.stringify(symbols));