// Написать функцию, которая принимает объект и возвращает итератор,
// который обходит объект по элементам. Итератор должен создаваться с помощью генератора.

function* objToIterator(obj) {
	// Когда мы используем yield* с массивом, генератор будет итерировать по элементам массива и возвращать каждый элемент по очереди.
	yield* Object.values(obj)
}

// или

function* objToIterator2(obj) {
	const values = Object.values(obj)
	for (let value of values) {
		yield value
	}
}

// [1, 2]
const arr = Array.from(objToIterator({ a: 1, b: 2 }))
console.log(arr)
