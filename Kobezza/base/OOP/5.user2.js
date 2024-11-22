// Необходимо создать функцию-конструктор, которая создает пользователя с заданным именем (имя и фамилия) и возрастом.
// А также, необходимо определить функции, sayName (возвращает полное имя) и has18 (true, если есть 18)

function User(user) {
	return Object.create(user, {
		has18: {
			value: function () {
				console.log(this.age > 18)
			},
		},
		sayName: {
			value: function () {
				console.log(this.fname + ' ' + this.lname)
			},
		},
	})
}

const user = new User({
	fname: 'Andrey',
	lname: 'Kobets',
	age: 32,
})

user.has18() // true

user.sayName() // 'Andrey Kobets'
