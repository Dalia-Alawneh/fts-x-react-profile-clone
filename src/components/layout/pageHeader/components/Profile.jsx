import { Ellipsis, MessageCircle, Search } from "lucide-react";
import Button from "../../../ui/button/Button.jsx";

export default function Profile({ pageInfo }) {
  return (
    <div className="mt-12 relative">
      <div className="relative">

        <img src={pageInfo.coverImage} alt={pageInfo.name} />
        <img className="w-[140px] h-[140px] rounded-full border-5 border-black
      absolute bottom-[-70px] left-[20px]
      " src={pageInfo.profileImage} alt={pageInfo.name} />
      </div>
      <div className="flex justify-end gap-2 mt-3">
        <a className="border border-light rounded-full p-2 hover:bg-link-hover">
          <Ellipsis size={20} />
        </a>
        <a className="border border-light rounded-full p-2 hover:bg-link-hover">
          <MessageCircle size={20} />
        </a>
        <a className="border border-light rounded-full p-2 hover:bg-link-hover">
          <Search size={20} />
        </a>
      </div>
    </div>
  )
}
