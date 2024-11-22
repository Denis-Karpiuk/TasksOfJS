// Необходимо добавить все строкам в JavaScript метод capitalize, который делает первую букву в строке заглавной

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1)
}

console.log('foo'.capitalize()) // Foo

// Необходимо добавить все массивам в JavaScript метод filterMap, который принимает 2 функции: фильтр и map

Array.prototype.filterMap = function (filter, map) {
	return this.filter(filter).map(map)
}

// [9, 16]
const a = [1, 2, 3, 4].filterMap(
	el => el > 2,
	el => el ** 2
)

console.log(a)

// Необходимо сделать конкретному массиву метод toString, который возвращает первый элемент .. последний.

function addToString(arr) {
	return Object.create(arr, {
		toString: {
			value: function () {
				if (!this.length) return ''
				if (this.length === 1) return this[0]

				return this[0] + '..' + this[this.length - 1]
			},
		},
	})
}

// 1..4
console.log(addToString([1, 2, 3, 4]).toString())

// 1
console.log(addToString([1]).toString())

//
console.log(addToString([]).toString())

// Необходимо создать функцию-конструктор, которая создает пользователя с заданным именем (имя и фамилия) и возрастом.
// А также, необходимо определить функции, sayName (возвращает полное имя) и has18 (true, если есть 18)

function User(fname, lname, age) {
	this.fname = fname
	this.lname = lname
	this.age = age

	this.sayName = function () {
		console.log(this.fname + ' ' + this.lname)
	}

	this.has18 = function () {
		console.log(this.age >= 18)
	}
}

const user = new User('Andrey', 'Kobets', 32)

user.has18() // true

user.sayName() // 'Andrey Kobets'

// Необходимо создать функцию-конструктор, которая создает пользователя с заданным именем (имя и фамилия) и возрастом.
// А также, необходимо определить функции, sayName (возвращает полное имя) и has18 (true, если есть 18)

function User2(obj) {
	return Object.create(obj, {
		sayName: {
			value: function () {
				console.log(this.fname + ' ' + this.lname)
			},
		},

		has18: {
			value: function () {
				console.log(this.age >= 18)
			},
		},
	})
}

const user2 = new User2({
	fname: 'Andrey',
	lname: 'Kobets',
	age: 32,
})

user2.has18() // true

user2.sayName() // 'Andrey Kobets'

// Необходимо написать аналог Object.create с использованием __proto__

function objectCreate(obj) {
	return { __proto__: obj }
}

const obj = objectCreate({ a: 1 })
console.log(obj.a)

// Необходимо написать аналог Object.create с использованием Object.setPrototypeOf

function objectCreate2(obj) {
	return Object.setPrototypeOf({}, obj)
}

const obj2 = objectCreate2({ a: 2 })
console.log(obj2.a)

// Необходимо написать аналог Object.create с использованием new function

function objectCreate3(obj) {
	function F() {}
	F.prototype = obj
	return new F()
}

const obj3 = objectCreate3({ a: 3 })
console.log(obj3.a)
