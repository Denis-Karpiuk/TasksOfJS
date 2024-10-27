// Написать функцию, которая принимает Iterable объект и функцию-фильтр и возвращает итератор,
// который обходит только те элементы, для которых фильтр вернул true. Генераторы использовать нельзя.

const filter = (data, fn) => {
	let res = []
	let cursor = 0

	for (let val of data) {
		if (fn(val)) {
			res.push(val)
		}
	}

	return {
		next() {
			return { value: res[cursor], done: cursor++ >= res.length }
		},
		[Symbol.iterator]() {
			return this
		},
	}
}

// [3, 4]
const arr = Array.from(filter(new Set([1, 2, 3, 4]), el => el > 2))
console.log(arr)
