// чему будет равен count после 1 клика
// выведется ли в консоль Count-render после клика

export const Counter = () => {
	const [count, setCount] = useState(0)

	const onClick = () => {
		setCount(count => count + 1)
		setCount(count => count + 1)
		setCount(count => count + 1)
	}

	return (
		<div>
			<div>{count}</div>
			<button onClick={onClick}>increment</button>

			<Count onClick={onClick} />
		</div>
	)
}

export const Count = React.memo(() => {
	console.log('Count-render')

	return <div>Count component</div>
})
