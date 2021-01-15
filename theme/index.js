import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './global'
import components from './components'
import foundations from './foundations'
import themes from './themes'

const extendedTheme = {
  fonts: {
    body:
      'Epilogue, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading:
      'Epilogue, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  themes,
  components,
  foundations,
  currentLightTheme: 'default',
  currentDarkTheme: 'default',
  styles,
}

export default extendTheme(extendedTheme)
