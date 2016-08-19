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

// string templates

var x = 1;
var y = 2;
var equation = `${x} + ${y} = ${x+y}` 
console.log(equation);  //it will print 1 + 2 = 3

function tag(strings, ...values){
	if(values[0] <20) {
		values[1] = "awake";
	}
	return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}

var message = tag`It's ${new Date().getHours()} I'm ${""}`;
console.log(message); //it will print "I'm awake" before 8pm