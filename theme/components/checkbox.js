import { mode } from '@chakra-ui/theme-tools'

function baseStyleControl(props) {
  const { theme } = props
  const { currentLightTheme, currentDarkTheme, themes } = theme

  return {
    borderColor: 'currentColor',
    color: 'currentColor',

    _checked: {
      bg: mode(
        themes[currentLightTheme].light.accent,
        themes[currentDarkTheme].dark.accent
      )(props),
      borderColor: mode(
        themes[currentLightTheme].light.accent,
        themes[currentDarkTheme].dark.accent
      )(props),
      color: mode(
        themes[currentLightTheme].light.bg,
        themes[currentDarkTheme].dark.bg
      )(props),

      _hover: {
        bg: mode(
          themes[currentLightTheme].light.primary,
          themes[currentDarkTheme].dark.primary
        )(props),
        borderColor: mode(
          themes[currentLightTheme].light.bg,
          themes[currentDarkTheme].dark.bg
        )(props),
      },
    },
  }
}

const baseStyle = (props) => ({
  control: baseStyleControl(props),
})

export default {
  baseStyle,
}
