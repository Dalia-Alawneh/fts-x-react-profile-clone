export default function TabBar() {
  return (
      <div className="mb-4 border-b border-lighter flex w-full">
        <ul className="flex w-full -mb-px text-sm font-medium text-center" id="default-styled-tab" role="tablist">
          <li className="w-full hover:bg-link-hover" role="presentation">
            <button className="inline-block p-4 border-b-5 border-blue-primary" id="posts-styled-tab" data-tabs-target="#styled-posts" type="button" role="tab"
              aria-controls="posts"
              aria-selected="false">Posts</button>
          </li>
          <li className="w-full hover:bg-link-hover" role="presentation">
            <button className="inline-block p-4 text-light" id="replies-styled-tab" data-tabs-target="#styled-replies" type="button" role="tab" aria-controls="replies" aria-selected="false">Replies</button>
          </li>
          <li className="w-full hover:bg-link-hover" role="presentation">
            <button className="inline-block p-4 text-light" id="media-styled-tab" data-tabs-target="#styled-media" type="button" role="tab" aria-controls="media" aria-selected="false">Media</button>
          </li>
        </ul>
      </div>
  )
}
