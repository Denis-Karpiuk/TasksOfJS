// Необходимо написать функцию возвращающую Promise, который зарезолвится через заданное количество миллисекунд

const sleep = time => {
	return new Promise(resolve => {
		setTimeout(resolve, time)
	})
}

sleep(5000).then(() => {
	console.log('Я проснулся!')
})
