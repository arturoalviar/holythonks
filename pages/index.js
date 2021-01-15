import { useState } from 'react'

import {
  Button,
  Container,
  SimpleGrid,
  Link,
  Text,
  Skeleton,
  useDisclosure,
} from '@chakra-ui/react'

import SEO from '../components/SEO'
import PostCard from '../components/PostCard'
import PostModal from '../components/PostModal'
import PostsFilters from '../components/PostsFilters'

import useRedditPosts from '../hooks/useRedditPosts'
import { POST_PER_PAGE, SUBS } from '../utils/constants'
import refinePostData, { filterPosts } from '../utils/postData'

const fillerArray = [...Array(POST_PER_PAGE).keys()]

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [currentPost, setCurrentPost] = useState(null)
  const [filterBy, setFilterBy] = useState('hot')
  const [subreddits, setSubreddits] = useState(SUBS)
  const {
    posts,
    error,
    isLoading,
    isRequesting,
    size,
    setSize,
  } = useRedditPosts(subreddits, filterBy)

  if (error) {
    return (
      <Container centerContent>
        <Text fontSize="2xl" p={4} fontWeight="semibold">
          Whoops, something went wrong please{' '}
          <Link borderBottom="2px solid currentColor" href="/">
            reload the page.
          </Link>{' '}
          or try to load this page in a different browser.
        </Text>
      </Container>
    )
  }

  const refinedPosts = !isLoading
    ? filterPosts(posts).map((post) => refinePostData(post))
    : []

  const updateCurrentPost = (post) => {
    setCurrentPost(post)
    onOpen()
  }

  return (
    <main>
      <SEO />
      <PostsFilters
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        subreddits={subreddits}
        setSubreddits={setSubreddits}
      />
      <Container maxW="1440px" centerContent>
        <SimpleGrid
          columns={{ md: 2, lg: 3 }}
          gap={{ base: 10, md: 6, lg: 8 }}
          w="100%"
        >
          {refinedPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              updateCurrentPost={updateCurrentPost}
            />
          ))}

          {(isLoading || isRequesting) &&
            fillerArray.map((item) => (
              <Skeleton
                key={item}
                height={{ base: '420px', md: '380px', lg: '335px' }}
              />
            ))}
        </SimpleGrid>

        <Button onClick={() => setSize(size + 1)} variant="primary" mt={10}>
          Load More
        </Button>
      </Container>
      {currentPost && (
        <PostModal post={currentPost} isOpen={isOpen} onClose={onClose} />
      )}
    </main>
  )
}
