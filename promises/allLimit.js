export const allLimit = (iterable, limit) => {
	return new Promise((resolve, reject) => {
		const arr = [...iterable]
		const results = []

		if (!arr.length) {
			resolve([])
			return
		}

		arr.forEach(el => {
			Promise.resolve(el)
				.then(value => {
					results.push(value)
				})
				.catch(err => {
					reject(err)
				})
				.finally(() => {
					if (results.length === limit) {
						resolve(results)
					}
				})
		})
	})
}
