// ## Что и в каком порядке выведется в консоль, и почему?

console.log('foo')

setTimeout(() => {
	console.log('bar')
}, 0)

queueMicrotask(() => {
	console.log('baz')
	Promise.resolve()
		.then(() => console.log('ban'))
		.then(() => console.log('ban2'))
})

new Promise(resolve => {
	console.log('bla')
	resolve('baf')
}).then(console.log)

console.log('bak')
