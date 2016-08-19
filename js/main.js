// ES6
//destructuring assignment

function generateObj(){
	return {
		color: "blue",
		name: "Bob",
		state: "New York",
		position: "Forward"
	}
}

var {name:firstName, state} = generateObj();
console.log(firstName); //"Bob"  look up name then assigning to firstName
console.log(state); //"New York"

//second scenario

var people = [
	{
		"firstName": "Clinton",
		"lastName": "Ruiz",
		"email": "att@gmail.com"
	},
	{
		"firstName": "Skyler",
		"lastName": "Madden",
		"email": "boo@gmail.com"		
	}
]

people.forEach(({firstName}) => console.log(firstName)) // Clinton Skyler

var [,Tom] = people; //looks up the second object then names it Tom

function logEmail({email}) {  //function that takes email
	console.log(email);
}

logEmail(Tom) //take email function run on Tom object