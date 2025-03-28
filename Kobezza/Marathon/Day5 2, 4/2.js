// ## Написать простейший EventEmitter
// Должна быть поддержка множественных и одноразовых событий и отмены сразу всех событий по имени.

const ee = new EventEmitter()

ee.once('foo', console.log) // Сработает только один раз

ee.emit('foo', 1)
ee.emit('foo', 2)

ee.off('foo', console.log) // Отмена конкретного обработчика события по ссылке
ee.off('foo')
