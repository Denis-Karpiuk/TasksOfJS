// Необходимо написать класс EventEmitter с методами on/off/emit,
// который поддерживает механизм погружения и всплытия событий подобно нативному EventTarget.
// Методы должн on возвращать ссылку, которую можно передать в off, для удаляения обработчика.
// Допускается также удалять обработчики по имени события.

const parent = new EventEmitter()
const ev = new EventEmitter(parent)

ev.emit('foo', { bla })

parent.on.capture('foo', e => {
	console.log(1)
})

ev.on.capture('foo', e => {
	console.log(2)
})

ev.on('foo', e => {
	console.log(3)
})

parent.on('foo', e => {
	console.log(4)
})
