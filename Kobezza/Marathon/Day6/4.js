// ## Реализовать функцию waterfall для callback функций

// Необходимо создать функцию для композиции асинхронного кода на callback функциях,
// которая работает как показано на примере.

function waterfall(iterable, resultCb) {
	const iter = iterable[Symbol.iterator]()

	let args = []

	function next() {
		const step = iter.next()

		if (step.done) {
			resultCb(null, ...args)
			return
		}

		step.value(...args, (err, ...newArgs) => {
			if (err) {
				resultCb(err)
				return
			}

			args = newArgs
			next()
		})
	}

	next()
}

waterfall(
	[
		cb => {
			cb(null, 'one', 'two')
		},

		(arg1, arg2, cb) => {
			console.log(arg1) // one
			console.log(arg2) // two
			cb(null, 'three')
		},

		(arg1, cb) => {
			console.log(arg1) // three
			cb(null, 'done')
		},
	],
	(err, result) => {
		console.log(result) // done
	}
)

waterfall(
	new Set([
		cb => {
			cb('ha-ha!')
		},

		(arg1, cb) => {
			cb(null, 'done')
		},
	]),
	(err, result) => {
		console.log(err) // ha-ha!
		console.log(result) // undefined
	}
)
