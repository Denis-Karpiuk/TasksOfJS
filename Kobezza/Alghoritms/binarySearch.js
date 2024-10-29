//! Написать бинарный поиск!!!

const binarySearch = (array, searchItem) => {
	let start = 0
	let end = array.length - 1
	let currentIndex

	while (start <= end) {
		currentIndex = Math.floor((start + end) / 2)
		const currentElement = array[currentIndex]

		if (currentElement === searchItem) {
			return currentIndex
		}

		if (currentElement > searchItem) {
			end = currentIndex - 1
		}

		if (currentElement < searchItem) {
			start = currentIndex + 1
		}
	}

	return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 44))
