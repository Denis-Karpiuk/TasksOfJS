// Необходимо создать функцию-конструктор, которая создает пользователя с заданным именем (имя и фамилия) и возрастом.
// А также, необходимо определить функции, sayName (возвращает полное имя) и has18 (true, если есть 18)

function User(firstName, lastName, age) {
	this.firstName = firstName
	this.lastName = lastName
	this.age = age

	this.sayName = function () {
		console.log(this.firstName + ' ' + this.lastName)
	}

	this.has18 = function () {
		console.log(age > 18)
	}
}

const user = new User('Andrey', 'Kobets', 32)

user.has18() // true

user.sayName() // 'Andrey Kobets'
