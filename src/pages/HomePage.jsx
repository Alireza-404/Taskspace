import { useState } from "react";
import Navbar from "../components/Layout/Navbar/Navbar";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import Header from "../components/Layout/Header/Header";

export default function HomePage() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <Navbar setShowSidebar={setShowSidebar} />

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <main className="grow">
        <Header />

        {/* more sections */}
      </main>
    </div>
  );
}
