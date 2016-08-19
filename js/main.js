// ES6
// arrow function
var deliveryBoy = {
	name:"John",

	handleMessage: function (message, handler){
		handler(message);
	},

	receive: function () {
		this.handleMessage("Hello, ", message => console.log(message + this.name))
	}
}
deliveryBoy.receive();

// spread operator
let first = [1, 2, 3];

function addThreeThings(a,b,c){
	let result = a + b + c;
	console.log(result);
}

addThreeThings (... first) // prints 6 
						   // '...' is spreading the array out to its individual elements
