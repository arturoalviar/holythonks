import '@fontsource/epilogue'
import '@fontsource/epilogue/500.css'
import '@fontsource/epilogue/600.css'
import '@fontsource/epilogue/900-italic.css'
import { Box } from '@chakra-ui/react'

import AppHeader from '../components/AppHeader'
import AppLayout from '../components/AppLayout'
import SettingsProvider from '../components/SettingsProvider'

function MyApp({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <AppLayout>
        <AppHeader />
        <Box mt={20}>
          <Component {...pageProps} />
        </Box>
      </AppLayout>
    </SettingsProvider>
  )
}

export default MyApp
