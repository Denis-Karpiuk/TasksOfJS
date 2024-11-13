// Необходимо написать класс Result, который бы представлял обёртку над данными, которых могут содержать ошибку.
// У контейнера также должен быть метод unwrap, который либо просто возвращает ошибку, либо кидает исключение (есть ошибка).
// Контейнер должен реализовывать thenable интерфейс.

// Данных нет
const data1 = new Result(new Error('Boom!'))

console.log(data.isError) // true

try {
	data1.unwrap()
} catch (err) {
	console.log(err.message === 'Boom!')
}

data1
	.then(console.log) // Не вызовется
	.catch(err => `${err.message} больше не ошибка`)
	.then(console.log) // Boom! больше не ошибка
