// Реализация функции каррирования,
// которая бы принимала другую функцию и возвращала её каррированную версию.

// Каррирование — это техника, при которой функция, принимающая несколько аргументов,
// преобразуется в последовательность функций, каждая из которых принимает один аргумент.

function curry(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args)
		} else {
			return curried.bind(this, ...args)
		}
	}
}

const sum = curry((a, b, c, z) => a + b + c + z)

console.log(sum(1)(2)(3)(4)) // 10;
console.log(sum(1)(2)(3, 4)) // 10;
console.log(sum(1)(2, 3, 4)) // 10;
