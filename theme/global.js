const styles = {
  global: ({ theme, colorMode }) => {
    const { currentLightTheme, currentDarkTheme, themes } = theme

    const currentBg =
      colorMode === 'dark'
        ? themes[currentDarkTheme].dark.bg
        : themes[currentLightTheme].light.bg

    const currentText =
      colorMode === 'dark'
        ? themes[currentDarkTheme].dark.color
        : themes[currentLightTheme].light.color

    return {
      'html, body': {
        background: currentBg,
        color: currentText,
        height: '100%',
      },
      '#__next': {
        height: '100%',
      },
      '.ht-scrollbar': {
        /* firefox custom scrollbar */
        scrollbarColor: `${currentText} ${currentBg}`,
        scrollbarWidth: 'thin',
      },
      '.ht-scrollbar::-webkit-scrollbar': {
        width: '10px',
        height: '10px',
        backgroundColor: currentBg,
      },
      '.ht-scrollbar::-webkit-scrollbar-button': {
        display: 'none',
      },
      '.ht-scrollbar::-webkit-scrollbar-track': {
        background: currentBg,
      },
      '.ht-scrollbar::-webkit-scrollbar-thumb': {
        backgroundColor: currentText,
        borderRadius: '10px',
        border: `2px solid ${currentBg}`,
      },
    }
  },
}

export default styles
