import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Flex,
  useTheme,
  useToast,
} from '@chakra-ui/react'

import SEO from '../components/SEO'
import ThemeToggle from '../components/ThemeToggle'
import SettingsThemePreview from '../components/SettingsThemePreview'
import SettingsThemeSelect from '../components/SettingsThemeSelect'
import { useSettingsContext } from '../components/SettingsProvider'

function Settings() {
  const { lightTheme, darkTheme, updateCustomThemes } = useSettingsContext()
  const { themes } = useTheme()
  const [currentTheme, setCurrentTheme] = useState({
    light: lightTheme,
    dark: darkTheme,
  })
  const toast = useToast()

  useEffect(() => {
    setCurrentTheme({
      light: lightTheme,
      dark: darkTheme,
    })
  }, [lightTheme, darkTheme])

  return (
    <Container maxW="1440px">
      <SEO title="Settings" />
      <Box>
        <Flex direction={{ base: 'column', md: 'row' }} mt={{ md: 8 }}>
          <Box mr={{ md: 4 }} mb={{ base: 8, md: 0 }}>
            <FormControl>
              <FormLabel size="lg">Toggle theme</FormLabel>
              <ThemeToggle variant="primary" />
            </FormControl>
          </Box>
          <Box flex={1} mr={{ md: 4 }} mb={{ base: 8, md: 0 }}>
            <SettingsThemeSelect
              mode="light"
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />
            <SettingsThemePreview
              title="Light theme preview"
              name={currentTheme.light}
              theme={themes[currentTheme.light]}
              mode="light"
            />
            <Button
              variant="outline"
              borderColor="currentcolor"
              mt={6}
              onClick={() => {
                toast.closeAll()
                updateCustomThemes(currentTheme.light, 'light')
                toast({
                  title: 'Light theme updated.',
                  status: 'success',
                  duration: 5000,
                  position: 'top-right',
                  isClosable: true,
                })
              }}
            >
              Update light theme
            </Button>
          </Box>
          <Box flex={1}>
            <SettingsThemeSelect
              mode="dark"
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />
            <SettingsThemePreview
              title="Dark theme preview"
              name={currentTheme.dark}
              theme={themes[currentTheme.dark]}
              mode="dark"
            />
            <Button
              variant="outline"
              borderColor="currentcolor"
              mt={6}
              onClick={() => {
                toast.closeAll()
                updateCustomThemes(currentTheme.dark, 'dark')
                toast({
                  title: 'Dark theme updated.',
                  status: 'success',
                  duration: 5000,
                  position: 'top-right',
                  isClosable: true,
                })
              }}
            >
              Update dark theme
            </Button>
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}

export default Settings
