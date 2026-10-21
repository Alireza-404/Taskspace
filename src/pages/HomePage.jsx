import { useState } from "react";
import Navbar from "../components/Layout/Navbar/Navbar";
import Sidebar from "../components/Layout/Sidebar/Sidebar";

export default function HomePage() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Navbar setShowSidebar={setShowSidebar} />

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
}
