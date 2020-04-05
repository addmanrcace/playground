// const square = function(x) {
// 	return x * x;
// };

// console.log(square(4));

// // (function() {
// // 	console.log('IIFE Ran..');
// // })();

// // (function(name) {
// // 	console.log('Hello ' + name);
// // })('Addison');

// // Property Methods

// // Function inside object is called a Method

// const todo = {
// 	add: function() {
// 		console.log('Add todo..');
// 	},
// 	edit: function(id) {
// 		console.log(`Edit todo ${id}`);
// 	}
// };

// todo.delete = function() {
// 	console.log('Delete todo...');
// };

// todo.add();
// todo.edit(22);
// todo.delete();

// For Loop

// for (let i = 0; i < 10; i++) {
// 	if (i === 2) {
// 		console.log('2 is my favorite number');
// 		continue;
// 	}

// 	if (i === 5) {
// 		break;
// 	}
// 	console.log('Number ' + i);
// }

// While Loop

// let i = 0;

// while (i < 10) {
// 	console.log('Number ' + i);
// 	i++;
// }

// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for (let i = 0; i < cars.length; i++) {
// 	console.log(cars[i]);
// }

// Foreach

// cars.forEach(function(car) {
// 	console.log(car);
// });

// Map
// const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Sara' }, { id: 3, name: 'Karen' }, { id: 4, name: 'Steve' }];

// const ids = users.map(function(user) {
// 	return user.id;
// });

// console.log(ids);

const user = {
	firstName: 'John',
	lastName: 'Doe',
	age: 40
};

for (let x in user) {
	console.log(`${x} : ${user[x]}`);
}
