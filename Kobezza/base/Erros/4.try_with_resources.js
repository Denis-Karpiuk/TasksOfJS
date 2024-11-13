// Необходимо написать функцию, которая принимает Iterable объектов и функцию callback.
// В случае возникновения исключения в момент работы callback, а также после его успешного выполнения
// у каждого из переданных объектов должен вызывать метод destructor. При этом исключение все равно должно быть проброшено наверх.
// Если в момент вызова метода destructor выброшено еще одно исключение, то оно не должно блокировать вызовы остальных деструкторов.

const resource1 = (() => {
	const cb = () => {
		console.log('Clicked!')
	}

	document.addEventListener('click', cb)

	return {
		destroyed: false,

		destructor() {
			this.destroyed = true
			throw 'Oops!'
			document.removeEventListener('click', cb)
		},
	}
})()

const resource2 = (() => {
	const cb = () => {
		console.log('Clicked again!')
	}

	document.addEventListener('click', cb)

	return {
		destroyed: false,

		destructor() {
			this.destroyed = true
			document.removeEventListener('click', cb)
		},
	}
})()

try {
	tryWith([resource1, resource2], (resource1, resource2) => {
		throw 'Bam!'
	})
} catch (err) {
	console.log(err === 'Bam!') // true
	console.log(resource1.destroyed) // true
	console.log(resource2.destroyed) // true
}
