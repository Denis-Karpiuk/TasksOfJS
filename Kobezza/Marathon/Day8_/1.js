// # День 8

// ## Написать функцию throttle

// Необходимо написать функцию, которая бы принимала другую функцию и возвращала её throttle версию.

function laugh(...args) {
	console.log('Ha-ha!', ...args)
}

const throttledLaugh = throttle(laugh, 200)

throttledLaugh()
setTimeout(() => throttledLaugh(), 500)
throttledLaugh()
throttledLaugh()
throttledLaugh()

function throttle(fn, delay) {
	let timer, lastArgs

	return function wrapper(...args) {
		lastArgs = args

		if (timer == null) {
			fn.apply(this, args)

			timer = setTimeout(() => {
				timer = undefined

				if (lastArgs !== args) {
					wrapper.apply(this, lastArgs)
				}
			}, delay)
		}
	}
}
