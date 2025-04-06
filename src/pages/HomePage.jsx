import MobileMenu from "../components/layout/mobile/menu.jsx";
import PageHeader from "../components/layout/pageHeader/PageHeader.jsx";
import Sidebar from "../components/layout/sidebar/index.jsx";
import TabBar from "../components/layout/tabbar/TabBar.jsx";
import { page } from "../constants/index.jsx";

export default function HomePage() {
  return (
    <div className="grid grid-cols-[1fr] sm:grid-cols-[80px_1fr] xl:grid-cols-[275px_1fr]">
      <header className="hidden sm:block w-full">
        <Sidebar />
      </header>
      <MobileMenu />
      <main>
        <section className="grid grid-cols-[1fr] lg:grid-cols-[600px_348px]">
          <div>
            <PageHeader page={page} />
            <TabBar />
          </div>
        </section>
      </main>
    </div>
  )
}
