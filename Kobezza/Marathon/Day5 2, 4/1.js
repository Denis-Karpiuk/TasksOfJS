// ## Написать функцию debounce
// Необходимо написать функцию,
// которая бы принимала другую функцию и возвращала её debounce версию.

function laugh() {
	console.log('Ha-ha!')
}

const debouncedLaugh = debounce(laugh, 300)

debouncedLaugh()
debouncedLaugh()
debouncedLaugh()
debouncedLaugh()
debouncedLaugh()

function debounce(fn, delay) {
	let timer

	return function (...args) {
		if (timer) {
			clearTimeout(timer)
			timer = null
		}

		timer = setTimeout(() => {
			fn.apply(this, args)
		}, delay)
	}
}
