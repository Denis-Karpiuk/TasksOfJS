// Необходимо написать класс, который бы реализовывал функционал логирования ошибок.
// Все глобальные исключения и необработанные промисы должны логировать автоматически.
// Класс должен предоставлять декоратор для функций, который добавляет логирование (при этом исключения не должны останавливаться).

class ErrorLogger {
	decorate() {}
}

const logger = new ErrorLogger()

Promise.reject('haha') // logger перехватит и выведет в консоль

setTimeout(() => {
	throw 'boom!' // logger перехватит и выведет в консоль
}, 100)

const wrappedFn = logger.decorate(function () {
	throw 'bla!' // logger перехватит и выведет в консоль
})

try {
	wrappedFn()
} catch (err) {
	console.log(err === 'bla!') // true
}
