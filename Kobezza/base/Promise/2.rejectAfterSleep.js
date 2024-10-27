// Необходимо написать функцию возвращающую Promise, который зареджектиться через заданное количество миллисекунд.
// Вторым аргументов функция принимает объект ошибки.

const rejectAfterSleep = (time, message) => {
	return new Promise((_, reject) => {
		setTimeout(() => reject(message), time)
	})
}

rejectAfterSleep(2000, 'boom!').catch(err => {
	console.log(err)
})
