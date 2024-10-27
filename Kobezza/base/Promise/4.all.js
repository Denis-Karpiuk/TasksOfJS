// Необходимо написать функцию, которая идентична Promise.all.

const promiseAll = array => {
	return new Promise((resolve, reject) => {
		const result = []
		let completedPromises = 0

		array.forEach((element, index) => {
			// т.к массив может содержать не только промисы, но и примитивные значения (строки, числа), то используем Promise.resolve для преобразования примитивного значения в промис, но из за этого в массив попадает undefined пока промис не выполнится, поэтому мы не можем использовать finally для проверки количества выполненных промисов и завершения родительского промиса:
			// * 	if (result.length === array.length) {
			// * 	resolve(result)
			// * }

			Promise.resolve(element).then(
				value => {
					// используем индекс для сохранения порядка выполнения
					result[index] = value
					// увеличиваем количество успешно выполненных промисов
					completedPromises++
					// если все промисы выполнены, то вызываем resolve родительского промиса
					if (completedPromises === array.length) {
						resolve(result)
					}
				},
				// если выполнение завершено с ошибкой, то вызываем reject родительского промиса
				error => reject(error)
			)
		})
	})
}

const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 1000))
// const promise2 = new Promise((_, reject) =>
// 	setTimeout(() => reject(new Error('Error promise 2')), 2000)
const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 2000))
const promise3 = new Promise(resolve => setTimeout(() => resolve(3), 3000))

promiseAll([promise1, promise2, promise3, 56, 'hello'])
	.then(console.log)
	.catch(err => console.error(err.message))
