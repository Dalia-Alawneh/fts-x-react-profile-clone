import { hashtags } from "../../../constants/index.jsx"
import { formatNumber } from "../../../utils/formatNumber.js"

const Hashtags = () => {
  return (
    <div>
      <h2>What's happening</h2>
      {
        hashtags.map(hashtag => <div key={hashtag.id}>
          <div className="p-1 px-4 hover:bg-link-hover" dir="auto">
            <span className="font-bold text-lg">{hashtag.name}</span>
            <span className="block w-full text-left text-light text-sm">{formatNumber(hashtag.postsCount)} posts</span>
          </div>
        </div>)
      }
      <a href="" className="block px-5 py-4 text-blue-primary hover:bg-link-hover rounded-b-2xl">Show More</a>
    </div>
  )
}

export default Hashtags
