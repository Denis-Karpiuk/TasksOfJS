const promise1 = Promise.resolve('first')
const promise2 = Promise.resolve('second')
const promise3 = Promise.reject('third')
const promise4 = Promise.resolve('fourth')

const prms = async () => {
	const res1 = Promise.all([promise1, promise2])
	const res2 = Promise.all([promise3, promise4])

	return [res1, res2]
}

prms().then(console.log).catch(console.log)
