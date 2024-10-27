// Необходимо написать статический метод для Promise, который бы работал как Promise.all,
// но с возможностью задания лимита на выполнения "одновременных" задач.
// В качестве первого параметра, метод должен принимать Iterable объект с функциями, которые возвращают Promise.
// Сам метод также возвращает Promise.

// Одновременно может быть не более 2-х запросов
allLimit(
	[
		fetch.bind(null, 'url1'),
		fetch.bind(null, 'url2'),
		fetch.bind(null, 'url3'),
		fetch.bind(null, 'url4'),
	],
	2
).then(([data1, data2, data3, data4]) => {
	console.log(data1, data2, data3, data4)
})
