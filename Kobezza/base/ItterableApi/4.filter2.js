// Написать функцию, которая принимает Iterable объект и функцию-фильтр и возвращает итератор,
// который обходит только те элементы, для которых фильтр вернул true. Итератор должен создаваться с помощью генератора.

function* filter(data, fn) {
	for (let val of data) {
		if (fn(val)) {
			yield val
		}
	}
}

// [3, 4]
let arr = Array.from(filter(new Set([1, 2, 3, 4]), el => el > 2))

console.log(arr)
