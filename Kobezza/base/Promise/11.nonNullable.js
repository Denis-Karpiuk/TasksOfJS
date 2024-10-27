// Нужно написать функцию, которая принимает функцию и возвращает новую.
// Новая функция в качестве результата возвращает Promise.
// Если новой функции передать null в качестве аргументов, то промис должен быть зареджекчен.

function sum(a, b) {
	return a + b
}

function prod(a, b) {
	return a * b
}

const sum2 = nonNullable(sum)
const prod2 = nonNullable(prod)

prod2(10, null).then(sum2).catch(console.error)
