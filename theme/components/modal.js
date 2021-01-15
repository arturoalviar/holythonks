import { mode } from '@chakra-ui/theme-tools'

const baseStyleDialog = (props) => {
  const { theme } = props
  const { currentLightTheme, currentDarkTheme, themes } = theme

  return {
    bg: mode(
      themes[currentLightTheme].light.bg,
      themes[currentDarkTheme].dark.bg
    )(props),
  }
}

const baseStyle = (props) => ({
  dialog: baseStyleDialog(props),
})

export default {
  baseStyle,
}
