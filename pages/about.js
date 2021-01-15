import {
  Box,
  Divider,
  Link,
  Container,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react'
import { FiGithub } from 'react-icons/fi'

import SEO from '../components/SEO'

function About() {
  return (
    <Container maxW="1440px">
      <SEO title="About" />
      <Box fontSize="xl" maxWidth="69ch">
        <Heading fontWeight="semibold">About</Heading>
        <Divider borderColor="currentcolor" pt={4} mb={4} />
        <Text mb={4}>
          This website was heaviy inspired by{' '}
          <Link
            borderBottom="2px solid currentColor"
            _hover={{
              textDecoration: 'none',
            }}
            href="https://onlysetups.vercel.app/"
            isExternal
          >
            OnlySetups
          </Link>
        </Text>
        <Text mb={8}>
          I wanted to make a site dedicated to showcasing mechanical keyboards.
          In addition, I wanted to give the user a selection of site themes that
          corresponded to my favorite keycap sets.
        </Text>
        <Link
          href="https://github.com/arturoalviar/holythonks"
          isExternal
          py={4}
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Icon as={FiGithub} mr={2} />
          GitHub Repo
        </Link>
      </Box>
    </Container>
  )
}

export default About
