// Необходимо написать функцию, которая принимала бы некоторый Promise и экземпляр AbortController и
// возвращала бы новый.
// Этот промис можно отменить с помощью использования переданного AbortController. При отмене промис режектится.

var controller = new AbortController()
abortablePromise(myPromise, controller.signal).catch(console.error)
controller.abort()
