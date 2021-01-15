import Head from 'next/head'
import { useEffect } from 'react'
import { useColorMode, useColorModeValue, useTheme } from '@chakra-ui/react'

import useFavIcon from '../hooks/useFavIcon'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '../utils/constants'

const SEO = ({ title }) => {
  const formattedTitle = title ? `${title} | ${SITE_NAME} ` : SITE_NAME
  const { currentDarkTheme, currentLightTheme, themes } = useTheme()
  const { colorMode } = useColorMode()
  const { currentFavIcon, updateCurrentFavIcon } = useFavIcon()
  const themeColor = useColorModeValue(
    themes[currentLightTheme].light.accent,
    themes[currentDarkTheme].dark.accent
  )

  useEffect(() => {
    const currentTheme =
      colorMode === 'dark' ? currentDarkTheme : currentLightTheme
    updateCurrentFavIcon({
      currentTheme,
      themes,
      mode: colorMode,
    })
  })

  return (
    <Head>
      <title>{formattedTitle}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        key="viewport"
      />
      <meta name="description" content={SITE_DESCRIPTION} key="description" />
      <meta name="theme-color" content={themeColor} />

      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:url" content={SITE_URL} key="og:url" />

      <meta name="twitter:card" content="summary" key="twitter:card" />
      <meta
        name="twitter:creator"
        content="@arturoalviar"
        key="twitter:creator"
      />
      <meta name="twitter:url" content={SITE_URL} key="twitter:url" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={SITE_DESCRIPTION} />

      <link
        id="app-favicon"
        rel="icon"
        href={currentFavIcon}
        key="appFavIcon"
      />
    </Head>
  )
}

export default SEO
