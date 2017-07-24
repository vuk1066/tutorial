var linearScale = d3.scaleLinear()
  .domain([0, 100])  //representing the range of possible values of scores.
  .range([0, 1])  //output range
  .clamp(true); 

console.log(linearScale(-10));  //0
console.log(linearScale(50));  //0.5
console.log(linearScale(100));  //1

console.log(linearScale.invert(1)); //100










