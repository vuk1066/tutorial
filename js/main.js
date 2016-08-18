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





// object enhancement
var color = "red";
var speed = 10;

var car = {
	color,
	speed,
	go(){
		console.log("vroom")
};
console.log(car.color); //prints red
console.log(car.speed); //prints 10
car.go(); //prints vroom

