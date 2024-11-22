// Необходимо сделать конкретному массиву метод toString, который возвращает первый элемент .. последний.

function addToString(arr) {
	return Object.create(arr, {
		toString: {
			value: function () {
				if (!this.length) return ''
				if (this.length === 1) return this[0]

				return this[0] + '..' + this[this.length - 1]
			},
		},
	})
}

// 1..4
console.log(addToString([1, 2, 3, 4]).toString())

// 1
console.log(addToString([1]).toString())

//
console.log(addToString([]).toString())
