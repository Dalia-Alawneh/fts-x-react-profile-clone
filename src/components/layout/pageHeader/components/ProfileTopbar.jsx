import { ArrowLeft, Verified } from "lucide-react";

export default function ProfileTopbar({ page }) {
  const { name, postsCount, isVerified } = page;
  return (
    <div className="p-2 flex gap-6 items-center bg-black h-[54px] fixed top-0 w-full z-10">
      <button className="rounded-full hover:bg-link-hover w-[34px] h-[34px] flex justify-center items-center">
        <ArrowLeft size={20} />
      </button>
      <div className="flex flex-col gap-0">
        <div className="flex gap-1 items-center">
          <span className="text-xl font-bold">{name}</span>
          {isVerified && <Verified size={20} className="text-blue-primary" />}
        </div>
        <span className="text-light text-sm">{postsCount.toLocaleString()} posts</span>
      </div>
    </div>
  )
}
