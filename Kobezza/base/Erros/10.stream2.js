// Необходимо расширить класс из предыдущего задания добавив в него возможность уничтожать созданные потоки событий.
// При уничтожении события внутри циклов обработчиков должно быть сгенерировано исключение.

const ee = new EventEmitter()

;(async () => {
	try {
		for await (const err of ee.errors()) {
			console.log(err)
		}
	} catch (err) {
		console.log(err.message === 'The emitter was destroyed')
	}
})()

ee.emit('error', new Error('Boom!'))

ee.destroy()
