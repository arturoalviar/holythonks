import { mode } from '@chakra-ui/theme-tools'

const primaryScheme = (props) => {
  const { theme } = props
  const { currentLightTheme, currentDarkTheme, themes } = theme

  return {
    bg: mode(
      themes[currentLightTheme].light.primary,
      themes[currentDarkTheme].dark.primary
    )(props),
    color: mode(
      themes[currentLightTheme].light.bg,
      themes[currentDarkTheme].dark.bg
    )(props),
  }
}

const Button = {
  variants: {
    primary: primaryScheme,
  },
}

export default Button
