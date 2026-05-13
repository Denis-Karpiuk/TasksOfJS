console.log(1)

Promise.resolve()
	.then(() => {
		console.log(2)
		return Promise.resolve(3)
	})
	.then(val => {
		console.log(val)
		setTimeout(() => {
			console.log(4)
		}, 0)
	})

setTimeout(() => {
	console.log(5)
}, 0)

console.log(6)
