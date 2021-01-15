import { theme } from '@chakra-ui/react'

const { colors: defaultColors } = theme
const defaultTheme = {
  light: {
    name: 'default-light',
    bg: defaultColors.gray['50'],
    color: defaultColors.gray['900'],
    primary: defaultColors.green['500'],
    accent: defaultColors.green['500'],
  },
  dark: {
    name: 'default-dark',
    bg: defaultColors.gray['900'],
    color: defaultColors.gray['50'],
    primary: defaultColors.green['300'],
    accent: defaultColors.green['300'],
  },
}

export default defaultTheme
