// ## Написать асинхронный семафор

// Необходимо написать функцию, которая бы создавала "асинхронный семафор" на основе переданной
//  функции и набора флагов,как это показано в примере ниже.

const semaphore = createsAsyncSemaphore(
	() => {
		console.log('Boom!')
	},
	'foo',
	'bar'
)

semaphore('foo')
semaphore('bar') // 'Boom!'

// Эта функция не будет выполняться
semaphore()

function createsAsyncSemaphore(fn, ...flags) {
	const conditionals = new Set(flags)

	let isInvoked = false

	return function (flag) {
		conditionals.delete(flag)

		if (isInvoked || conditionals.size > 0) {
			return
		}

		isInvoked = true
		return fn.call(this)
	}
}
