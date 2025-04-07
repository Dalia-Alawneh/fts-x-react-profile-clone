import AccountName from "../../ui/accountName/AccountName.jsx";
import Button from "../../ui/button/Button.jsx";
import Username from "../../ui/username/Username.jsx";

const FollowSuggest = ({ account, showDescription = true }) => {
  const { isVerified, name, profileImg, username, description } = account;
  return (
    <div className="flex w-full gap-3 hover:bg-link-hover py-2 px-5 transition-colors">
      <img className="w-10 h-10 rounded-full" src={profileImg} alt={name} />
      <div className="w-full">
        <div className="flex w-full justify-between items-center">
          <div>
            <AccountName isVerified={isVerified} name={name} textClass={'text-base font-bold'} />
            <Username username={username} />
          </div>
          <Button text='follow' className="w-[81px] h-[36px] text-sm" />
        </div>
        {showDescription && <p className="mt-1">{description}</p>}
      </div>
    </div>
  )
}

export default FollowSuggest
