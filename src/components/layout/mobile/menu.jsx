import { mobileMenuItems } from "../../../constants/index.jsx";
import NavLink from "../../ui/navLink/NavLink.jsx";

export default function MobileMenu() {
  return (
    <ul className="sm:hidden h-[60px] fixed z-30 bottom-0 w-full border-t-1 border-lighter flex justify-between items-center bg-black">
      {
        mobileMenuItems.map((link,index) => <NavLink key={index} link={link} />)
      }
    </ul>
  )
}
