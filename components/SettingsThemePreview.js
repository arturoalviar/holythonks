import { Box, Button, Text } from '@chakra-ui/react'

const SettingsThemePreview = ({ title, name, theme, mode }) => {
  return (
    <Box>
      <Text mt={4} mb={4}>
        {title}
      </Text>
      <Box
        p={10}
        bg={theme[mode].bg}
        border="1px"
        borderColor={theme[mode].color}
        borderRadius="5px"
      >
        <Text
          borderBottom="4px"
          borderColor={theme[mode].accent}
          color={theme[mode].color}
          pb={2}
          mb={2}
          textTransform="capitalize"
        >
          {name}
        </Text>
        <Button bg={theme[mode].primary} color={theme[mode].bg}>
          Primary Button
        </Button>
      </Box>
    </Box>
  )
}

export default SettingsThemePreview
