import { hashtags } from "../../../constants/index.jsx";
import Hashtag from "../../ui/hashtag/Hashtag.jsx";

const Hashtags = () => {
  return (
    <div>
      <h2>What&apos;s happening</h2>
      {
        hashtags.map(hashtag => <Hashtag key={hashtag.id} hashtag={hashtag} />)
      }
      <a href="" className="block px-5 py-4 text-blue-primary hover:bg-link-hover rounded-b-2xl">Show More</a>
    </div>
  )
}

export default Hashtags
