// ## Что выведется в консоль?
// И почему?

// var глобальная область видимости,
// а промис асинхронный сначала выполниться цикл,
// который закинет в очередь все промисы,
// а затем они начнуть выполняться,
// а на момент выполнения var уже будет равен 3 arr[3] = undefined,
// undefined + 1 = NaN и далее будет складываться NaN + undefined = NaN

var val = Promise.resolve(1)

var arr = [1, 2, 3]

for (var i = 0; i < arr.length; ++i) {
	val = val.then(val => val + arr[i])
}

val.then(console.log)

// let
for (let i = 0; i < arr.length; ++i) {
	val = val.then(val => val + arr[i])
}

val.then(console.log)

// IIFE
for (let i = 0; i < arr.length; ++i) {
	;(par => (val = val.then(val => val + arr[par])))(i)
}

val.then(console.log)
