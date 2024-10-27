// Необходимо написать функцию, которая принимает объект Promise и некоторое количество миллисекунд
// и возвращает новый Promise.
// Если переданный Promise не успевает зарезолвится до истечения этого времени,
// то результирующий Promise должен быть отклонён с ошибкой new Error('Timeout').

const fakeFetch = new Promise(resolve =>
	setTimeout(() => resolve("I'm fine"), 2000)
)

const timeout = (promise, time) =>
	Promise.race([
		promise,
		new Promise((_, reject) => setTimeout(() => reject('Time out'), time)),
	])

timeout(fakeFetch, 1000).then(console.log, console.log)
