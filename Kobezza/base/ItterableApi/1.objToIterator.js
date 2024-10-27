// Написать функцию, которая принимает объект и возвращает итератор,
// который обходит объект по элементам. Генераторы использовать нельзя.

const objToIterator = obj => {
	const keys = Object.keys(obj)
	let cursor = 0

	return {
		[Symbol.iterator]() {
			return {
				next() {
					return {
						value: obj[keys[cursor]],
						done: cursor++ >= keys.length,
					}
				},
			}
		},
	}
}

const arr = Array.from(objToIterator({ a: 1, b: 2 }))
console.log(arr) // [1, 2]
