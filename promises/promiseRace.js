export const promiseRace = iterable => {
	return new Promise((resolve, reject) => {
		const arr = [...iterable]

		arr.forEach(el => {
			Promise.resolve(el)
				.then(value => {
					resolve(value)
				})
				.catch(error => {
					reject(error)
				})
		})
	})
}
