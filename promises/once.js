const button = document.querySelector('button')

export const once = (el, eventName) => {
	return new Promise(resolve => {
		el.addEventListener(eventName, event => resolve(event))
	})
}

once(button, 'click').then(console.log)
