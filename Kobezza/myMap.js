const myMap = array => {
	const result = []

	array.forEach = item => {
		if (Array.isArray(item)) {
			return
		}
	}

	return result
}

console.log(myMap([1, 2, 3, [4, 5, 6, [7, 8, 9]]]))
