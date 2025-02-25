setTimeout(() => {
	console.log('text')
}, 0)

console.log(1)

new Promise(resolve => {
	console.log('promise')

	setTimeout(() => {
		console.log('777')
		resolve()
	}, 0)
})
	.then(() => {
		console.log('then1')
	})
	.then(() => {
		console.log('then2')
	})

console.log(2)

setTimeout(() => {
	console.log('text2')
}, 0)

// 1, promise, 2, text, 777, then1, then2, text2
