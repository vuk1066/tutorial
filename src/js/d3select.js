d3.selectAll('a:nth-of-type(even)')
	.attr('href', 'www.google.com')
	.classed('red', true)
	.style('background-color', 'black')
	.text('Inventory');

d3.select('#app')
  .insert('button', 'a:first-child')
	.html('<b>Submit</b>');

d3.select('#app')
  .append('div')
    .html('<p>appended html</p>')
    .style('color','green')
    .style('border', 'solid')
    .style('width', '300px')
  .append('button')
    .text('wow')
    .style('color', 'green');

d3.select('.remove').remove();