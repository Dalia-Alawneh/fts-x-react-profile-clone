import Button from '../../ui/button/Button.jsx';
import NavLinks from '../navLinks/NavLinks.jsx';
import AccountCard from './AccountCard.jsx';

export default function Sidebar() {
  return (
    <aside className="w-[275px] border-r-1 border-[#ffffff38] h-screen pt-[2px] ps-2 flex flex-col justify-between overflow-y-scroll">
      <div className='mb-4'>
        <NavLinks />
        <Button />
      </div>
      <AccountCard />
    </aside>
  )
}
