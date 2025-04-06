export default function NavLink({link}) {
  const {text, icon} = link;
  return (
    <li className='h-fit' >
      <a className='p-3 pe-3 xl:pe-8 text-xl hover:bg-link-hover transition-colors rounded-full flex items-center w-fit gap-6'>
        {icon} <span className="hidden xl:inline">{text}</span></a>
    </li>
  )
}