import { promiseAll } from './promiseAll'

describe('Promise all', () => {
	const promise1 = Promise.resolve('A')
	const promise2 = Promise.resolve('B')
	const promise3 = new Promise(resolve => setTimeout(resolve, 100, 'C'))

	test('Return array with results 1, 2, 5', async () => {
		const result = await promiseAll([promise1, promise2, promise3])

		expect(result).toEqual(['A', 'B', 'C'])
	})

	test('Return array with empty array', async () => {
		const result = await promiseAll([])

		expect(result).toEqual([])
	})

	test('Reject promise', async () => {
		const promise4 = Promise.resolve('Value1')
		const promise5 = new Promise(resolve =>
			setTimeout(resolve, 200, 'Value2'),
		)
		const promise6 = Promise.reject('Rejected!')

		// ✅ Правильный способ проверить reject
		await expect(promiseAll([promise4, promise5, promise6])).rejects.toBe(
			'Rejected!',
		)
	})
})
