import {
  FormControl,
  FormLabel,
  Select,
  useTheme,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

const SettingsThemeSelect = ({ mode, setCurrentTheme, currentTheme }) => {
  const { currentDarkTheme, currentLightTheme, themes } = useTheme()
  const { colorMode } = useColorMode()
  const currentParentTheme = useColorModeValue(
    currentLightTheme,
    currentDarkTheme
  )

  const renderOptions = () => {
    return Object.keys(themes).map((theme) => (
      <option value={theme} key={`theme-${theme}`}>
        {theme.split(/(?=[A-Z])/).join(' ')}
      </option>
    ))
  }

  const handleOnChange = (event) => {
    const { value, name } = event.target
    setCurrentTheme({
      ...currentTheme,
      [name]: value,
    })
  }

  return (
    <FormControl>
      <FormLabel size="lg">Configure {mode} theme</FormLabel>
      <Select
        borderColor="currentcolor"
        name={mode}
        value={currentTheme[mode]}
        onChange={handleOnChange}
        textTransform="capitalize"
        _focus={{
          borderColor: themes[currentParentTheme][colorMode].accent,
        }}
      >
        {renderOptions()}
      </Select>
    </FormControl>
  )
}

export default SettingsThemeSelect
