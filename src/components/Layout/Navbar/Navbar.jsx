import Logo from "../../../assets/logo.svg";

import { Menu } from "lucide-react";

export default function Navbar({ setShowSidebar }) {
  return (
    <nav
      className="md:hidden flex items-center justify-between bg-[#efe3d2] h-22 p-4
        border-b border-bc/50"
    >
      <div className="flex items-center gap-x-2.5">
        <img src={Logo} alt="logo/brand" />
        <span className="font-bold text-[22px] text-neutral-800">
          Taskspace
        </span>
      </div>

      <span
        className="text-secondary cursor-pointer"
        onClick={() => setShowSidebar(true)}
      >
        <Menu size={28} />
      </span>
    </nav>
  );
}
