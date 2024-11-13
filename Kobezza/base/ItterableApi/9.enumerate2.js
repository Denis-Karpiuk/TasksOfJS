// Написать функцию, которая принимает Iterable объект и возвращает итератор,
// который возвращает пары вида [номер итерации, элемент.]. Итератор должен создаваться с помощью генератора.

function* enumerate(data) {
	let count = 0

	for (let el of data) {
		yield [count++, el]
	}
}

// [[0, 1], [1, 2], [2, 3]]
console.log(Array.from(enumerate([1, 2, 3])))
