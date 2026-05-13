import { allLimit } from './allLimit.js'

describe('Promise all', () => {
	const promise1 = Promise.resolve('A')
	const promise2 = new Promise(resolve => setTimeout(resolve, 1000, 'B'))
	const promise3 = new Promise(resolve => setTimeout(resolve, 10000, 'C'))
	const promise4 = new Promise(resolve => setTimeout(resolve, 100, 'D'))
	const promise5 = new Promise(resolve => setTimeout(resolve, 100000, 'E'))

	test('Return array with results A, D', async () => {
		const result = await allLimit(
			[promise1, promise2, promise3, promise4, promise5],
			2,
		)
		console.log(result)
		expect(result).toEqual(['A', 'D'])
	})

	test('Return array with empty array', async () => {
		const result = await allLimit([])

		expect(result).toEqual([])
	})

	// test('Reject promise', async () => {
	// 	const promise4 = Promise.resolve('Value1')
	// 	const promise5 = new Promise(resolve =>
	// 		setTimeout(resolve, 200, 'Value2'),
	// 	)
	// 	const promise6 = Promise.reject('Rejected!')

	// 	// ✅ Правильный способ проверить reject
	// 	await expect(allLimit([promise4, promise5, promise6]), 2).rejects.toBe(
	// 		'Rejected!',
	// 	)
	// })
})
