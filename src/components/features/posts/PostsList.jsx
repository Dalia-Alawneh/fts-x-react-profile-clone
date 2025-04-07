import Post from './Post.jsx'
import { posts } from '../../../constants/index.jsx'

export default function PostsList() {
  return (
    <div>
      {
        posts.map(post =>
          <Post key={post.id} post={post} isReplay={false} />
        )
      }
    </div>
  )
}
