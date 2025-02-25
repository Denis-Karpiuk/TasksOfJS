// ## Выборочная сортировка массива
// Необходимо написать функцию sort, которая бы сортировала элементы со значением кратным двум.

function sort(arr) {
	const positions = []
	const values = []

	arr.forEach((el, index) => {
		if (el % 2 === 0) {
			positions.push(index)
			values.push(el)
		}
	})

	values.sort((a, b) => a - b)

	values.forEach((el, index) => {
		arr[positions[index]] = el
	})

	return arr
}

console.log(sort([7, 1, 4, 2, 9, 8])) // [7, 1, 2, 4, 9, 8]
