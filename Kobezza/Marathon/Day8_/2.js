// ## Написать функцию для сравнения двух объектов
// Необходимо написать функцию для глубокого сравнения двух заданных объектов.

console.log(compare({ a: 1, b: [1, 2, 3] }, { a: 1, b: [1, 2, 3] })) // true
console.log(compare({ a: 1, b: [1, 2] }, { a: 1, b: [1, 2, 3] })) // false

function compare(a, b) {
	if (!isDeepCompare(a) && !isDeepCompare(b)) {
		return a === b
	}

	if (a.constructor !== b.constructor) {
		return false
	}

	if (Array.isArray(a)) {
		if (a.length !== b.length) {
			return false
		}

		for (let i = 0; i < a.length; i++) {
			if (!compare(a[i], b[i])) {
				return false
			}
		}
		return true
	}

	const aEntries = Object.entries(a)
	const bEntries = Object.entries(b)

	if (aEntries.length !== bEntries.length) {
		return false
	}

	aEntries.sort(sort)
	bEntries.sort(sort)

	for (let i = 0; i < aEntries.length; i++) {
		if (!compare(aEntries[i], bEntries[i])) {
			return false
		}
	}

	return true

	function sort([aKey], [bKey]) {
		return aKey.localeCompare(bKey)
	}

	function isDeepCompare(value) {
		const constr = value?.constructor
		return Array.isArray(value) || constr === Object || constr == null
	}
}
