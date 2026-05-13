export const promiseAny = iterable => {
	return new Promise((resolve, reject) => {
		const errors = []
		let rejectedCount = 0

		const arr = [...iterable]

		if (!arr.length) {
			reject(new AggregateError(errors, 'All promises were rejected'))
		}

		arr.forEach((el, index) => {
			Promise.resolve(el)
				.then(value => {
					resolve(value)
				})
				.catch(error => {
					errors[index] = error
					rejectedCount++

					if (rejectedCount === arr.length) {
						reject(
							new AggregateError(
								errors,
								'All promises were rejected',
							),
						)
					}
				})
		})
	})
}
