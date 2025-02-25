const object = {
	name: 'Name',

	getName: () => {
		console.log(this.name)
	},

	getName2() {
		console.log(this.name)
	},
}

object.getName() // undefined
object.getName2() // Name

const fn = object.getName2
fn() // undefined

fn.call(object) // Name
