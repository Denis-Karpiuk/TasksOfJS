//! Задача 1.  Полиндром.Создать функцию, которая проверяет является строка полиндромом или нет. (читается туда обратно или нет).
//! Задача 2.  Функция которя будет возвращать из предложения самое короткое слово.
//! Задача 3.  Вернуть инициалы из строки имя фамилия с большой буквы, даже если имя фамилия с маленькой.
//! Задача 4.  Функция которая принимает число и возвращает сумму из чисел, которые входят в это число
//! Задача 5.  Функция которая возвращает из массива чисел, массив из двух элементов максимальное и минимальное значение. Даже есил одно число в массиве
//! Задача 6.  Функция создания дубликатов символов строки, где количество дубликатов соответсвует номеру символа в строке, и первый символ дубликата начинается с большой буквы.
//! Задача 7.  Функци возвращает индекс заглавных букв строки.
//! Задача 8.  Функция на вывод слова кратно числу 3 и 5.
//! Задача 9.  Функция выводит получает массивы и выводит новый массив с уникальными значениями.
//! Задача 10. Таймер со сбросом.
//! Задача 11. Вернуть массив с уникальными значениями, упорядоченными по убыванию количества повтороений в исходном массиве.
//! Задача 12. Проверить есть ли в исходном массиве значения из переданного массива
//! 1
// let isPlindrom = str => str === str.split('').reverse().join('')

// //! 2
// let shortWord = str => str.split(' ').sort((a, b) => a.length - b.length)[0]

// //! 3
// let initisls = str =>
// 	str
// 		.split(' ')
// 		.map(el => `${el.slice(0, 1).toUpperCase()}.`)
// 		.join('')

// //! 4
// let summNumbers = num =>
// 	num
// 		.toString()
// 		.split('')
// 		.reduce((summ, curr) => Number(summ) + Number(curr), [])

// //! 5
// let minMax = arr => [Math.min(...arr), Math.max(...arr)]

// //! 6
// let dublicate = str =>
// 	str
// 		.split('')
// 		.map((el, index) => el.toUpperCase() + el.repeat(index).toLowerCase())
// 		.join('-')
// //! 7
// let bigLetter = function (str) {
// 	let bigLetter = str.toUpperCase().split('')
// 	let origin = str.split('')
// 	let result = []
// 	for (let i = 0; i < str.length; i++) {
// 		if (bigLetter[i] === origin[i]) {
// 			result.push(i)
// 		}
// 	}
// 	return result
// }
// //! 7 var2
// let bigLetterES = str =>
// 	str.split('').reduce((result, el, index) => {
// 		el === el.toUpperCase() && result.push(index)
// 		return result
// 	}, [])

// //! 8
// function fooBar(number) {
// 	for (let i = 1; i <= number; i++) {
// 		if (i % 3 === 0 && i % 5 === 0) {
// 			console.log('fooBar')
// 		} else if (i % 3 === 0) {
// 			console.log('foo')
// 		} else if (i % 5 === 0) {
// 			console.log('bar')
// 		} else {
// 			console.log(i)
// 		}
// 	}
// }
// //! 9
// function uniqueArr() {
// 	return [...new Set([...arguments].flat())]
// }

// window.onload = () => {
// 	let timer
// 	let newCurrent = 0
// 	let h1 = document.querySelector('h1')
// 	current = h1.innerHTML
// 	let button = document.querySelector('button')
// 	button.onclick = start

// 	function start() {
// 		h1.innerHTML = 0
// 		button.innerHTML = 'stop'
// 		button.onclick = stop
// 		timer = setInterval(() => {
// 			newCurrent++
// 			h1.innerHTML = newCurrent
// 		}, 1000)
// 	}

// 	function stop() {
// 		clearInterval(timer)
// 		h1.innerHTML = current
// 		button.innerHTML = 'start'
// 		button.onclick = start
// 	}
// }

// //! 11.
// let classes = [
// 	'header',
// 	'menu',
// 	'menu-item',
// 	'menu-item',
// 	'footer',
// 	'link',
// 	'link',
// 	'link',
// 	'link',
// ]

// let nameData = {}
// let unique = []
// for (let i = 0; i < classes.length; i++) {
// 	if (nameData[classes[i]]) {
// 		nameData[classes[i]] += 1
// 	} else {
// 		nameData[classes[i]] = 1
// 		unique.push(classes[i])
// 	}
// }
// unique.sort((a, b) => nameData[b] - nameData[a])

// //!====================================================
// Input: (nums = [-2, 7, 11, 15]), (target = 9)
// Output: [0, 1]

// var twoSum = function (nums, target) {
// 	let result = []
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let y = i + 1; y < nums.length; y++) {
// 			if (target === nums[i] + nums[y]) {
// 				result.push(i, y)
// 			}
// 		}
// 	}
// 	return result
// }

// console.log(twoSum([3, 2, 4], 6))

// var romanToInt = function (s) {
// 	const converter = {
// 		I: 1,
// 		V: 5,
// 		X: 10,
// 		L: 50,
// 		C: 100,
// 		D: 500,
// 		M: 1000,
// 	}
// 	let correctNumbers = []
// 	let arabic = s.split('').map(el => converter[el])
// 	for (let i = 0; i < arabic.length; i++) {
// 		if (arabic[i] < arabic[i + 1]) {
// 			correctNumbers.push(arabic[i + 1] - arabic[i])
// 			i = i + 1
// 		} else {
// 			correctNumbers.push(arabic[i])
// 		}
// 	}
// 	return correctNumbers.reduce((summ, el) => {
// 		return (summ = summ + el)
// 	}, 0)
// }

// console.log(romanToInt('MCMXCIV'))

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var firstMissingPositive = function (nums) {
// 	let arr = [...new Set(nums)].sort((a, b) => a - b).filter(el => el > 0)
// 	if (arr[0] > 1 || arr.length === 0) {
// 		return 1
// 	}
// 	if (arr.length === 1 && arr[0] === 1) {
// 		return 2
// 	}
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i + 1] - arr[i] > 1 || arr[i + 1] - arr[i] === 0) {
// 			return (arr[i] += 1)
// 		}
// 	}
// 	return arr.length + 1
// }
