const format = (string, obj) => {
	return string.replace(/\${([^}]+)}/g, (_, expr) => {
		return Function(
			...Object.keys(obj),
			`return ${expr}`
		)(...Object.values(obj))
	})
}

console.log(
	format('Hello ${name}! May age is ${age * 2}.', { name: 'Bob', age: 12 })
)
