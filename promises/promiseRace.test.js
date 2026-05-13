import { promiseRace } from './promiseRace'

describe('Promise Race', () => {
	const promise1 = new Promise(resolve => setTimeout(resolve, 200, 'A'))
	const promise2 = new Promise(resolve => setTimeout(resolve, 100, 'B'))

	test('Return results B', async () => {
		const result = await promiseRace([promise2, promise1])

		expect(result).toBe('B')
	})

	test('Reject promise', async () => {
		const promise5 = new Promise(resolve =>
			setTimeout(resolve, 200, 'Value2'),
		)
		const promise6 = Promise.reject('Rejected!')

		// ✅ Правильный способ проверить reject
		await expect(promiseRace([promise5, promise6])).rejects.toBe(
			'Rejected!',
		)
	})
})
