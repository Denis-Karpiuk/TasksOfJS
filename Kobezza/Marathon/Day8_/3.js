// ## Найти строку для которой нет анаграммы

// Необходимо написать функцию, которая бы принимала массив строк и возвращала бы новый массив.
// Элементами этого массива должны быть строки, для которых не существует анаграмм среди элементов первого массива.

console.log(getUniqueStrs(['atoe', 'otea', 'ben', 'enb', 'baz', 'foo'])) // ['baz', 'foo']

function getUniqueStrs(strs) {
	const counter = new Map()

	for (let str of strs) {
		const serializeStr = [...str].sort().join('')

		if (!counter.has(serializeStr)) {
			counter.set(serializeStr, { count: 1, str })
		} else {
			counter.get(serializeStr).count++
		}
	}

	return [...counter.values()].reduce((acc, { count, str }) => {
		if (count === 1) {
			acc.push(str)
		}
		return acc
	}, [])
}
