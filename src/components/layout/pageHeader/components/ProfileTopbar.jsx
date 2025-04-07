import { ArrowLeft } from "lucide-react";
import AccountName from "../../../ui/accountName/AccountName.jsx";

export default function ProfileTopbar({ page }) {
  const { name, postsCount, isVerified } = page;
  return (
    <div className="p-2 flex gap-6 items-center bg-black-80 backdrop-blur-md h-[54px] fixed top-0 w-full xl:w-[600px] z-10">
      <button className="rounded-full hover:bg-link-hover w-[34px] h-[34px] flex justify-center items-center">
        <ArrowLeft size={20} />
      </button>
      <div className="flex flex-col gap-0">
        <AccountName isVerified={isVerified} name={name} />
        <span className="text-light text-sm">{postsCount.toLocaleString()} posts</span>
      </div>
    </div>
  )
}
