import React from "react"
import { client } from "../sanityClient/client"
import { searchQuery } from "../utils/data"
import MasonryLayout from "./MasonryLayout"
import Spinner from "./Spinner"

function Feed() {
  const [loading, setLoading] = useState(false)
  const [pins, setPins] = useState(null)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    if (categoryId) {
      const query = searchQuery(categoryId)
      client.fetch(query).then((data) => {
        setPins(data)
        setLoading(false)
      })
    } else {
      const query = feedQuery()
      client.fetch(query).then((data) => {
        setPins(data)
        setLoading(false)
      })
    }
  }, [categoryId])

  if (loading) {
    return <Spinner message={`We are adding somthing ideas to your feed!`} />
  }
  return <div>{pins && <MasonryLayout pins={pins} />}</div>
}

export default Feed
