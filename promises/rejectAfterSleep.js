export const rejectAfterSleep = (time, message) => {
	return new Promise((_, reject) => {
		setTimeout(() => reject(message), time)
	})
}
