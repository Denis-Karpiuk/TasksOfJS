import { promiseAllSettled } from './promiseAllSettled'

describe('allSettled', () => {
	test('Return array with rejected and values', async () => {
		const result = await promiseAllSettled([1, Promise.reject('Reject'), 3])

		expect(result).toEqual([
			{ status: 'fulfilled', value: 1 },
			{ status: 'rejected', reason: 'Reject' },
			{ status: 'fulfilled', value: 3 },
		])
	})

	test('Return empty arr for empty arr', async () => {
		const result = await promiseAllSettled([])

		expect(result).toEqual([])
	})
})
