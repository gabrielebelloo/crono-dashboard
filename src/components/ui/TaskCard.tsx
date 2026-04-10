import ArrowIcon from "../../assets/icons/arrow.svg?react";

export type TaskVariant = "overdue" | "pendingManual" | "pendingAuto" | "completed";

const VARIANT_MAP: Record<TaskVariant, { bg: string; count: string }> = {
  overdue: { bg: "bg-taskOverdueBg", count: "text-taskOverdueText" },
  pendingManual: { bg: "bg-taskPendingManualBg", count: "text-taskPendingManualText" },
  pendingAuto: { bg: "bg-taskPendingAutoBg", count: "text-stackBlue" },
  completed: { bg: "bg-taskCompletedBg", count: "text-taskCompletedText" },
};

export type TaskCardProps = {
  label: string;
  count: number;
  variant: TaskVariant;
  errorCount?: number;
  onClick?: () => void;
  className?: string;
};

export default function TaskCard({
  label,
  count,
  variant,
  errorCount,
  onClick,
  className = "",
}: TaskCardProps) {
  const { bg, count: countTone } = VARIANT_MAP[variant];
  const isPendingAuto = variant === "pendingAuto";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative box-border flex h-[86px] min-w-0 flex-1 basis-0 flex-col items-start rounded-[12.2105px] border-0 p-4 text-left outline-none transition-opacity duration-150 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-gray/30 focus-visible:ring-offset-2 ${isPendingAuto ? "isolate" : ""} ${bg} ${className}`}
    >
      {errorCount != null && errorCount > 0 && (
        <div className="absolute left-[101px] top-2 z-20 flex h-6 min-h-6 w-fit min-w-[71px] items-center gap-0.5 whitespace-nowrap rounded-2xl bg-white py-0 pl-2 pr-1.5">
          <span className="text-b3 shrink-0 text-taskOverdueText">
            {errorCount} {errorCount === 1 ? "error" : "errors"}
          </span>
          <span className="flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden="true">
            <svg
              className="h-4 w-4 text-taskOverdueText"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2.5L2.5 13h11L8 2.5z"
                stroke="currentColor"
                strokeWidth="0.96"
                strokeLinejoin="round"
              />
              <path d="M8 6.5V9" stroke="currentColor" strokeWidth="0.96" strokeLinecap="round" />
              <path d="M8 11h.01" stroke="currentColor" strokeWidth="0.96" strokeLinecap="round" />
            </svg>
          </span>
        </div>
      )}

      <div
        className={`mx-auto flex h-full w-[149.5px] max-w-full flex-col items-stretch justify-between ${isPendingAuto ? "gap-px" : ""}`}
      >
        <span
          className={`flex h-[30px] w-full shrink-0 items-center text-left text-task-count ${countTone}`}
        >
          {count}
        </span>

        <div className="flex h-4 w-full min-w-0 shrink-0 flex-row items-center gap-1 p-0">
          <span className="text-task-label min-w-0 flex-1 truncate text-left">{label}</span>
          <ArrowIcon className="h-4 w-4 shrink-0 text-gray" width={16} height={16} aria-hidden />
        </div>
      </div>
    </button>
  );
}
