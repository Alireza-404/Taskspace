import { AnimatePresence, motion } from "framer-motion";
import SidebarContent from "./SidebarContent";
import Overlay from "../../Ui/Overlay/Overlay";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <>
      <aside
        className="hidden md:flex w-56 lg:w-64 h-screen overflow-y-auto bg-[#efe3d2]
          flex-col justify-between gap-y-6 p-6 border-r border-bc/50"
      >
        <SidebarContent />
      </aside>

      <AnimatePresence initial={false}>
        {showSidebar && (
          <>
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 top-0 bottom-0 md:hidden flex w-56 overflow-y-auto
            bg-[#efe3d2] flex-col justify-between gap-y-6 p-6 border-r border-bc/50 z-30"
            >
              <SidebarContent setShowSidebar={setShowSidebar} />
            </motion.aside>

            <Overlay
              className={"block md:hidden"}
              click={() => setShowSidebar(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
