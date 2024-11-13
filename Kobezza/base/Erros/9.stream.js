// Необходимо расширить класс из предыдущего задания добавив в него возможность предоставления потока событий в виде AsyncIterable.
// У обычных событий и ошибок должны быть разные потоки.

const ee = new EventEmitter()

;(async () => {
	for await (const err of ee.errors()) {
		console.log(err)
	}
})()

;(async () => {
	for await (const err of ee) {
		console.log(err)
	}
})()

ee.emit('error', new Error('Boom!'))
ee.emit('not-error', 'some data')
