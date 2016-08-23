// ES6 tutorial
//concatAll method => flatens 2 or more dimensional arrays
/* use functions to flatten nested data structurs(arrays in arrays) so they can be
further transformed */

var exchanges = [
		[
			{ symbol: "XGC", price: 240.00, volume: 2342},
			{ symbol: "AAD", price: 30.00, volume: 12}
		],
		[
			{ symbol: "TFT", price: 140.00, volume: 1001},
			{ symbol: "AAJ", price: 330.00, volume: 10000}
		]
];

exchanges.forEach(function(exchange) {
	exchange.forEach(function(stock) {
		console.log(JSON.stringify(stock));
	});
});

Array.prototype.concatAll = function() {
	var results = [];

	this.forEach(function(subArray) {
		subArray.forEach(function(item) {
			results.push(item);
		});
	});
	return results;
};

var stocks = exchanges.concatAll(); //same as above but using concatAll
stocks.forEach(function(stock) {
	console.log(JSON.stringify(stock));
});


