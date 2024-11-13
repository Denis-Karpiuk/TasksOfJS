// Написать функцию, которая принимает Iterable объект и максимальное количество итераций и возвращает итератор,
// который завершиться после достижения нужного количества итераций. Генераторы использовать нельзя.

const take = (data, count) => {
	const iterator = data[Symbol.iterator]()

	let completedCount = 0

	return {
		next() {
			if (completedCount < count) {
				completedCount++

				const { done, value } = iterator.next()

				return { done: done ?? completedCount === count, value }
			}

			return { done: true, value: undefined }
		},
		[Symbol.iterator]() {
			return this
		},
	}
}

// [1, 2]
console.log(Array.from(take([1, 2, 3], 2)))
