// Необходимо написать регулярное выражение, которое бы позволяло с помощью replace поменять местами значения ключа и значения в плоской JSON строке.

const str = `{
  "foo": 1,
  10: 'baz',
  bla: true,
  ban: {a: 1}
}`

// {
//   1: "foo",
//   baz: 10,
//   true: 'bla',
//   '{a: 1}': 'ban'
// }
str.replace(myRegExp, replaceVal)
