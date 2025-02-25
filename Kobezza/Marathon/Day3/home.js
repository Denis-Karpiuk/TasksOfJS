const immediateTimers = new Map()

function setImmediate(cb) {
	let timerId = immediateTimers.size + 1

	immediateTimers.set(timerId, true)

	queueMicrotask(() => {
		if (immediateTimers.get(timerId) === false) {
			return
		}

		cb()
	})
	return timerId
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
