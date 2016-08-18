/// arrow function
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

/// let
var fs [];

for (let i = 0; i<10; i++) {
	fs.push(function (){
		console.log(i);
	})
}

fs.forEach(function (f) {
	f();
})
///