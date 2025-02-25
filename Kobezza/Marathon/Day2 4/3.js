// ## Нахождение максимальной глубины в дереве
// Необходимо написать функцию, которая бы возвращала максимальную глубину заданного дерева.

const maxDepth = root => {
	let max = 0

	const calcDepth = (node, startDepth = 0) => {
		const depth = node.children?.forEach(node => {
			calcDepth(node, startDepth + 1)
		})

		console.log(depth, 'depth')

		if (depth > max) {
			max = depth
		}

		return startDepth
	}

	calcDepth(root)

	return max
}

const obj = {
	value: 'foo',
	children: [
		{
			value: 'bar',
		},

		{
			value: 'bla',
			children: [{ value: 'baz' }],
		},
	],
}

console.log(maxDepth(obj)) // 2
