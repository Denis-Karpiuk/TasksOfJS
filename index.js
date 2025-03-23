//! Задача 1. Полиндром.Создать функцию, которая проверяет является строка полиндромом или нет. (читается туда обратно или нет).

let str1 = 'тест'
let str2 = 'тест'

//! Базовый вариант
function isPolindrom(string) {
	let arr = string.split('') // разбиваем строку на массив символов
	// let arr = string.split('') // разбиваем строку на массив символов

	let arrReverse = arr.reverse() // перерворачиваем массив
	// добавлен комментарий в ветку one
	let newString = arrReverse.join('') // склеиваем в новую строку
	let result = string === newString // срвниваем в новую строку
	return result // возворащаем результат
}
let x = isPolindrom(str1)
console.log(x)

//! Вариант advance
function isPolindrom2(string) {
	return string === string.split('').reverse().join('') //создаём фукнцию которая выполняет цепочку действий и возвращает резултат.
}
let y = isPolindrom2(str1)
console.log(y)

//! Вариант ES6
//* Благодаря стрелочной функции и её упрощённой записи, можно сделать запись еще короче
let isPolindrom3 = string => string === string.split('').reverse().join('')
let z = isPolindrom2(str1)
console.log(z)

//! Задача 2.Функция которя будет возвращать из него самое короткое слово.

let sentence = 'Hello world my name is Denis'
//* Базовое решение
function shortWord(sentence) {
	let arrWords = sentence.split(' ') //разбиваем текст на массив слов
	let sortWordsArr = arrWords.sort((a, b) => {
		return a.length - b.length
	})
	return sortWordsArr[0]
}

let word = shortWord(sentence)
console.log(word)

//* Решение в одну цепочку
function shotrWord2(sentence) {
	return (word = sentence.split(' ').sort((a, b) => {
		return a.length - b.length
	}))[0]
}

let word2 = shotrWord2(sentence)
console.log(word2)

//* Решение  при помощи синтаксиса ES6
let shotrWord3 = sentence =>
	sentence.split(' ').sort((a, b) => a.length - b.length)[0]
let word3 = shotrWord3(sentence)
console.log(word3)

//* Моё решение
function shotrWord4(sentence) {
	let words = sentence.split(' ')
	let lengthWord = word.map(word => word.length)
	return words[Math.min.apply(null, lengthWord)]
}

//! Задача 3. Вернуть инициалы из строки имя фамилия с большой буквы, даже если имя фамилия с маленькой.
let nameS = 'Denis karpiuk'

function initial(name) {
	let arr = name.split(' ') //разбиваем на массив слов
	let firstLetter = arr.map(el => el.slice(0, 1).toUpperCase() + '.') // через мап достаем первую букву слова + точка на конце.
	return firstLetter.join('') //соединяем в новую строку
}

let init = initial(nameS)
console.log(init)
//* Вариант 2 цепочка вызовов

function initial2(name) {
	return name
		.split(' ')
		.map(el => el.slice(0, 1).toUpperCase() + '.')
		.join('')
}
let init2 = initial2(nameS)
console.log(init2)
//* Синтаксис ES6
let initial3 = name =>
	name
		.split(' ')
		.map(el => `${el.slice(0, 1).toUpperCase()}.`)
		.join('')

let init3 = initial3(nameS)
console.log(init3)

//! Задача 4. Функция которая принимает число и возвращает сумму из чисел, которые входят в это число
function sumDigits(number) {
	let moduleNumber = Math.abs(number) //убираем минус если есть у числа
	let str = moduleNumber.toString() //переводим число в строку что бы можно было разбить на массив елементов
	let arr = str.split('') // разбиваем на массив элементов, в результате получаем массив элементов в виде строк с числами например -'5'
	let res = arr.reduce((sum, cur) => Number(sum) + Number(cur), 0) // для суммирования элементов применяем метод reduce, предварительно применив к элементам массива обёртку Number, что бы получть число из массива, а не строку.
	return res // получаем резултат в виде суммы чисел из числа.
}

let sum = sumDigits(99)
console.log(sum)
//Вариант 3 ES6
let sumDiggitES6 = number =>
	Math.abs(number)
		.toString()
		.split('')
		.reduce((sum, cur) => Number(sum) + Number(cur), 0)
let sumES6 = sumDiggitES6(99)
console.log(sumES6)

//!Задача 5. Функция которая возвращает из массива чисел, массив из двух элементов максимальное и минимальное значение. Даже есил одно число в массиве
let numbers = [2, 9, 10, 25, 47, 4, 1]
function maxMin(arr) {
	let number = [] // создаём пустой массив
	let min = Math.min.apply(null, arr) // при помощи Встроенного объекта Math достаем минимальное и максиальное значение массива, так как Math не принимает в качестве параметров массивы, мы применяем apply, котрый принимает в качестве параметра массив, null так как никакой контекст мы не передаем.
	let max = Math.max.apply(null, arr)
	number.push(min, max) // добовляем полученные значения в массив
	return number // возвращаем массив
}

let minMaxNumber = maxMin(numbers)
console.log(minMaxNumber)

//*ES6
let minMaxNumbers = numbers => [Math.min(...numbers), Math.max(...numbers)] // при помощи деструктуризации рассыпаем в параметры Math.min/max содержимое массива, ведь Math.min/max не принимают массив в параметры
let numb = minMaxNumbers(numbers)
console.log(numb)

