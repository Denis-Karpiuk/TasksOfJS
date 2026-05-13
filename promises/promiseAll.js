export const promiseAll = iterable => {
	return new Promise((resolve, reject) => {
		const results = []
		let completedCount = 0

		const arr = [...iterable]

		if (!arr.length) {
			resolve(results)
			return
		}

		arr.forEach((el, index) => {
			Promise.resolve(el).then(
				value => {
					results[index] = value
					completedCount++

					if (completedCount === arr.length) {
						resolve(results)
					}
				},
				error => {
					reject(error)
				},
			)
		})
	})
}
