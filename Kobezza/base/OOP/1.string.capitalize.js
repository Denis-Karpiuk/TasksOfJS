// Необходимо добавить все строкам в JavaScript метод capitalize, который делает первую букву в строке заглавной

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1)
}

console.log('foo'.capitalize())
