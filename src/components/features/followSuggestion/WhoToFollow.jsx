import { followSuggestAccounts } from "../../../constants/index.jsx"
import FollowSuggest from "./FollowSuggest.jsx"

const WhoToFollow = () => {
  return (
    <div className="pt-5 border-b border-lighter mb-5">
      <h2 className="font-bold text-2xl mb-6 ms-5">Who to follow</h2>
      <div className="flex flex-col gap-2">
        {followSuggestAccounts.map(account => <FollowSuggest
          key={account.id}
          account={account} />)
        }
      </div>
      <a href="" className="block px-5 py-4 text-blue-primary hover:bg-link-hover">Show More</a>
    </div>
  )
}

export default WhoToFollow
