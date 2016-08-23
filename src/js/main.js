// ES6 tutorial
//forEach, map, filter

var stocks = [
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
];

var filteredStockSymbols =
	stocks.
		filter(function(stock) {
			return stock.price >= 150.00
		}).
		map(function(stock) {
			return stock.symbol;
		}
);

filteredStockSymbols.forEach(function(symbol) {
	console.log(symbol);
});
