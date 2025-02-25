// # День 1
// ## Что выведется в консоль?
// И почему?

class Foo {
	bar = 1

	bla = () => console.log(this.bar)

	baz = function () {
		console.log(this.bar)
	}
}

const a = new Foo().bla
a() // 1 т.е берет из лексического окружения, потому что не имеет своего аргумента this

const b = new Foo().baz

b() // ошибка, нет TypeError: Cannot read properties of undefined (reading 'bar'), т.к никакого this не передано,

const c = { b }

c.b() // undefined, у this нет свойства bar поэтому undefined

new Foo().bla() // 1
new Foo().baz() // 1
