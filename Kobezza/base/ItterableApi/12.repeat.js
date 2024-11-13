// Написать функцию, которая принимает Iterable объект и количество повторений и возвращает итератор,
// который продублирует все элементы из исходного заданное количество раз. Генераторы использовать нельзя.

const repeat = (data, count) => {
	let iterator = data[Symbol.iterator]()
	let currentIteration = 0

	return {
		next() {
			if (currentIteration >= count) {
				return { done: true, value: undefined }
			}

			const result = iterator.next()

			if (result.done) {
				iterator = data[Symbol.iterator]()
				currentIteration++
				return this.next()
			}

			return { done: false, value: result.value }
		},
		[Symbol.iterator]() {
			return this
		},
	}
}

// [1, 2, 3, 1, 2, 3]
console.log(Array.from(repeat([1, 2, 3], 2)))
