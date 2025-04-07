import { Bookmark, ChartNoAxesCombined, Ellipsis, Heart, MessageCircle, MessageCircleReply, Repeat, Share, View } from "lucide-react";
import AccountName from "../../ui/AccountName/AccountName.jsx";
import Username from "../../ui/username/Username.jsx";
import { formatNumber } from "../../../utils/formatNumber.js";
import PostsStyle from './style.module.css';
import PostAction from "./PostAction.jsx";

export default function Post({ post, isReplay }) {
  const { postImage, date, description,
    poster,
    totalReplies, retweets,
    likes, views,
    replies = [] } = post;

  return (
    <div className={`flex items-start ${!isReplay ? 'border-b border-lighter' : ''} py-2 gap-2 ps-5 pe-3`} >
      <img className="w-10 h-10 rounded-full" src={poster.profileImage} alt="" />
      <div className={replies.length > 0 ? PostsStyle.post : ''}>
        <div className="flex items-center gap-1 justify-between">
          <div className="flex items-center gap-1">
            <AccountName isVerified={poster?.isVerified} name={poster.name} />
            <Username username={poster.username} />
            <span className="text-light">. {date}</span>
          </div>
          <div className="flex">
            <div className="p-2 -me-1 hover:bg-blue-primary-light hover:text-blue-primary rounded-full">
              <MessageCircle size={18} />
            </div>
            <div className="p-2 hover:bg-blue-primary-light hover:text-blue-primary rounded-full">
              <Ellipsis size={18} />
            </div>
          </div>
        </div>
        <p className="mt-3 mb-5">{description}</p>
        {postImage && <img className="rounded-2xl" src={postImage} />}
        <div className="flex mt-4">
          <PostAction
            icon={<MessageCircleReply size={18} />}
            count={formatNumber(totalReplies)}
            hoverColor="text-blue-primary"
            hoverBg="bg-blue-primary-light"
          />
          <PostAction
            icon={<Repeat size={18} />}
            count={formatNumber(retweets)}
            hoverColor="text-green-primary"
            hoverBg="bg-green-primary-light"
          />
          <PostAction
            icon={<Heart size={18} />}
            count={formatNumber(likes)}
            hoverColor="text-pink-primary"
            hoverBg="bg-pink-primary-light"
          />
          <PostAction
            icon={<ChartNoAxesCombined size={18} />}
            count={formatNumber(views)}
            hoverColor="text-blue-primary"
            hoverBg="bg-blue-primary-light"
          />
          {!isReplay && <div className="flex">
            <div className="text-light rounded-full hover:text-blue-primary p-2 hover:bg-blue-primary-light">
              <Bookmark size={18} />
            </div>
            <div className="text-light rounded-full hover:text-blue-primary p-2 hover:bg-blue-primary-light">
              <Share size={18} />
            </div>
          </div>}
        </div>

        {
          replies.length > 0 && <div className="mt-3">
            {replies.map(replay => <Post key={replay.id} post={replay} isReplay={true} />)}
          </div>
        }
      </div>
    </div>
  )
}
