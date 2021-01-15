import {
  Box,
  Link,
  Img,
  Icon,
  Heading,
  Text,
  Stack,
  useStyleConfig,
} from '@chakra-ui/react'
import { IoMdImages, IoIosVideocam } from 'react-icons/io'
import { FiArrowUpCircle } from 'react-icons/fi'

const renderIcon = (icon) => {
  return (
    <Box
      bg="blackAlpha.700"
      position="absolute"
      top="1rem"
      right="1rem"
      p={3}
      borderRadius="full"
    >
      {icon}
    </Box>
  )
}

// add icon to posts that are videos or galleries
const hintIcon = ({
  isGallery,
  isRedditMedia,
  isVideo,
  secureMedia = null,
}) => {
  const isYoutube =
    !isRedditMedia &&
    secureMedia &&
    secureMedia.oembed.provider_name.toLowerCase() === 'youtube'

  if (isGallery) {
    return renderIcon(<Icon color="white" as={IoMdImages} w={6} h={6} />)
  }
  if (isYoutube || isVideo) {
    return renderIcon(<Icon color="white" as={IoIosVideocam} w={6} h={6} />)
  }
  return
}

const PostCard = ({ post, updateCurrentPost }) => {
  const { author, authorLink, title, images, permalink, ups } = post
  const styles = useStyleConfig('Card', {})

  return (
    <Box sx={styles} borderRadius="md" overflow="hidden">
      <Box
        cursor="pointer"
        h={{ base: '350px', md: '280px', lg: '250px' }}
        position="relative"
        overflow="hidden"
        onClick={() => updateCurrentPost(post)}
      >
        {hintIcon(post)}
        <Img
          transition={{ duration: 0.3 }}
          w="100%"
          h="100%"
          objectFit="cover"
          src={images.sm.src}
          alt={title}
          htmlHeight={images.sm.height}
          htmlWidth={images.sm.width}
        />
      </Box>
      <Box sx={styles} p={{ base: 4, md: 6, lg: 4 }}>
        <Stack direction="row" justify="space-between" align="center">
          <Box flex="1" noOfLines={{ base: 2, md: 1 }}>
            <Heading
              as="h2"
              fontWeight="semibold"
              fontSize={{ base: 'md', lg: 'lg' }}
              lineHeight="1.5"
              mb={2}
              noOfLines={{ base: 2, md: 1 }}
            >
              <Link href={permalink} isExternal>
                {title}
              </Link>
            </Heading>
            <Text fontSize="xs" fontWeight="medium">
              By:
              <Link href={authorLink} isExternal>
                u/{author}
              </Link>
            </Text>
          </Box>
          <Box ml={8} textAlign="center">
            <Icon as={FiArrowUpCircle} /> <Text>{ups.toLocaleString()}</Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default PostCard
