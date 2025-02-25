// Реализовать zip для синхронных Iterable объектов
// Общее количество кортежей берется по минимальному значению.
// Функция должна возвращать IterableIterator.

function zip(...iterables) {
	const iters = [...iterables].map(el => el[Symbol.iterator]())

	return {
		[Symbol.iterator]() {
			return this
		},

		next() {
			const value = []

			for (const [index, iter] of iters.entries()) {
				const cur = iter.next()

				if (cur.done) {
					return { done: true, value: undefined }
				}

				value[index] = cur.value
			}

			return { done: false, value }
		},
	}
}

console.log(...zip(new Set([1, 2]), ['a', 'b', 'z'], '...')) // [1, 'a', '.'] [2, 'b', '.']
