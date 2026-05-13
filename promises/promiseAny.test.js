import { promiseAny } from './promiseAny'

describe('Promise Any', () => {
	const promise1 = Promise.resolve('A')
	const promise2 = Promise.resolve('B')
	const promise3 = new Promise(resolve => setTimeout(resolve, 100, 'C'))

	test('Return  value B', async () => {
		const result = await promiseAny([promise2, promise1, promise3])

		expect(result).toEqual('B')
	})

	test('Return All promises were rejected for empty array ', async () => {
		try {
			await promiseAny([])
		} catch (error) {
			expect(error).toBeInstanceOf(AggregateError)
			expect(error.errors).toEqual([])
			expect(error.message).toBe('All promises were rejected')
		}
	})

	test('Return Value1 from 3 promises', async () => {
		const promise4 = Promise.resolve('Value1')
		const promise6 = Promise.reject('Rejected!')

		try {
			const result = await promiseAny([promise6, promise4, promise6])
			expect(result).toEqual('Value1')
		} catch (error) {
			expect(error).toBeInstanceOf(AggregateError)
			expect(error.errors).toEqual(['Rejected!ss', 'Rejected!'])
			expect(error.message).toBe('All promises were rejected')
		}
	})

	test('Return all errors', async () => {
		const promise1 = Promise.reject('Rejected1!')
		const promise2 = Promise.reject('Rejected2!')
		const promise3 = Promise.reject('Rejected3!')

		try {
			await promiseAny([promise1, promise2, promise3])
		} catch (error) {
			expect(error).toBeInstanceOf(AggregateError)
			expect(error.errors).toEqual([
				'Rejected1!',
				'Rejected2!',
				'Rejected3!',
			])
			expect(error.message).toBe('All promises were rejected')
		}
	})
})
