// Необходимо написать регулярное выражение, которое при вызове метода test на строке будет возвращать false, если в строке есть символы, отличные от латинских букв, цифр, символа подчеркивания _ и знака доллара $.

const myRegExp = /^[\w\$]+$/
console.log(myRegExp.test('hello'))
console.log(myRegExp.test('helloмир'))
console.log(myRegExp.test('привет'))
