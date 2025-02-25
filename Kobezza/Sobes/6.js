console.log(1)

setTimeout(function timeout() {
	console.log('Таймаут')
}, 0)

new Promise(function (resolve, reject) {
	console.log('Promise')

	setTimeout(() => {
		console.log(777)
		resolve()
	}, 0)
})
	.then(() => {
		console.log('then1')
	})
	.then(() => {
		console.log('then2')
	})

console.log(4)

setTimeout(() => {
	console.log('timeOut2')
}, 0)
