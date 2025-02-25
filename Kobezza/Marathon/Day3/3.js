// Реализация функции каррирования,
// которая бы принимала другую функцию и возвращала её каррированную версию.

// Каррирование — это техника, при которой функция, принимающая несколько аргументов,
// преобразуется в последовательность функций, каждая из которых принимает один аргумент.

function curry(fn) {
	return function curried(...args) {
		if (args.length >= fn.length) {
			return fn.apply(this, args)
		} else {
			return function (...args2) {
				return curried.apply(this, args.concat(args2))
			}
		}
	}
}

const sum = curry((a, b, c, z) => a + b + c + z)

console.log(sum(1)(2)(3)(4)) // 10;
console.log(sum(1)(2)(3, 4)) // 10;
console.log(sum(1)(2, 3, 4)) // 10;
