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
      className={`relative box-border flex h-[86px] min-w-[148px] flex-1 basis-0 flex-col items-stretch overflow-hidden rounded-[12.2105px] border-0 p-3 text-left outline-none transition-opacity duration-150 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-gray/30 focus-visible:ring-offset-2 sm:min-w-[155px] md:min-w-0 md:p-4 ${isPendingAuto ? "isolate" : ""} ${bg} ${className}`}
    >
      {errorCount != null && errorCount > 0 && (
        <div className="absolute right-1.5 top-1.5 z-20 flex h-6 max-w-[calc(100%-0.75rem)] items-center gap-0.5 overflow-hidden text-ellipsis whitespace-nowrap rounded-2xl bg-white py-0 pl-2 pr-1.5">
          <span className="min-w-0 truncate text-b3 text-taskOverdueText">
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
        className={`mr-auto flex h-full w-full max-w-[149.5px] flex-col items-stretch justify-between px-0.5 ${isPendingAuto ? "gap-px" : ""}`}
      >
        <span
          className={`flex h-[30px] w-full min-w-0 shrink-0 items-center text-left text-task-count ${countTone}`}
        >
          {count}
        </span>

        <div className="flex min-h-0 w-full min-w-0 flex-row items-end justify-between gap-1 pb-0.5">
          <span className="text-kpiTileLabel min-w-0 max-w-[calc(100%-1.25rem)] break-words text-left text-[11px] font-medium leading-[13px] line-clamp-2 md:text-task-label md:leading-4 md:line-clamp-2 lg:line-clamp-1">
            {label}
          </span>
          <ArrowIcon
            className="mb-0.5 h-4 w-4 shrink-0 self-end text-gray"
            width={16}
            height={16}
          />
        </div>
      </div>
    </button>
  );
}
