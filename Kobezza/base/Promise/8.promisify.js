// Необходимо написать функцию, которая бы принимала функцию ожидающую callback и возвращала новую функцию.
// Новая функция вместо callback должна возвращать Promise.
// Предполагается, что исходная функция принимает callback последним параметром,
// т. е. если функция принимает другие аргументы,
// то они идут ДО callback. Сам callback первым параметром принимает объект ошибки или null,
// а вторым возвращаемое значение (если нет ошибки).

const fs = require('fs')

function openFile(file, cb) {
	fs.readFile(file, cb)
}

const openFilePromise = promisify(openFile)

openFilePromise('./foo.txt').then(
	res => console.log(res.toString()),
	console.error
)

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
