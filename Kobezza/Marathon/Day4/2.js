// ## Написать класс числа с рекурсивным API для арифметических операций
// Необходимо проанализировать пример ниже и реализовать нужный API, где

// 1. add - сложение
// 2. sub - вычитание
// 3. mult - умножение
// 4. div - деление

class Myvalaue {
	value = 0

	constructor(num) {
		this.value = num
	}

	add(value) {
		this.value += value
		return this
	}

	sub(value) {
		this.value -= value
		return this
	}

	mult(value) {
		this.value *= value
		return this
	}

	div(value) {
		this.value /= value
		return this
	}

	valueOf() {
		return this.value
	}
}

const num = new Myvalaue(10)

console.log(num.add(2).mult(2).sub(1) - 5) // 18
