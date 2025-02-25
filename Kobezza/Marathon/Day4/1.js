// ## Реализация функции promisify
// Необходимо написать функцию, которая бы создавал функции с Promise API на основе функций с callback API.
// Формат callback функции ожидается в стиле Node.js, где первый аргумент - это объект ошибки.

function promisify(fn) {
	return function (...args) {
		return new Promise((resolve, reject) => {
			if (args.length !== fn.length - 1) {
				throw new Error('Неверное количество аргументов')
			}

			fn(...args, (err, res) => {
				if (err) {
					reject(err)
				} else {
					resolve(res)
				}
			})
		})
	}
}

function cbDiv(a, b, cb) {
	if (b === 0) {
		cb(new TypeError('Нельзя делить на 0'))
	} else {
		cb(null, a / b)
	}
}

const promiseDiv = promisify(cbDiv)

promiseDiv(1, 2).then(console.log) // 0.5
promiseDiv(1, 0).catch(console.log) // TypeError('Нельзя делить на 0')
