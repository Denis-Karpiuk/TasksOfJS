// ## Сериализация нестандартных объектов

// Необходимо написать функцию, которая бы позволяла преобразовать заданные JS объекты в строку и обратно.

const original = {
	myDate: new Date(),
	mySet: new Set([1, 2, 3]),
	myMap: new Map([[new Date(), { a: 1 }]]),
}

const str = serialize(original)

// Объект должен иметь аналогичную структуру с original

console.log(parse(str))

function serialize(data) {
	return JSON.stringify(data, (key, value) => {
		if (value instanceof Date) {
			return `[[DATA]]:Date;${value.valueOf()}`
		}

		if (value instanceof Map || value instanceof Set) {
			return `[[DATA]]:${value.constructor.name};${serialize([...value])}`
		}

		return value
	})
}

function parse(string) {
	return JSON.parse(string, (key, value) => {
		if (typeof value === 'string' && value.startsWith('[[DATA]]')) {
			const [_, type, data] = /^\[\[DATA]]:(.*?);(.*)/.exec(value)
			return Function('data', `return new ${type}(data)`)(parse(data))
		}
	})
}
