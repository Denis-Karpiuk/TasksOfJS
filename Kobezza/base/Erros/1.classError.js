// Необходимо написать собственный класс ошибки, который бы представлял единый интерфейс для любых ошибок,
// но поддерживал возможность получения "оригинальной" ошибки, если таковая есть.

const err1 = new MyError('Simple error')
const err2 = new MyError('Wrapped error', new TypeError('Indalid data type'))
console.log(err2.cause.message === 'Indalid data type')
