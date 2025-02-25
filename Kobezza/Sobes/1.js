for (var i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1000) //  3 3 3, т.к область видимости var глобальная и к моменту вызова значение будет уже равно 3
}

// let
for (let i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1000) // 0 1 2,
}

// arguments setTimeOut
for (var i = 0; i < 3; i++) {
	setTimeout(arg => console.log(arg), 1000, i) // 0 1 2 ,
}

// IIFE
for (var i = 0; i < 3; i++) {
	;(i => {
		setTimeout(() => console.log(i), 1000)
	})(i)
}
