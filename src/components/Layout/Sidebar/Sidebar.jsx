import Logo from "../../../assets/logo.svg";

import { Link, useLocation } from "react-router-dom";
import { linksArray } from "../../../data/links";
import { LogOut } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="hidden md:flex w-56 lg:w-64 h-screen overflow-y-auto bg-[#eedec785]
        flex-col justify-between gap-y-6 p-6 border-r border-bc/50"
    >
      <div className="flex flex-col gap-y-8">
        <div className="flex items-center gap-x-2.5">
          <img src={Logo} alt="logo/brand" />
          <span className="font-bold text-2xl text-neutral-800">Taskspace</span>
        </div>

        <div className="flex flex-col gap-y-4 mt-4">
          <span className="text-secondary text-[10px] uppercase tracking-widest">
            Workspace
          </span>

          <ul className="flex flex-col gap-y-2.5">
            {linksArray.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className={`flex items-center gap-x-2.5 p-4 rounded-xl bg-gradient-to-r
                    text-xs hover:translate-x-1 transition ${
                      location.pathname === item.link
                        ? "from-[#574031] to-[#39291f] text-white"
                        : "text-secondary hover:bg-box1 hover:text-neutral-800"
                    }`}
                  >
                    <Icon className="size-3.5" />
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <span className="w-full h-px bg-bc/50"></span>

        <div className="flex flex-col gap-y-4">
          <span className="text-secondary text-[10px] uppercase tracking-widest">
            My Projects
          </span>

          <ul className="flex flex-col gap-y-2.5">
            <li>
              <Link
                className="text-xs text-secondary p-3 rounded-xl hover:bg-box1 transition-colors
                flex items-center gap-x-2.5"
              >
                <div className="size-2 bg-red-300 rounded-full"></div>
                Personal
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="border border-bc rounded-xl flex flex-col gap-y-2.5 bg-box1 p-4">
          <p className="text-neutral-800">Make room for what matters.</p>

          <span className="uppercase text-secondary tracking-wider text-[10px]">
            A Little Reminder
          </span>
        </div>

        <button
          type="button"
          className="text-white text-sm rounded-lg p-3 bg-[#a45749] hover:bg-[#864337]
          cursor-pointer flex items-center justify-center gap-x-2 transition-colors"
        >
          <LogOut className="size-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
