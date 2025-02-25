// ## Реализовать функцию преобразования CamelCase в dash-style

// Необходимо создать функцию, которая бы принимала строку в CamelCase и возвращала бы её вариант в dash-style.

const isLowerCase = char => {
	if (typeof char !== 'string') {
		return false
	}

	return char === char.toLocaleLowerCase()
}

const isRegister = char => {
	return !isLowerCase(char) || char !== char.toUpperCase()
}

console.log(dasherize('createDocumentFragment')) // 'create-document-fragment'
console.log(dasherize('SuperMAN')) // 'super-man'
console.log(dasherize('VirtualDOMFragment')) // 'virtual-dom-fragment'
console.log(dasherize('Some123VALUE10')) // 'some123-value-10'

function dasherize(str) {
	let result = ''

	const data = [...str]

	for (let i = 0; i < data.length; i++) {
		const isFirstChar = i === 0
		const isLastChar = i === data.length - 1
		const currentChar = data[i]
		const nextChar = data[i + 1]

		if (isLowerCase(currentChar)) {
			result += currentChar

			if (
				isLowerCase(currentChar) &&
				!isLowerCase(nextChar) &&
				!isLastChar
			) {
				result += '-'
			}
		} else {
			const canDash = !isFirstChar && !result.endsWith('-')

			if (canDash && isLowerCase(nextChar) && isRegister(nextChar)) {
				result += '-'
			}

			result += currentChar.toLocaleLowerCase()

			if (canDash && !isRegister(nextChar)) {
				result += '-'
			}
		}
	}

	return result
}
