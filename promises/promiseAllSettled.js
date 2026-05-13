export const promiseAllSettled = iterable => {
	return new Promise(resolve => {
		const arr = [...iterable]
		const results = []
		let completed = 0

		if (!arr.length) {
			resolve(results)
		}

		arr.forEach((el, index) => {
			Promise.resolve(el)
				.then(value => {
					results[index] = { status: 'fulfilled', value }
				})
				.catch(reason => {
					results[index] = { status: 'rejected', reason }
				})
				.finally(() => {
					completed++

					if (completed === arr.length) {
						resolve(results)
					}
				})
		})
	})
}
