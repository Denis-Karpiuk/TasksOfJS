import { sleep } from './sleep'

describe('sleep', () => {
	test('should resolve after specified time', async () => {
		const startTime = Date.now()
		const delay = 100

		await sleep(delay)

		const endTime = Date.now()
		const elapsed = endTime - startTime

		expect(elapsed).toBeGreaterThanOrEqual(delay)
		expect(elapsed).toBeLessThan(delay + 50) // Допуск 50ms
	})

	test('should resolve with undefined', async () => {
		const result = await sleep(50)
		expect(result).toBeUndefined()
	})

	test('should handle zero milliseconds', async () => {
		const startTime = Date.now()

		await sleep(0)

		const elapsed = Date.now() - startTime
		expect(elapsed).toBeLessThan(50)
	})

	test('should not resolve immediately', async () => {
		let resolved = false

		sleep(100).then(() => {
			resolved = true
		})

		expect(resolved).toBe(false)

		await sleep(150)
		expect(resolved).toBe(true)
	})

	test('should work with then callback', done => {
		const startTime = Date.now()

		sleep(100).then(() => {
			const elapsed = Date.now() - startTime
			expect(elapsed).toBeGreaterThanOrEqual(100)
			done()
		})
	})

	test('should handle multiple sleeps sequentially', async () => {
		const startTime = Date.now()

		await sleep(50)
		const time1 = Date.now() - startTime

		await sleep(50)
		const time2 = Date.now() - startTime

		expect(time1).toBeGreaterThanOrEqual(50)
		expect(time2).toBeGreaterThanOrEqual(100)
		expect(time2).toBeGreaterThan(time1)
	})

	test('should handle multiple sleeps in parallel', async () => {
		const startTime = Date.now()

		await Promise.all([sleep(100), sleep(100), sleep(100)])

		const elapsed = Date.now() - startTime
		// Все три выполнятся параллельно, поэтому ~100ms, а не 300ms
		expect(elapsed).toBeGreaterThanOrEqual(100)
		expect(elapsed).toBeLessThan(200)
	})

	test('should maintain order with multiple sleeps', async () => {
		const order = []

		await sleep(50).then(() => order.push(1))
		await sleep(30).then(() => order.push(2))
		await sleep(10).then(() => order.push(3))

		expect(order).toEqual([1, 2, 3])
	})

	test('should work with large delay values', async () => {
		const startTime = Date.now()
		const delay = 500

		await sleep(delay)

		const elapsed = Date.now() - startTime
		expect(elapsed).toBeGreaterThanOrEqual(delay - 10)
	})
})
