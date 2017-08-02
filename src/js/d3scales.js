var linearScale = d3.scaleLinear()
  .domain([0, 100])  //representing the range of possible values of scores.
  .range([0, 1])  //output range
  .clamp(true); 

console.log(linearScale(-10));  //0
console.log(linearScale(50));  //0.5
console.log(linearScale(100));  //1

console.log(linearScale.invert(1)); //100

var timeScale = d3.scaleTime()
	.domain([new Date(2016, 0, 1), new Date()])
	.range([0, 100]);

console.log(timeScale(new Date()));	
console.log(timeScale.invert(50));

//quantized scale will map a continuous domain to a discrete range
var quantizeScale = d3.scaleQuantize() 
  .domain([0, 100])
  .range(["red", "white", "blue", "green"]);

console.log(quantizeScale(34));
console.log(quantizeScale(50));
console.log(quantizeScale(67));   
console.log(quantizeScale.invertExtent('white'));

/*sometimes you also have a specific set of values in your domain 
that you know you want to map to specific values in the output range*/
var ordinalScale = d3.scaleOrdinal() 
  .domain(["poor", "good", "great"])
  .range(["red", "white", "green"]);

 console.log(ordinalScale("great"));

 d3.json('data/data.json', function(data) {
 	console.log(data);
 });

 d3.csv('data/data.csv', function(data) {
 	console.log(data);
 });

 d3.json('data/data.json', function(data){
 	var min = d3.min(data, function (d){
 		return d.bikes;
 	});

 	var max = d3.max(data, function (d){
		return d.bikes;
 	});

 	var extent = d3.extent(data, function (d){
		return d.bikes;
 	});
 	//console.log("min: "+min+", max: "+max+ ", min-max: "+extent);

 	var scale = d3.scaleLinear()
 		.domain(extent)
 		.range([0,500]);
 		console.log("%c  scale: "+scale(1),'background: #bada55; color: black');
    
    var ages = d3.set(data, function (d){
    	return d.bikes;
    });
    console.log(ages.values());

 });







