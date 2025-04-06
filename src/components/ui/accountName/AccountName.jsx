import { Verified } from "lucide-react";

export default function AccountName({ name, isVerified, textClass = "text-xl font-bold" }) {
  return (
    <div className="flex gap-1 items-center">
      <span className={textClass}>{name}</span>
      {isVerified && <Verified size={20} className="text-blue-primary" />}
    </div>
  )
}
