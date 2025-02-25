Array.prototype.mySome = function (fn) {
	for (let [index, value] of this.entries()) {
		console.log('index', index)
		if (fn(value, index, this)) {
			return true
		}
	}

	return false
}

console.log([(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)].mySome(el => el > 6))

const some = (array, callback) => {
	for (let i = 0; i < array.length; i++) {
		console.log(i, 'index')

		if (callback(array[i], i, array)) {
			return true
		}
	}
	return false
}

console.log(some([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], el => el > 6))
