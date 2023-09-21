const { add: addNumbers, subtract } = require('./functions');

function add() {
	console.log('hello ES');
}

const output = addNumbers(1, 2);
add();

console.log(output);
