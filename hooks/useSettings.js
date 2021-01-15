import { useState, useEffect } from 'react'

import storage from '../utils/storage'

const LIGHT_THEME_KEY = 'holy-thonks-light-theme'
const DARK_THEME_KEY = 'holy-thonks-dark-theme'

const useSettings = () => {
  const [lightTheme, setLightTheme] = useState('default')
  const [darkTheme, setDarkTheme] = useState('default')

  useEffect(() => {
    const lightTheme = storage.getItem(LIGHT_THEME_KEY)
    const darkTheme = storage.getItem(DARK_THEME_KEY)

    setLightTheme(lightTheme)
    setDarkTheme(darkTheme)
  }, [])

  useEffect(() => {
    storage.setItem(LIGHT_THEME_KEY, lightTheme)
  }, [lightTheme])

  useEffect(() => {
    storage.setItem(DARK_THEME_KEY, darkTheme)
  }, [darkTheme])

  const updateCustomThemes = (updatedTheme, mode) => {
    if (mode === 'light') {
      setLightTheme(updatedTheme)
    } else {
      setDarkTheme(updatedTheme)
    }
  }

  return {
    lightTheme,
    darkTheme,
    updateCustomThemes,
  }
}

export default useSettings
