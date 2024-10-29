// Необходимо написать функцию, которая идентична Promise.allSettled.
const allSettled = array =>
	new Promise(resolve => {
		const results = []
		let completed = 0

		array.forEach((element, index) => {
			Promise.resolve(element)
				.then(
					value => {
						results[index] = { status: 'fulfilled', value }
					},
					reason => {
						results[index] = { status: 'rejected', reason }
					}
				)
				.finally(() => {
					completed++
					if (completed === array.length) {
						resolve(results)
					}
				})
		})
	})

const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 1000))
// const promise2 = new Promise((_, reject) =>
// 	setTimeout(() => reject(new Error('Error promise 2')), 2000)
const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 2000))
const promise3 = new Promise(resolve => setTimeout(() => resolve(3), 3000))

allSettled([promise1, promise2, promise3, 4, 5, 6]).then(console.log)
