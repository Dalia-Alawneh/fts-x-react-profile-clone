import { followSuggestAccounts } from "../../../constants/index.jsx"
import FollowSuggest from "../followSuggestion/FollowSuggest.jsx"

const MightLike = () => {
  return (
    <div>
      <h2>You might like</h2>
      <div className="flex flex-col gap-2 w-full">
        {followSuggestAccounts.map(account =>
          <div className="flex w-full"
            key={account.id}
          >
            <FollowSuggest
              account={account}
              showDescription={false}
            />
          </div>)
        }
      </div>
      <a href="" className="block px-5 py-4 text-blue-primary hover:bg-link-hover rounded-b-2xl">Show More</a>
    </div>
  )
}

export default MightLike