//!Задача 6. Функция создания дубликатов символов строки, где количество дубликатов соответсвует номеру символа в строке, и первый символ дубликата начинается с большой буквы.
function dublicate(string) {
	let arr = string.toUpperCase().split('') // получаем массив символов строки в верхнем регистре
	let arrDublicate = arr.map(function (el, i) {
		//проходимся по массиву применяя к каждому елементу функцию repeat() которая дублирует элемент соответсвенно индексу в массиве, соответвенно перый элемент имеет индекс 0, останется не тронутый, остальные мы продублируем и переведём в нижний регистр
		return (el += el.repeat(i).toLowerCase())
	})
	return arrDublicate.join('-') // переводим полученный массив в строку разделяя через -
}

let dubl = dublicate('string')
console.log(dubl)
//* ES6 реализация
let dublicateES6 = string =>
	string
		.toUpperCase()
		.split('')
		.map((el, i) => `${el}${el.repeat(i).toLowerCase()}`)
		.join('-')
let dublES6 = dublicateES6('string')
console.log(dublES6)

//! Задача 7. Функци возвращает индекс заглавных букв строки.
function capitals(word) {
	let bigLetters = word.toUpperCase().split('') // переводим всю строку в верхний регистр и разбиваем на массив символов
	let originWord = word.split('') // разбиваем исходную строку на массив символов
	let result = [] // массив для заполнения итоговыми значениями
	for (let i = 0; i < originWord.length; i++) {
		// проходим циклом по массивам и сравниваем значения, если равны значит это две большие буквы и их индекс попадает в результирующий массив
		if (bigLetters[i] == originWord[i]) {
			result.push(i)
		}
	}
	return result
}

let inNumb = capitals('sUppErPuuPeR')
console.log(inNumb)
//*advance

function captails2(word) {
	let result = []
	word.split('').forEach((element, index) => {
		if (element === element.toUpperCase()) {
			result.push(index)
		}
	})
	return result
}

let inNumb2 = captails2('sUppErPuuPeR')
console.log(inNumb2)

//*ES6
let captails3 = word =>
	word.split('').reduce((result, el, index) => {
		if (el === el.toUpperCase()) {
			result.push(index)
		}
		return result
	}, [])

let inNumb3 = captails3('sUppErPuuPeR')
console.log(inNumb3)
//*ES6 /2
let captails4 = word =>
	word.split('').reduce((result, el, index) => {
		el === el.toUpperCase() && result.push(index)
		return result
	}, [])

let inNumb4 = captails4('sUppErPuuPeR')
console.log(inNumb4)

//! Задача 8.Вывод слова кратно числу 3 и 5
function fooBar(number) {
	for (let i = 1; i <= number; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fooBar')
		} else if (i % 3 === 0) {
			console.log('foo')
		} else if (i % 5 === 0) {
			console.log('bar')
		} else {
			console.log(i)
		}
	}
}

fooBar(5)

//! Задача 9. Функция выводит получает массивы и выводит новый массив с уникальными значениями.
// *Решение 1
function unicque() {
	let arr = [...arguments] // так как мы не знаем количество аргументов, то мы распыляем псевдомассив в массив, в результате получаем массив с массивами(матрица)
	let newArr = [] // создаём массив что бы и переносим все элементы массива с массивами в одни массив
	for (let i = 0; i < arr.length; i++) {
		newArr.push(...arr[i]) //берем массив из массива с массивами и распыляем его в новый массив
	}
	newArr = new Set(newArr) // создаём новую уникальную коллекцию при помощи Set
	return [...newArr] // прерващаем коллекцию в массив уникальных значений
}

let result = unicque([1, 5, 5, 3], [3, 2, 4, 6, 7, 9])
console.log(result)
//* ES6
function uniqueES6() {
	return [...new Set([...arguments].flat())] // создаём массив в который распыляем тут жу созданную уникальную коллекцию, аргументы для колекции превращаем из матрицы в обыный массив при помощи метода flat, который поднимает вложенный массивы на уровень который указывается в скобках, по умолчанию на 1
}
let resultES6 = uniqueES6([1, 5, 5, 3], [3, 2, 4, 6, 7, 9])
console.log(resultES6)

//! Задача 10.Таймер со сбросом
window.onload = () => {
	let h1 = document.querySelector('h1')
	let current = h1.innerHTML
	let button = document.querySelector('button')
	let newCurrent = 0
	let timer
	button.onclick = start

	function start() {
		h1.innerHTML = newCurrent
		button.innerHTML = 'stop'
		button.onclick = stop
		timer = setInterval(() => {
			newCurrent = newCurrent += 1
			h1.innerHTML = newCurrent
		}, 100)
	}
	function stop() {
		clearTimeout(timer)
		h1.innerHTML = current
		newCurrent = 0
		button.innerHTML = 'start'
		button.onclick = start
	}
}

//! Задача 11. Отобрать классы по частоте.
let classes = [
	'header',
	'menu',
	'menu-item',
	'menu-item',
	'footer',
	'link',
	'link',
	'link',
	'link',
]

let countClasses = {} // создаём объект для записи ключа и количества вхождений
let arrayUnic = []
for (let i = 0; i < classes.length; i++) {
	if (countClasses[classes[i]]) {
		countClasses[classes[i]] += 1 // елси такой ключ уже есть, то увеливаем значение на 1
	} else {
		countClasses[classes[i]] = 1 //иначе если ключа нет то создаём со значение один
		arrayUnic.push(classes[i]) //также в такм случае добовляем элемент в массив уникальных значений
	}
}
arrayUnic.sort((a, b) => countClasses[b] - countClasses[a]) //сорируем массив глядя в объект на поле значение
console.log(arrayUnic)
