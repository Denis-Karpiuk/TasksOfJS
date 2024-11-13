// Написать функцию, которая принимает Iterable объект и возвращает итератор,
// который возвращает пары вида [номер итерации, элемент.]. Генераторы использовать нельзя.

const enumerate = data => {
	let cursor = 0
	const iterator = data[Symbol.iterator]()

	return {
		next() {
			const { done, value } = iterator.next()

			return {
				done: done,
				value: [cursor++, value],
			}
		},
		[Symbol.iterator]() {
			return this
		},
	}
}

// [[0, 1], [1, 2], [2, 3]]
console.log(Array.from(enumerate([1, 2, 3])))
