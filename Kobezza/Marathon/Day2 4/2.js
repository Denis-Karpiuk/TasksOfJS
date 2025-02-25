// ## Установка свойства по сложному пути в объекте
// Необходимо написать функцию, которая бы устанавливало переданное значение объекту по заданному пути.

// Два этапа:
// 1. Если ключ последний, то установить значение
// 2. Если нет, т

const obj = {}

const setByPath = (target, string, value) => {
	const values = string.split('.')

	for (let i = 0; i < values.length; i++) {
		const key = values[i]

		if (i === values.length - 1) {
			target[key] = value
		}

		target[key] ??= {}
		target = target[key]
	}
}

setByPath(obj, 'foo.bar.baz', 1)
setByPath(obj, 'foo.bla', 2)

console.log(obj) // {foo: {bar: 1, bla: 2}}
