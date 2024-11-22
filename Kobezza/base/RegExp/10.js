// Необходимо написать регулярное выражение для разбора тегов и их атрибутов в XML строке.

const str = `
<div bla="foo">
  <div class=ban checked data-foo="baz bar"></div>
</div>
`

myRegExp.exec(str) // ['div bla="foo"', 'div', 'bla="foo"'];
myRegExp.exec(str) // ['div class=ban checked data-foo="baz"', 'div', 'class=ban', 'checked', 'data-foo="baz bar"'];
myRegExp.exec(str) // null
