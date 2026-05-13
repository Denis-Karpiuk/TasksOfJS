import { promisify } from './promisify'

describe('promisify', () => {
	describe('Basic functionality', () => {
		test('should convert callback function to promise-based', async () => {
			function add(a, b, cb) {
				cb(null, a + b)
			}

			const addPromise = promisify(add)
			const result = await addPromise(2, 3)

			expect(result).toBe(5)
		})

		test('should reject when callback returns error', async () => {
			function fail(cb) {
				cb(new Error('Something went wrong'))
			}

			const failPromise = promisify(fail)

			try {
				await failPromise()
			} catch (error) {
				expect(error.message).toBe('Something went wrong')
			}
		})
	})

	describe('Real timers tests (без fake timers)', () => {
		test('should resolve after timeout', async () => {
			function delay(ms, cb) {
				setTimeout(() => cb(null, 'done'), ms)
			}

			const delayPromise = promisify(delay)
			const startTime = Date.now()
			const result = await delayPromise(100)
			const elapsed = Date.now() - startTime

			expect(result).toBe('done')
			expect(elapsed).toBeGreaterThanOrEqual(100)
		})

		test('should handle multiple delays', async () => {
			function wait(ms, cb) {
				setTimeout(() => cb(null, ms), ms)
			}

			const waitPromise = promisify(wait)

			const results = await Promise.all([
				waitPromise(50),
				waitPromise(30),
				waitPromise(40),
			])

			expect(results).toEqual([50, 30, 40])
		})
	})
})
