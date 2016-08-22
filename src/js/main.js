// ES6 tutorial
//Maps

var myMap = new Map();

//API // set() get() size clear() has()

myMap.set('foo', 'bar'); //setting some key-value pairs on the new map
myMap.set('hello', 'world');
console.log(myMap.get('foo')); //will print 'bar' as it is the value associated with 'foo' key
console.log(myMap.size); // prints 2
myMap.clear();  
console.log(myMap.size); // prints 0

var myMap_two = new Map();
myMap_two.set('foo', 'bar');
myMap_two.set('hello', 'world');

console.log(myMap_two.has('foo'));  //prints 'true'
console.log(myMap_two.has('asdfsadf')); //prints 'false'

//Iterators // keys() entries() values

for (var key of myMap_two.keys()){  //prints "foo" and "hello"
	console.log(key);
}

for (var value of myMap_two.values()){ //prints "bar" and "hello"
	console.log(value);
}

for (var[key, value] of myMap_two.entries()){ //foo = bar hello = world
	console.log(key + ' = ' + value);
}