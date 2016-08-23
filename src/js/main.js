// ES6 tutorial
//for method

function getStockSymbols(stocks) {
	var symbols = [],
		counter,
		stock

	for(counter = 0; counter < stocks.length; counter++) {
		stock = stocks[counter];
		symbols.push(stock.symbol);
	}

	return symbols;
}

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