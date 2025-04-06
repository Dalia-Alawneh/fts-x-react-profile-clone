import { navLinks } from "../../../constants/index.jsx";
import NavLink from "../../ui/navLink/NavLink.jsx";
import xIcon from './../../../assets/x-icon.png';

export default function NavLinks() {
  return (
    <ul>
      <li>
        <a className='h-13 w-13 hover:bg-link-hover transition-colors rounded-full flex justify-center items-center'>
          <img src={xIcon} alt="x logo" className='w-8 h-8' />
        </a>
      </li>
      {
        navLinks.map(link => (
          <NavLink key={link.text} link={link} />
        ))
      }
    </ul>
  )
}
