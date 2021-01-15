import { Grid, GridItem, ChakraProvider } from '@chakra-ui/react'
import { useSettingsContext } from './SettingsProvider'
import AppFooter from './AppFooter'

import theme from '../theme'

function AppLayout({ children }) {
  const { lightTheme, darkTheme } = useSettingsContext()

  return (
    <ChakraProvider
      theme={{
        ...theme,
        currentLightTheme: lightTheme,
        currentDarkTheme: darkTheme,
      }}
    >
      <Grid minHeight="100%" templateRows="1fr auto">
        <>{children}</>
        <GridItem rowStart="2" rowEnd="3">
          <AppFooter />
        </GridItem>
      </Grid>
    </ChakraProvider>
  )
}

export default AppLayout
