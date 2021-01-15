import { keyframes } from '@chakra-ui/system'
import { getColor, mode } from '@chakra-ui/theme-tools'
import tinycolor from 'tinycolor2'

const fade = (startColor, endColor) =>
  keyframes({
    from: { borderColor: startColor, background: startColor },
    to: { borderColor: endColor, background: endColor },
  })

const baseStyle = (props) => {
  const { theme } = props
  const { currentLightTheme, currentDarkTheme, themes } = theme
  tinycolor(themes[currentDarkTheme].light.bg).lighten(5).toHexString()

  const lightBgStart = tinycolor(themes[currentLightTheme].light.bg)
    .lighten(5)
    .toHexString()
  const lightBgEnd = tinycolor(themes[currentLightTheme].light.bg)
    .lighten(10)
    .toHexString()
  const darkBgStart = tinycolor(themes[currentDarkTheme].dark.bg)
    .darken(5)
    .toHexString()
  const darkBgEnd = tinycolor(themes[currentDarkTheme].dark.bg)
    .darken(10)
    .toHexString()

  const defaultStartColor = mode(lightBgStart, darkBgStart)(props)
  const defaultEndColor = mode(lightBgEnd, darkBgEnd)(props)

  const {
    startColor = defaultStartColor,
    endColor = defaultEndColor,
    speed,
  } = props

  const start = getColor(theme, startColor)
  const end = getColor(theme, endColor)

  return {
    opacity: 0.7,
    borderRadius: '.35rem',
    borderColor: start,
    background: end,
    animation: `${speed}s linear infinite alternate ${fade(start, end)}`,
  }
}

export default {
  baseStyle,
}
