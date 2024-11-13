// Необходимо написать класс Option, который бы представлял обёртку над данными, которых может не быть.
// У контейнера также должен быть метод unwrap, который либо просто возвращает данные, либо кидает исключение (данных нет).
// Контейнер должен реализовывать thenable интерфейс.

// Данных нет
const data1 = new Option(Option.None)

console.log(data.isNone) // true

try {
	data1.unwrap()
} catch (err) {
	console.log(err.message === 'The container has no data')
}

data1
	.then(console.log) // Не вызовется
	.or(new Option('Данные есть'))
	.then(console.log) // Данные есть
