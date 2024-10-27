// Написать функцию, которая принимает Iterable объект и функцию отображения и возвращает итератор,
// который возвращает элементы, полученные с помощью функции отображения. Генераторы использовать нельзя.

const map = (itterable, fn) => {
	const itterator = itterable[Symbol.iterator]()

	return {
		next() {
			const { value, done } = itterator.next()

			return { value: done ? undefined : fn(value), done }
		},

		[Symbol.iterator]() {
			return this
		},
	}
}

// [2, 4, 6, 8]
const arr = Array.from(map(new Set([1, 2, 3, 4]), el => el * 2))
console.log(arr)
