// Необходимо создать массив на основе строки, где разделителями будут символы ., ,, ; или пробелы (подряд идущие пробелы считаются за один).

const myRegExp = /[.,;\s]+/

'foo    bla.bar,gd;4'.split(myRegExp) // ['foo', 'bla', 'bar', 'gd', '4']
console.log('foo    bla.bar,gd;4'.split(myRegExp))
