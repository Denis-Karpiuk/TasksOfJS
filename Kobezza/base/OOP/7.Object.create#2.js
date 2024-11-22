// Необходимо написать аналог Object.create с использованием Object.setPrototypeOf

function objectCreate(obj) {
	return Object.setPrototypeOf({}, obj)
}

const obj = objectCreate({ a: 1 })

console.log(obj.a)
