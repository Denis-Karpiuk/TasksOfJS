// Необходимо написать регулярное выражение, которое удаляет из строки любые дублирования подстрок из 1, 2 или 3 символов, которые идут подряд. Подсказка: нужно использовать группы и обратные ссылки.

const myRegExp = /([a-z]{1,3})\1{1,3}/g

// 'abbabc'
console.log('abababbbabcabc'.replace(myRegExp, '$1'))
