export default function TabBar({ setActiveTab, activeTab }) {
  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };

  const getTabClasses = (tab) => {
    return `inline-block p-4 ${
      activeTab === tab
        ? 'border-b-4 border-blue-primary text-main'
        : 'text-light'
    }`;
  };

  return (
    <div className="mb-4 border-b border-lighter flex w-full">
      <ul
        className="flex w-full -mb-px text-sm font-medium text-center"
        id="default-styled-tab"
        role="tablist"
      >
        <li className="w-full hover:bg-link-hover" role="presentation">
          <button
            className={getTabClasses('posts')}
            id="posts-styled-tab"
            type="button"
            role="tab"
            aria-controls="posts"
            onClick={() => handleChangeTab('posts')}
          >
            Posts
          </button>
        </li>
        <li className="w-full hover:bg-link-hover" role="presentation">
          <button
            className={getTabClasses('replies')}
            id="replies-styled-tab"
            type="button"
            role="tab"
            aria-controls="replies"
            onClick={() => handleChangeTab('replies')}
          >
            Replies
          </button>
        </li>
        <li className="w-full hover:bg-link-hover" role="presentation">
          <button
            className={getTabClasses('media')}
            id="media-styled-tab"
            type="button"
            role="tab"
            aria-controls="media"
            onClick={() => handleChangeTab('media')}
          >
            Media
          </button>
        </li>
      </ul>
    </div>
  );
}
