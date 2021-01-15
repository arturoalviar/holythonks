import { useSWRInfinite } from 'swr'
import { POST_PER_PAGE, SUBS } from '../utils/constants'

const fetcher = (url) => fetch(url).then((res) => res.json())
const baseUrl = 'https://www.reddit.com'

export const useRedditPosts = (subreddits = SUBS, sortBy = 'hot') => {
  const url = `${baseUrl}/r/${subreddits.join('+')}/${sortBy}.json?raw_json=1`

  const { data, error, size, setSize } = useSWRInfinite(
    (pageIndex, previousPageData) => {
      if (previousPageData && !previousPageData.data.after) return null

      if (pageIndex === 0) return `${url}&limit=${POST_PER_PAGE}`

      return `${url}&after=${previousPageData.data.after}&limit=${POST_PER_PAGE}`
    },
    fetcher
  )
  const posts = data ? data.map((i) => i.data.children).flat() : []
  const isLoading = !data && !error
  const isRequesting = size > 0 && data && typeof data[size - 1] === 'undefined'

  return { posts, error, isLoading, isRequesting, size, setSize }
}

export default useRedditPosts
