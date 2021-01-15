import { useState, useEffect } from 'react'
import storage from '../utils/storage'
import { updateFavicon } from '../utils/themeUtils'

const HOLY_THONKS_FAVICON = 'holy-thonks-favIcon'

const useFavIcon = () => {
  const [currentFavIcon, setCurrentFavIcon] = useState('/favicon.png')

  useEffect(() => {
    storage.setItem(HOLY_THONKS_FAVICON, currentFavIcon)
  }, [currentFavIcon])

  const updateCurrentFavIcon = ({ currentTheme, themes, mode }) => {
    const updatedFavIcon = updateFavicon({
      theme: themes[currentTheme],
      mode,
    })

    setCurrentFavIcon(updatedFavIcon)
  }

  return {
    currentFavIcon,
    updateCurrentFavIcon,
  }
}

export default useFavIcon
