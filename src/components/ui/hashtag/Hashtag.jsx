import { formatNumber } from "../../../utils/formatNumber.js"

const Hashtag = ({ hashtag }) => {
  return (
    <div>
      <div className="p-1 px-4 hover:bg-link-hover" dir="auto">
        <span className="font-bold text-lg">{hashtag.name}</span>
        {hashtag.postsCount > 0 &&
          <span className="block w-full text-left text-light text-sm">{formatNumber(hashtag.postsCount)} posts</span>
        }
      </div>
    </div>
  )
}

export default Hashtag
