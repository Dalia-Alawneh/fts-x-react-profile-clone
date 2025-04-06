import { Ellipsis, LockKeyhole } from "lucide-react";
import { user } from "../../../constants/index.jsx";
import Username from "../../ui/username/Username.jsx";

export default function AccountCard() {
  return (
    <div className="flex items-center gap-3 mb-4 hover:bg-link-hover p-0 xl:p-3 rounded-full w-fit xl:w-full">
      {user.img ? <img src={user.img} alt={user.name} />
        : <div className="w-10 h-10 bg-purple-500 flex justify-center items-center rounded-full text-2xl">
          {user.name.charAt(0)}
        </div>}
      <div className="hidden xl:inline me-1">
        <span className="flex items-center gap-1 font-bold">{user.name} {user.isPrivate && <LockKeyhole size={17} />}</span>
        <Username username={user.username} />
      </div>
      <Ellipsis className="hidden xl:inline" size={18} />
    </div>
  )
}
