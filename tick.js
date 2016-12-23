console.log('start');
process.nextTick(function(){
console.log('nextTick callback');
});
console.log('scheduled');
