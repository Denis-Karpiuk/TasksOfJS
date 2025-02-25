// Реализовать функцию setImmediate, которая бы предоставляла API схожее с setTimeout,
// но создавала бы микротаску.

const immediateTimers = new Map()

function setImmediate(cb) {
	const timer = immediateTimers.size + 1

	immediateTimers.set(timer, true)

	queueMicrotask(() => {
		if (immediateTimers.get(timer) === false) {
			return
		}

		cb()
	})

	return timer
}

function clearImmediate(id) {
	immediateTimers.set(id, false)
}

setTimeout(() => {
	console.log(3)
}, 0)

setImmediate(() => {
	console.log(1)
})

const timer = setImmediate(() => {
	console.log(2)
})

clearImmediate(timer)
