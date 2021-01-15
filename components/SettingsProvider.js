import React, { useContext } from 'react'
import useSettings from '../hooks/useSettings'

const SettingsContext = React.createContext()

export const useSettingsContext = () => useContext(SettingsContext)

const SettingsProvider = ({ children }) => {
  const { lightTheme, darkTheme, updateCustomThemes } = useSettings()

  return (
    <SettingsContext.Provider
      value={{
        lightTheme,
        darkTheme,
        updateCustomThemes,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider
