import {
  AspectRatio,
  Box,
  Button,
  Img,
  Link,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

// regex to grab source from iframe html
const iframeSrcRegEx = /(https:)(.*?)(?=")/g

const determineWidth = ({ width, height }) => {
  const ratio = height / width

  if (height > width && ratio > 1.2) {
    if (ratio < 1.7) return `${height / 2}px`
    return `${width / 2}px`
  }

  return '1340px'
}

const generateContent = ({
  title,
  isVideo,
  redditMedia,
  isRedditMedia,
  isGallery,
  gallery,
  images,
  secureMedia = null,
}) => {
  // check if post is youtube video
  const isYoutube =
    !isRedditMedia &&
    secureMedia &&
    secureMedia.oembed.provider_name.toLowerCase() === 'youtube'

  if (isYoutube) {
    const iframeSrc = secureMedia.oembed.html.match(iframeSrcRegEx)

    return (
      iframeSrc &&
      iframeSrc.length && (
        <Box w="100%">
          <AspectRatio ratio={16 / 9}>
            <iframe src={iframeSrc[0]} />
          </AspectRatio>
        </Box>
      )
    )
    // check if reddit video
  } else if (isVideo && redditMedia) {
    /*
      for some reason, reddit serves audio and video separately
      so reddit sourced videos do not have audio
    */
    const { reddit_video: redditVideo } = redditMedia
    const ratio = redditVideo.width / redditVideo.height

    return (
      <Box w="100%" pos="relative">
        <Box
          background="blackAlpha.900"
          color="white"
          p={2}
          fontWeight="semibold"
          textAlign="center"
          textTransform="uppercase"
          pos="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex="docked"
        >
          Note: this video has no audio
        </Box>
        <AspectRatio ratio={ratio}>
          <iframe src={redditVideo.fallback_url} />
        </AspectRatio>
      </Box>
    )
    // check if post is a gallery
  } else if (isGallery && gallery.length) {
    return (
      <Box w="100%">
        <Carousel
          showThumbs={false}
          dynamicHeight
          useKeyboardArrows
          infiniteLoop
        >
          {gallery.map(({ src, width, height }) => (
            <Img key={src} src={src} htmlHeight={height} htmlWidth={width} />
          ))}
        </Carousel>
      </Box>
    )
    // default to image
  } else {
    return (
      <Img
        w="100%"
        h="100%"
        objectFit="cover"
        src={images.lg.src}
        alt={title}
        htmlHeight={images.lg.height}
        htmlWidth={images.lg.width}
      />
    )
  }
}

const PostModal = ({ post, isOpen, onClose }) => {
  const { author, authorLink, title, permalink, images } = post

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
      motionPreset="slideInBottom"
      isCentered
      preserveScrollBarGap
    >
      <ModalOverlay />
      <ModalContent maxWidth={determineWidth(images.lg)} mx={4}>
        <ModalHeader pr={12}>
          <Heading
            as="h2"
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            fontWeight="semibold"
            lineHeight={1.3}
            noOfLines={2}
          >
            {title}
          </Heading>
          <Text fontSize="xs" fontWeight="medium" mt={2}>
            By:
            <Link href={authorLink} isExternal>
              u/{author}
            </Link>
          </Text>
        </ModalHeader>
        <ModalCloseButton top={0} right={0} w="48px" h="48px" />
        <ModalBody className="ht-scrollbar" p={0}>
          {generateContent(post)}
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button as="a" variant="primary" href={permalink} target="_blank">
            View post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PostModal
