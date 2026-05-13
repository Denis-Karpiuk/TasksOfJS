const obj = {
	name: 'Alice',
	sayHello() {
		console.log(this.name)
	},
}

const fn = obj.sayHello

fn() // undefined в нестрогом режиме, в модуле автоматически строгий режим и будет падать ошибка TypeError: Cannot read properties of undefined (reading 'name')
