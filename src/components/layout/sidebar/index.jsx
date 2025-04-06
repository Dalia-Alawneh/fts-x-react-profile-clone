import { navLinks } from '../../../constants/index.jsx';
import xIcon from './../../../assets/x-icon.png';

export default function Sidebar() {
  return (
    <aside className="w-[275px] border-r-1 border-[rgb(47, 51, 54)] h-screen pt-[2px] ps-2">
      <ul>
        <li>
          <a className='h-13 w-13 hover:bg-link-hover transition-colors rounded-full flex justify-center items-center'>
            <img src={xIcon} alt="x logo" className='w-8 h-8' />
          </a>
        </li>
        {
          navLinks.map(link => (
            <li className='h-fit' key={link.text}>
              <a className='p-3 pe-8 text-xl hover:bg-link-hover transition-colors rounded-full flex items-center w-fit gap-6'>
                {link.icon} <span>{link.text}</span></a>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}
