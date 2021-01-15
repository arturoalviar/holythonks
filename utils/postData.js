const refinePostData = (post) => {
  const {
    id,
    author,
    title,
    permalink,
    ups,
    is_gallery,
    created_utc,
    media,
    is_video,
    is_reddit_media_domain,
    secure_media,
    url,
  } = post

  const { images, gallery } = generatePostImageSrc(post)

  return {
    id,
    author,
    title,
    ups,
    created_utc,
    images,
    gallery,
    url,
    authorLink: `https://www.reddit.com/user/${author}/`,
    permalink: `https://reddit.com${permalink}`,
    isGallery: !!is_gallery,
    isVideo: !!is_video,
    isRedditMedia: !!is_reddit_media_domain,
    redditMedia: media,
    secureMedia: secure_media,
  }
}

const generatePostImageSrc = ({
  is_gallery: isGallery,
  preview,
  media_metadata,
}) => {
  const defaultImage = {
    src: 'https://via.placeholder.com/405?text=Error%20loading%20image',
    width: 405,
    height: 280,
  }
  const defaultValue = {
    images: {
      sm: defaultImage,
      lg: defaultImage,
    },
    gallery: [],
  }

  if (isGallery) {
    try {
      let images = {}
      const galleryIds = Object.keys(media_metadata)
      const resolutions = media_metadata[galleryIds[0]].p
      const { u: src, x: width, y: height } = resolutions[
        resolutions.length - 1
      ]

      if (resolutions.length >= 3) {
        const { u: src, x: width, y: height } = resolutions[2]
        images.sm = {
          src,
          width,
          height,
        }
      } else {
        images.sm = {
          src,
          width,
          height,
        }
      }

      images.lg = {
        src,
        width,
        height,
      }

      const gallery = galleryIds
        .map((id) => {
          if (media_metadata[id].status === 'valid') {
            const { u: src, x: width, y: height } = media_metadata[id].p[
              resolutions.length - 1
            ]

            return {
              src,
              width,
              height,
            }
          }
        })
        .filter((src) => src)

      return {
        images,
        gallery,
      }
    } catch (error) {
      return defaultValue
    }
  } else {
    try {
      let images = {}
      const resolutions = preview.images[0].resolutions
      const { height, width, url } = resolutions[resolutions.length - 1]

      // get a smaller res image for the card view
      if (resolutions.length >= 3) {
        const { url, width, height } = resolutions[2]
        images.sm = {
          src: url,
          width,
          height,
        }
      } else {
        images.sm = {
          src: url,
          width,
          height,
        }
      }

      // highest res possible for modal view
      images.lg = {
        src: url,
        width,
        height,
      }

      return {
        images,
        gallery: [],
      }
    } catch (error) {
      return defaultValue
    }
  }
}

// try to only get posts with images/videos
export const filterPosts = (data) => {
  return data
    .map(({ data }) => data)
    .filter(
      ({
        crosspost_parent,
        is_meta,
        is_self,
        selftext,
        preview = null,
        media_metadata = null,
      }) => {
        return (
          (preview || media_metadata) &&
          !is_meta &&
          !is_self &&
          !selftext &&
          !crosspost_parent
        )
      }
    )
}

export default refinePostData
