// ## Поиск в массиве строк по заданной подстроке с пропуском символов
// Необходимо написать функцию, которая бы принимала массив строк и строку
// и возвращала бы новый массив,
// состоящий только из элементов с содержанием заданной подстроки.
// Алгоритм должен учитывать, что подстрока может быть найдена в строке
// при помощи пропуска части символов в строке (нечеткий поиск).

function find(pattern, array) {
	function matchPattern(pattern, str) {
		const patternIter = pattern[Symbol.iterator]()

		let currentPatternCur = patternIter.next()

		// для пустой строки
		if (currentPatternCur.done) {
			return false
		}

		for (let char of str) {
			if (currentPatternCur.value === char) {
				currentPatternCur = patternIter.next()
			}

			if (currentPatternCur.done) {
				break
			}
		}

		return currentPatternCur.done
	}

	return array.filter(el => matchPattern(pattern, el))
}

console.log(find('kbza', ['kobezzza', 'bob', 'kibiza', 'kobea'])) // ['kobezzza', 'kibiza']
