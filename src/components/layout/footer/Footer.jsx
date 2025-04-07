import { footerLinks } from "../../../constants/index.jsx"

const Footer = () => {
  return (
    <div className="text-light text-sm flex justify-between gap-1 flex-wrap px-3">
      {
        footerLinks.map(link => <a href=""  key={link} className="hover:underline underline-offset-[3px]">{link}</a>)
      }
    </div>
  )
}

export default Footer
