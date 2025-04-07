import { useState } from "react";
import WhoToFollow from "../components/features/followSuggestion/WhoToFollow.jsx";
import Hashtags from "../components/features/hashtags/Hashtags.jsx";
import MightLike from "../components/features/mightLike/MightLike.jsx";
import PostsList from "../components/features/posts/PostsList.jsx";
import Footer from "../components/layout/footer/Footer.jsx";
import MobileMenu from "../components/layout/mobile/menu.jsx";
import PageHeader from "../components/layout/pageHeader/PageHeader.jsx";
import Sidebar from "../components/layout/sidebar/index.jsx";
import TabBar from "../components/layout/tabbar/TabBar.jsx";
import Wrapper from "../components/layout/wrapper/Wrapper.jsx";
import Search from "../components/ui/search/Search.jsx";
import { page } from "../constants/index.jsx";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('posts')
  return (
    <div className="grid grid-cols-[1fr] sm:grid-cols-[80px_1fr] xl:grid-cols-[275px_1fr]">
      <header className="hidden sm:block w-full">
        <Sidebar />
      </header>
      <MobileMenu />
      <main>
        <section className="grid grid-cols-[1fr] xl:grid-cols-[600px_378px] relative">
          <div className="border-e border-lighter">
            <PageHeader page={page} />
            <TabBar setActiveTab={setActiveTab} activeTab={activeTab} />
            {activeTab === "posts" && <>
              <PostsList />
              <WhoToFollow />
            </>}
            {activeTab === "replies" && <PostsList />}
            {activeTab === "media" && <div>Media content</div>}
          </div>
          <section className="sticky top-0 hidden xl:flex w-full xl:w-[378px] h-screen overflow-y-auto right-0 pt-2 ps-6 flex-col gap-4">
            <Search />
            <Wrapper>
              <MightLike />
            </Wrapper>
            <Wrapper>
              <Hashtags />
            </Wrapper>
            <Footer />
          </section>
        </section>
      </main>
    </div>
  )
}
