// ES6
// arrow function
var deliveryBoy = {
	name:"John",

	handleMessage: function (message, handle){
		handler(message);
	},

	receive: function () {
		this.handleMessage("Hello, ", message => console.log(message + this.name))
	}
}
deliveryBoy.receive();

// let
var fs [];

for (let i = 0; i<10; i++) {
	fs.push(function (){
		console.log(i);
	})
}

fs.forEach(function (f) {
	f();
})

// default argument
function greet(greeting,name = "John"){ //default argument
	console.log(greeting + ", " + name);
}
greet("Hello", "Bill"); //Bill overwrites default fuunction

//same with arrow function
let greet = (greeting,name = "John") => console.log(greeting + ", " + name)
greet("Hello", );

function receive(comlete = () => console.log("complete")){  //default function
	complete();
}
receive();