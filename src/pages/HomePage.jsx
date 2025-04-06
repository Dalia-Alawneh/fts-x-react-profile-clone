import Sidebar from "../components/layout/sidebar/index.jsx";

export default function HomePage() {
  return (
    <div className="grid grid-cols-[275px_1fr]">
      <header>
        <Sidebar />
      </header>
      <main>
        <div className="grid grid-cols-[600px_348px]">
          <div></div>
        </div>
      </main>
    </div>
  )
}
