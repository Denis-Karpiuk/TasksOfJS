class Parent {
	foo() {
		console.log('It works!')
	}
}

class Example extends Parent {}

function partial(klass, obj) {}

partial(Example, {
	foo() {
		super.foo()
		console.log('Yeaaah')
	},

	get bar() {
		return Math.random()
	},
})

const example = new Example()

example.foo() // It works! Yeaaah

console.log(example.bar) // Случайное число
console.log(example.bar) // Случайное число
console.log(example.bar) // Случайное число
