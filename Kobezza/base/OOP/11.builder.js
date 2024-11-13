// С помощью специальных статических методов наполняем внутренний буффер,
// а затем сразу все инициализируем (вызов create)

const storage = KVStorage.storage(KVStorage.localStorage)
	.set('foo', { bla: 1 })
	.set('bar', { bar: 2 })
	.create()
