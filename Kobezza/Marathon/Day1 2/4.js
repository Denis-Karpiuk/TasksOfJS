// ## Реализация функции аналогичной Promise.allSettled
// Необходимо написать функцию, которая бы повторяло поведение Promise.allSettled.

const allSettled = iterable => {
	return new Promise(resolve => {
		const data = [...iterable]
		const result = []
		let count = 0

		data.forEach((el, index) => {
			Promise.resolve(el)
				.then(
					value => {
						result[index] = { status: 'fulfilled', value }
					},
					reason => {
						result[index] = {
							status: 'rejected',
							reason,
						}
					}
				)
				.finally(() => {
					count++
					if (count === data.length) {
						resolve(result)
					}
				})
		})
	})
}

allSettled([1, Promise.resolve(2), Promise.reject(3)]).then(([v1, v2, v3]) => {
	console.log(v1) // {status: 'fulfilled', value: 1}
	console.log(v2) // {status: 'fulfilled', value: 2}
	console.log(v3) // {status: 'rejected', reason: 3}
})
