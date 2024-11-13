// Необходимо написать класс EventEmitter, который бы реализовывал семантику:
// если испускается событие, у которого данные - это наследник Error, но у него нет слушателей, то будет сгенерировано исключение.

class EventEmitter {
	on() {}

	off() {}

	emit() {}
}

const ee = new EventEmitter()

try {
	ee.emit('error', new Error('Ooops'))
} catch (err) {
	console.log(err.message === 'Ooops') // true
}

try {
	ee.emit('haha', new TypeError('Ooops'))
} catch (err) {
	console.log(err.message === 'Ooops') // true
}

try {
	ee.emit('error', 'Ooops')
} catch (err) {
	console.log(err.message === 'Ooops') // Этот код никогда не вызовется
}

try {
	ee.on('error', err => {
		console.log('Gotcha!', err)
	})

	ee.emit('error', new Error('Ooops'))
} catch (err) {
	console.log(err.message === 'Ooops') // Этот код никогда не вызовется
}
