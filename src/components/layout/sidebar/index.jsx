import { Plus } from 'lucide-react';
import Button from '../../ui/button/Button.jsx';
import NavLinks from '../navLinks/NavLinks.jsx';
import AccountCard from './AccountCard.jsx';

export default function Sidebar() {
  return (
    <aside className="fixed top-0 border-r-1 w-[80px] xl:w-[275px] border-lighter h-screen pt-[2px] px-2 flex flex-col justify-between overflow-y-auto">
      <div className='mb-4'>
        <NavLinks />
        <Button text='Post' className='hidden xl:block w-[216px] h-[52px] mt-3' />
        <div className="block xl:hidden bg-white rounded-full w-fit p-2 mt-4" title='Post'>
          <Plus color='black' />
        </div>
      </div>
      <AccountCard />
    </aside>
  )
}
