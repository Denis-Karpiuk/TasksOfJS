function test() {
	console.log('My test')
}

const a = new test()

console.log(a)

const user = {
	showInfo() {
		console.log(this.name)
	},
}

const john = {
	name: 'John',
	__proto__: user,
}

const ben = {
	name: 'Ben',
	__proto__: user,
}

console.log(ben.showInfo())
