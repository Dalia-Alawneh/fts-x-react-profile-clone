import WhoToFollow from "../components/features/followSuggestion/WhoToFollow.jsx";
import PostsList from "../components/features/posts/PostsList.jsx";
import MobileMenu from "../components/layout/mobile/menu.jsx";
import PageHeader from "../components/layout/pageHeader/PageHeader.jsx";
import Sidebar from "../components/layout/sidebar/index.jsx";
import TabBar from "../components/layout/tabbar/TabBar.jsx";
import Search from "../components/ui/search/Search.jsx";
import { page } from "../constants/index.jsx";

export default function HomePage() {
  return (
    <div className="grid grid-cols-[1fr] sm:grid-cols-[80px_1fr] xl:grid-cols-[275px_1fr]">
      <header className="hidden sm:block w-full">
        <Sidebar />
      </header>
      <MobileMenu />
      <main>
        <section className="grid grid-cols-[1fr] lg:grid-cols-[600px_348px] relative">
          <div className="border-e border-lighter">
            <PageHeader page={page} />
            <TabBar />
            <PostsList />
            <WhoToFollow />
          </div>
          <section className="sticky top-0 w-full xl:w-[348px] h-screen overflow-y-auto right-0 pt-2 ps-6">
            <Search />
          </section>
        </section>
      </main>
    </div>
  )
}
