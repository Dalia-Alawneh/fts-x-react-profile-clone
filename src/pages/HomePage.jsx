import PageHeader from "../components/layout/pageHeader/PageHeader.jsx";
import Sidebar from "../components/layout/sidebar/index.jsx";
import { page } from "../constants/index.jsx";

export default function HomePage() {
  return (
    <div className="grid grid-cols-[275px_1fr]">
      <header>
        <Sidebar />
      </header>
      <main>
        <section className="grid grid-cols-[600px_348px]">
          <PageHeader page={page} />
        </section>
      </main>
    </div>
  )
}
