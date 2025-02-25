// ## Реализация паттерна "Строитель" для класса
// Необходимо реализовать паттерн "Строитель" для заданного класса.

class User {
	static _state = {}

	static name(name) {
		const { _state } = this

		return class extends this {
			static _state = { ..._state, name }
		}
	}

	static age(age) {
		const { _state } = this

		return class extends this {
			static _state = { ..._state, age }
		}
	}

	static skills(age) {
		const { _state } = this

		return class extends this {
			static _state = { ..._state, age }
		}
	}

	static create() {
		return new this(this._state)
	}

	constructor(params) {
		this.name = params.name
		this.age = params.age
		this.skills = params.skills
	}
}

User.name('Bob').age(47).skills(['Coding']).create() // User({name: 'Bob', age: 47, skills: ['Coding']})
