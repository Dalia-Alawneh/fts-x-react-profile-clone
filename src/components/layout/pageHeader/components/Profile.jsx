import { CalendarDays, Ellipsis, Link2, MessageCircle, Search } from "lucide-react";
import Button from "../../../ui/button/Button.jsx";
import AccountName from "../../../ui/AccountName/AccountName.jsx";
import Username from "../../../ui/username/Username.jsx";
import { formatNumber } from "../../../../utils/formatNumber.js";

export default function Profile({ pageInfo }) {
  return (
    <div className="mt-12 relative border-b border-lighter">
      <div className="relative">
        <img src={pageInfo.coverImage} alt={pageInfo.name} />
        <img className="w-[140px] h-[140px] rounded-full border-5 border-black
        absolute bottom-[-70px] left-[20px]" src={pageInfo.profileImage} alt={pageInfo.name} />
      </div>
      <div className="flex justify-start sm:justify-end gap-2 mt-20 sm:mt-3 ps-5 sm:pe-5">
        <a className="border border-light rounded-full p-2 hover:bg-link-hover">
          <Ellipsis size={20} />
        </a>
        <a className="border border-light rounded-full p-2 hover:bg-link-hover">
          <MessageCircle size={20} />
        </a>
        <a className="border border-light rounded-full p-2 hover:bg-link-hover">
          <Search size={20} />
        </a>
        <Button text='follow' className="w-[81px] h-[36px]" />
      </div>
      <div className="p-5 mt-5">
        <AccountName isVerified={pageInfo.isVerified} name={pageInfo.name} />
        <Username username={pageInfo.username} />
        <p className="mt-4">{pageInfo.description}</p>
        <div className="flex mt-3 gap-4">
          <div className="flex gap-1">
            <div className="-rotate-45 text-light">
              <Link2 size={22} />
            </div>
            <a href={pageInfo.website} className="text-blue-primary">{pageInfo.linkName}</a>
          </div>
          <div className="flex gap-1 text-light">
            <div className="text-light">
              <CalendarDays size={22} />
            </div>
            <span>Joined {pageInfo.joinedAt}</span>
          </div>
        </div>
        <div className="mt-3 flex gap-4">
          <a className="flex gap-0.5">
            <span className="font-extrabold">{formatNumber(pageInfo.following)}</span>
            <span className="text-light">Following</span>
          </a>
          <a className="flex gap-0.5">
            <span className="font-extrabold">{formatNumber(pageInfo.followers)}</span>
            <span className="text-light">Followers</span>
          </a>
        </div>
        <p className="mt-3 text-light">
          {pageInfo.followedBy.length != 0
            ? `Followed by ${pageInfo.followedBy.join('')}`
            : 'Not followed by anyone you’re following'
          }
        </p>
      </div>
    </div>
  )
}
