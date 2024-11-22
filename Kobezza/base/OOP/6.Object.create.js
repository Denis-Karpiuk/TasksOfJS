// Необходимо написать аналог Object.create с использованием __proto__

function objectCreate(obj) {
	return { __proto__: obj }
}

const obj = objectCreate({ a: 1 })
console.log(obj.a)
