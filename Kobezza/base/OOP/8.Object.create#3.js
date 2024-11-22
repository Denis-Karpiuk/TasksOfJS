// Необходимо написать аналог Object.create с использованием new function

function objectCreate(proto) {
	function F() {}
	F.prototype = proto
	return new F()
}

// Необходимо написать аналог Object.create с использованием new function

objectCreate({ a: 1 })
console.log(objectCreate({ a: 1 }).a)
