// Необходимо расширить класс из предыдущего задания добавив в него возможность "всплытия" ошибки до другого EventEmitter.
// Если ошибка не обрабатывается в текущем EventEmitter, то она всплывает до родителя (если таковой есть), а если нет - кидает исключение.

const parent = new EventEmitter()

const ee = new EventEmitter(parent)

parent.on('error', err => {
	console.log(err.message)
})

ee.emit('error', new Error('Boom!'))

try {
	ee.emit('error2', new Error('Boom2!'))
} catch (err) {
	console.log(err.message === 'Boom2!') // true
}
