//В качестве колбэка в будет стрелочная функция будет искать this в лексическом окружении, т.е там где объявлена
function debounce(func, wait) {
	let timerId = null

	return function (...args) {
		clearTimeout(timerId)

		timerId = setTimeout(() => {
			return func.apply(this, args)
		}, wait)
	}
}

// Если в качестве колбэка будет function, тогда нужно будет отдельно сохранить this в переменную и тогда он будет доступна через замыкание
function debounce(func, wait) {
	let timerId = null

	return function (...args) {
		clearTimeout(timerId)

		const context = this

		timerId = setTimeout(function () {
			return func.apply(context, args)
		}, wait)
	}
}
