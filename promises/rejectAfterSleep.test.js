import { rejectAfterSleep } from './rejectAfterSleep'

describe('rejectAfterSleep', () => {
	test('should reject after specified time with given message', async () => {
		const startTime = Date.now()
		const delay = 100
		const errorMessage = 'Test error'

		try {
			await rejectAfterSleep(delay, errorMessage)
			fail('Expected promise to reject')
		} catch (error) {
			const elapsed = Date.now() - startTime
			expect(error).toBe(errorMessage)
			expect(elapsed).toBeGreaterThanOrEqual(delay)
			expect(elapsed).toBeLessThan(delay + 50)
		}
	})

	test('should reject with string message', async () => {
		const errorMessage = 'Custom error message'

		await expect(rejectAfterSleep(50, errorMessage)).rejects.toBe(
			errorMessage,
		)
	})

	test('should reject with Error object', async () => {
		const error = new Error('Something went wrong')

		await expect(rejectAfterSleep(50, error)).rejects.toBe(error)
	})

	test('should reject with number', async () => {
		const errorCode = 404

		await expect(rejectAfterSleep(50, errorCode)).rejects.toBe(404)
	})

	test('should reject with object', async () => {
		const errorObject = { code: 500, message: 'Server error' }

		await expect(rejectAfterSleep(50, errorObject)).rejects.toEqual(
			errorObject,
		)
	})

	test('should reject with null', async () => {
		await expect(rejectAfterSleep(50, null)).rejects.toBeNull()
	})

	test('should reject with undefined', async () => {
		await expect(rejectAfterSleep(50, undefined)).rejects.toBeUndefined()
	})

	test('should handle zero delay', async () => {
		const startTime = Date.now()

		await expect(rejectAfterSleep(0, 'Immediate error')).rejects.toBe(
			'Immediate error',
		)

		const elapsed = Date.now() - startTime
		expect(elapsed).toBeLessThan(50)
	})

	test('should not resolve', async () => {
		let resolved = false

		rejectAfterSleep(50, 'error')
			.then(() => {
				resolved = true
			})
			.catch(() => {})

		await new Promise(resolve => setTimeout(resolve, 100))
		expect(resolved).toBe(false)
	})
})
