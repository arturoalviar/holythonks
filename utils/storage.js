const storage = {
  getItem(key, defaultValue = 'default') {
    if (typeof window === 'undefined') {
      return defaultValue
    }
    try {
      const unparsedValue = window.localStorage[key]
      if (typeof unparsedValue === 'undefined') {
        return defaultValue
      }
      return JSON.parse(unparsedValue)
    } catch (error) {
      return defaultValue
    }
  },

  setItem(key, value) {
    window.localStorage[key] = JSON.stringify(value)
  },
}

export default storage
