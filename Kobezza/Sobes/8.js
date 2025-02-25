// зарефакторить код
import React, { useState } from 'react'

const fetchNumber = () => Promise.resolve(Math.random())

const heavyFunc = () => {
	return Math.random()
}

const App = () => {
	const [number, setNumber] = useState()
	const [scroll, setScroll] = useState()

	const [data, setData] = useState(heavyFunc())

	React.useEffect(async () => {
		setNumber(await fetchNumber())

		window.addEventListener('scroll', () => setScroll(window.scrollY))

		return () => {
			window.removeEventListener('scroll', () =>
				setScroll(window.scrollY)
			)
		}
	}, [])

	return (
		<div>
			<div>{number}</div>
			<div>{scroll}</div>

			{[1, 2, 3, 4].map(el => (
				<div>{el}</div>
			))}
		</div>
	)
}

export default App

// Решение
//=====================
import React, { useState } from "react";

const fetchNumber = () => Promise.resolve(Math.random());

const heavyFunc = () => {
    return Math.random()
}

const ARR = [1, 2, 3, 4]

const App = () => {
    const [number, setNumber] = useState(0);
    const [scroll, setScroll] = useState(window.scrollY);
    
    const [data, setData] = useState(() => heavyFunc());
    // error isLoading   


    React.useEffect(() => {
        const getNumber = async () => {
           const num = await fetchNumber()
           setNumber(num);  // trycatch
        } 
        
        getNumber()
        
        const onScroll = () => setScroll(window.scrollY)

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll); // throttle
        };
    }, []);

    return (
        <div>
            <div>{number}</div>
            <div>{scroll}</div>

            <ul>
            {ARR.map((el) => (
                <li key={el}>{el}</li>
            ))}
            </ul>
        </div>
    );
};

export default App;
