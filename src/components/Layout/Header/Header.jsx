import { useLocation } from "react-router-dom";
import { linksArray } from "../../../data/links";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CalendarDays, Clock3, LayoutDashboard } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [now, setNow] = useState(new Date());

  const pathname = linksArray.find((item) => item.link === location.pathname);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(now);

  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);

  return (
    <header id="header" className="relative">
      <div
        className="relative z-10 flex flex-col gap-6 px-4 py-6 sm:px-6 md:flex-row md:items-center
        md:justify-between md:gap-8 md:px-8 md:py-8 lg:px-12 lg:py-10"
      >
        <div className="flex min-w-0 flex-col gap-4">
          <div
            className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide
            sm:text-sm"
          >
            <LayoutDashboard size={16} className="text-brown" />

            <span className="text-secondary">Workspace /</span>

            <span className="text-brown">{pathname?.text ?? "Overview"}</span>
          </div>

          <div className="flex flex-col items-start gap-3">
            <motion.h1
              animate={{ backgroundPositionX: ["0%", "200%"] }}
              transition={{ duration: 10, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
              className="bg-gradient-to-r from-[#352a22] via-[#765640] to-[#352a22]
                bg-clip-text font-display text-[28px] font-semibold leading-tight
                text-transparent sm:text-4xl lg:text-[40px]"
            >
              Everything in its place.
            </motion.h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:flex md:shrink-0">
          <div
            className="flex items-center gap-2.5 rounded-xl border border-bc/50 bg-box1
            px-3 py-3 sm:gap-3 sm:px-4"
          >
            <div
              className="flex size-9 shrink-0 items-center justify-center
                rounded-lg bg-box3/50 text-brown sm:size-10"
            >
              <CalendarDays size={18} strokeWidth={1.7} />
            </div>

            <div className="min-w-0">
              <p
                className="mb-1 text-[10px] font-medium uppercase tracking-widest
                text-secondary sm:text-[11px]"
              >
                Today
              </p>

              <time
                dateTime={[
                  now.getFullYear(),
                  String(now.getMonth() + 1).padStart(2, "0"),
                  String(now.getDate()).padStart(2, "0"),
                ].join("-")}
                className="text-xs font-semibold tracking-tight text-neutral-800 sm:text-sm"
              >
                {date}
              </time>
            </div>
          </div>

          <div
            className="flex items-center gap-2.5 rounded-xl border border-bc/50 bg-box3 px-3 
            py-3 sm:gap-3 sm:px-4"
          >
            <div
              className="flex size-9 shrink-0 items-center justify-center
                rounded-lg bg-box1 text-brown sm:size-10"
            >
              <Clock3 size={18} strokeWidth={1.7} />
            </div>

            <div className="min-w-0">
              <p
                className="mb-1 text-[10px] font-medium uppercase tracking-widest
               text-secondary sm:text-[11px]"
              >
                Local time
              </p>

              <time
                dateTime={now.toISOString()}
                className="font-mono text-sm font-semibold text-neutral-800 sm:text-base"
              >
                {time}
              </time>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden h-32 w-2/3 -translate-x-1/2
        rounded-full bg-[#dfb588]/20 blur-3xl md:block"
      />
    </header>
  );
}
