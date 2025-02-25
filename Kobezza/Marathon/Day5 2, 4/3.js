// ## Реализация функции аналогичной Array.prototype.flat
// Необходимо написать функцию, которая бы повторяло поведение Array.prototype.flat.

console.log(flat([[1, 2], [[1]], 2])) // [1, 2, [1], 2]
console.log(flat([[1, 2], [[1]], 2], 2)) // [1, 2, 1, 2]

// // Рекурсия
// function flat(array, depth = 1) {
// 	const result = []

// 	array.forEach(element => {
// 		if (!Array.isArray(element) || depth <= 0) {
// 			result.push(element)
// 		} else {
// 			result.push(...flat(element, depth - 1))
// 		}
// 	})

// 	return result
// }

// Стек
function flat(array, depth = 1) {
	const result = []
	const stack = [[depth, array[Symbol.iterator]()]]

	while (stack.length > 0) {
		const [depth, iter] = stack.pop()

		for (const el of iter) {
			if (!Array.isArray(el) || depth <= 0) {
				result.push(el)
			} else {
				stack.push([depth, iter])
				stack.push([depth - 1, el[Symbol.iterator]()])
				break
			}
		}
	}

	return result
}
