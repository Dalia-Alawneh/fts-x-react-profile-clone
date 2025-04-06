import { Ellipsis, LockKeyhole } from "lucide-react";
import { user } from "../../../constants/index.jsx";

export default function AccountCard() {
  return (
    <div className="flex items-center gap-3 mb-4 hover:bg-link-hover p-3 pe-8 rounded-full me-3">
      {user.img ? <img src={user.img} alt={user.name} />
      : <div className="w-10 h-10 bg-purple-500 flex justify-center items-center rounded-full text-2xl">
        {user.name.charAt(0)}
      </div>}
      <div className="me-1">
        <span className="flex items-center gap-1 font-bold">{user.name} {user.isPrivate && <LockKeyhole size={17} />}</span>
        <span className="text-light text-sm">{user.username}</span>
      </div>
      <Ellipsis size={18} />
    </div>
  )
}
