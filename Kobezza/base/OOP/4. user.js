// Необходимо создать функцию-конструктор, которая создает пользователя с заданным именем (имя и фамилия) и возрастом.
// А также, необходимо определить функции, sayName (возвращает полное имя) и has18 (true, если есть 18)

const user = new User('Andrey', 'Kobets', 32)

user.has18() // true

user.sayName() // 'Andrey Kobets'
