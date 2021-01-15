import { Container, Link, Text } from '@chakra-ui/react'

const AppFooter = () => (
  <Container as="footer" textAlign="center" p={6}>
    <Text fontSize="sm" fontWeight="semibold">
      Made with Next.js by{' '}
      <Link
        href="https://arturoalviar.com/"
        borderBottom="2px solid currentColor"
        isExternal
      >
        Arturo Alviar
      </Link>
    </Text>
  </Container>
)

export default AppFooter
