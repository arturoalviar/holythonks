import { mode } from '@chakra-ui/theme-tools'
import tinycolor from 'tinycolor2'

const cardBaseStyles = (props) => {
  const { theme } = props
  const { currentLightTheme, currentDarkTheme, themes } = theme

  const lightBg = tinycolor(themes[currentLightTheme].light.bg)
    .darken(5)
    .toHexString()
  const darkBg = tinycolor(themes[currentDarkTheme].dark.bg)
    .lighten()
    .toHexString()

  return {
    bg: mode(lightBg, darkBg)(props),
    color: mode(
      themes[currentLightTheme].light.color,
      themes[currentDarkTheme].dark.color
    )(props),
  }
}

export default {
  baseStyle: cardBaseStyles,
}
