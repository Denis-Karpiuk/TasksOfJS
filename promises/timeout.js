export const timeout = (promise, time) => {
	return Promise.race([
		promise,
		new Promise((_, reject) => {
			setTimeout(() => {
				reject(new Error('Timeout'))
			}, time)
		}),
	])
}

timeout(
	new Promise(resolve => {
		setTimeout(() => resolve('resolve'), 5000)
	}),
	2000,
).then(console.log, console.error)
