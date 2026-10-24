import { CheckCircle2, FolderKanban, ListChecks } from "lucide-react";

export default function Stats() {
  return (
    <section id="stats-section">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-6 md:px-8
        lg:px-12 md:py-8 lg:py-10"
      >
        <div
          className="border border-bc/50 hover:border-bc hover:-translate-y-1
            transition rounded-xl bg-box1 flex flex-col gap-y-8 p-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-secondary">Total tasks</span>

            <div
              className="bg-box3 size-8 rounded-lg flex items-center justify-center
                text-neutral-800"
            >
              <ListChecks className="size-4" />
            </div>
          </div>

          <div className="flex flex-col gap-y-1">
            <span className="text-3xl font-semibold text-neutral-800">04</span>
            <p className="text-xs text-secondary">Across your workspace</p>
          </div>
        </div>

        <div
          className="border border-bc/50 hover:border-bc hover:-translate-y-1
            transition rounded-xl bg-box1 flex flex-col gap-y-8 p-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-secondary">Completed</span>

            <div
              className="bg-box3 size-8 rounded-lg flex items-center justify-center
                text-neutral-800"
            >
              <CheckCircle2 className="size-4" />
            </div>
          </div>

          <div className="flex flex-col gap-y-1">
            <span className="text-3xl font-semibold text-neutral-800">01</span>
            <p className="text-xs text-secondary">One step at a time</p>
          </div>
        </div>

        <div
          className="border border-bc/50 hover:border-bc hover:-translate-y-1
            transition rounded-xl bg-box1 flex flex-col gap-y-8 p-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-secondary">Active projects</span>

            <div
              className="bg-box3 size-8 rounded-lg flex items-center justify-center
                text-neutral-800"
            >
              <FolderKanban className="size-4" />
            </div>
          </div>

          <div className="flex flex-col gap-y-1">
            <span className="text-3xl font-semibold text-neutral-800">03</span>
            <p className="text-xs text-secondary">Your current focus</p>
          </div>
        </div>
      </div>
    </section>
  );
}
