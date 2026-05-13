export const fetchWithRetry = (constructor, tries) => {
	return constructor().catch(err => {
		if (tries <= 0) {
			return Promise.reject(err)
		}

		return fetchWithRetry(constructor, --tries)
	})
}
