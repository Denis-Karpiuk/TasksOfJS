// Необходимо написать функцию, которая идентична Promise.race.
// Принимает итерируемый объект, дожидается завершения первого выполненного промиса, возвращает результат первого выполненого промиса value or Error

const race = array => {
	return new Promise((resolve, reject) => {
		for (let promise of array) {
			Promise.resolve(promise).then(
				value => {
					resolve(value)
				},
				error => reject(error)
			)
		}
	})
}

const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 1000))
const promiseErr = new Promise((_, reject) =>
	setTimeout(() => reject('Error promise 2'), 500)
)
const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 2000))
const promise3 = new Promise(resolve => setTimeout(() => resolve(3), 3000))

const successPromises = [promise1, promise2, promise3]
const successErrorPromises = [promise1, promiseErr, promise3, 3, 4]

race(successErrorPromises).then(
	value => console.log(value),
	err => console.log(err)
)
