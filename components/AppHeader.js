import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Flex,
  Link,
  Stack,
  useTheme,
  useColorModeValue,
} from '@chakra-ui/react'

import ThemeToggle from './ThemeToggle'
import { SITE_NAME } from '../utils/constants'

const AppHeader = () => {
  const { currentLightTheme, currentDarkTheme, themes } = useTheme()
  const bg = useColorModeValue(
    themes[currentLightTheme].light.bg,
    themes[currentDarkTheme].dark.bg
  )
  return (
    <Box
      as="header"
      position="fixed"
      w="100%"
      height={20}
      backgroundColor={bg}
      zIndex="sticky"
    >
      <Container maxW="1440px">
        <Flex align="center" pt={4} pb={4}>
          <Box>
            <Link as={NextLink} href="/">
              <Heading
                as="h1"
                size="xl"
                cursor="pointer"
                mb={0}
                fontWeight="black"
                fontStyle="italic"
              >
                {SITE_NAME}
              </Heading>
            </Link>
          </Box>
          <Stack direction="row" ml="auto" align="center" fontWeight="medium">
            <NextLink href="/about">
              <Link p={2}>About</Link>
            </NextLink>
            <NextLink href="/settings">
              <Link p={2} ml={6}>
                Settings
              </Link>
            </NextLink>
            <ThemeToggle usesIcons ml={6} bg="none" />
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default AppHeader
