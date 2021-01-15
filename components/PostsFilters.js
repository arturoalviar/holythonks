import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Container,
  Radio,
  RadioGroup,
  HStack,
  Stack,
} from '@chakra-ui/react'
import { SUBS } from '../utils/constants'

const PostFilter = ({ subreddits, setSubreddits, filterBy, setFilterBy }) => {
  const handleDisabled = (subreddit) => {
    return subreddits.length === 1 && subreddits.includes(subreddit)
  }

  return (
    <Container maxW="1440px" mb={4}>
      <Accordion allowToggle>
        <AccordionItem>
          {({ isExpanded }) => {
            return (
              <>
                <AccordionButton
                  _focus={{
                    outline: 'none',
                  }}
                >
                  <Box flex="1" textAlign="right">
                    {isExpanded ? 'Hide' : 'Show'} filters
                  </Box>
                </AccordionButton>
                <AccordionPanel>
                  <Box mb={4}>
                    <Box as="label" fontWeight="semibold">
                      Sort by:
                    </Box>
                    <RadioGroup
                      onChange={setFilterBy}
                      name="filter-by"
                      value={filterBy}
                    >
                      <Stack direction="row">
                        <Radio value="hot" mr={2}>
                          Hot
                        </Radio>
                        <Radio value="new" mr={2}>
                          New
                        </Radio>
                        <Radio value="top" mr={2}>
                          Top
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>

                  <Box>
                    <Box as="label" fontWeight="semibold">
                      Subreddits
                    </Box>
                    <CheckboxGroup onChange={setSubreddits} value={subreddits}>
                      <HStack direction="row">
                        {SUBS.map((subreddit, index) => (
                          <Checkbox
                            key={`${subreddit}-${index}`}
                            value={subreddit}
                            size="md"
                            mr={4}
                            isDisabled={handleDisabled(subreddit)}
                          >
                            {subreddit.split(' ')}
                          </Checkbox>
                        ))}
                      </HStack>
                    </CheckboxGroup>
                  </Box>
                </AccordionPanel>
              </>
            )
          }}
        </AccordionItem>
      </Accordion>
    </Container>
  )
}

export default PostFilter
