import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { IoIosSunny, IoIosMoon } from 'react-icons/io'

function ThemeToggle({ usesIcons, ...rest }) {
  const { toggleColorMode } = useColorMode()

  const displayIcon = useColorModeValue(<IoIosMoon />, <IoIosSunny />)
  const displayLabel = useColorModeValue(
    'Switch to dark theme',
    'Switch to light theme'
  )

  const generateContent = (usesIcons) => {
    return usesIcons ? displayIcon : displayLabel
  }

  return (
    <Button onClick={toggleColorMode} aria-label={displayLabel} {...rest}>
      {generateContent(usesIcons)}
    </Button>
  )
}

export default ThemeToggle
