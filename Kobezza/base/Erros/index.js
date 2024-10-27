function foo() {
	throw new Error()
}

try {
	foo()
} catch (err) {
	console.log(err)
}
