
const PostAction = ({ icon, count, hoverColor, hoverBg }) => {
  return (
    <div className={`w-full flex text-light items-center hover:${hoverColor} transition-colors`}>
    <button className={`p-2 -me-1 hover:${hoverBg} rounded-full`}>
      {icon}
    </button>
    <span className="text-sm">{count}</span>
  </div>
  )
}

export default PostAction

