import TaskRowArrowIcon from "../../assets/icons/task-row-arrow.svg?react";
import WarningIcon from "../../assets/icons/warning.svg?react";

export type TaskVariant = "overdue" | "pendingManual" | "pendingAuto" | "completed";

const VARIANT_MAP: Record<TaskVariant, { bg: string; count: string }> = {
  overdue: { bg: "bg-taskOverdueBg", count: "text-taskOverdueText" },
  pendingManual: { bg: "bg-taskPendingManualBg", count: "text-taskPendingManualText" },
  pendingAuto: { bg: "bg-taskPendingAutoBg", count: "text-taskPendingAutoText" },
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
  const showArrow = variant !== "completed";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative box-border flex h-[86px] w-[181.5px] min-w-[181.5px] shrink-0 flex-col items-stretch overflow-hidden rounded-[12.2105px] border-0 p-4 text-left outline-none transition-opacity duration-150 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-gray/30 focus-visible:ring-offset-2 xl:min-w-0 xl:w-full xl:max-w-full ${isPendingAuto ? "isolate" : ""} ${bg} ${className}`}
    >
      {errorCount != null && errorCount > 0 && (
        <div
          className="absolute right-[9.5px] top-2 z-20 box-border flex h-6 w-[71px] shrink-0 flex-row items-center gap-0.5 overflow-hidden rounded-2xl bg-white py-0 pl-2"
          role="status"
        >
          <span className="min-w-0 flex-1 truncate text-b3 text-taskOverdueText">
            {errorCount} {errorCount === 1 ? "error" : "errors"}
          </span>
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center text-taskOverdueText"
            aria-hidden="true"
          >
            <WarningIcon className="h-4 w-4 shrink-0" width={16} height={16} />
          </span>
        </div>
      )}

      <div
        className={`mr-auto flex h-full w-full max-w-[149.5px] flex-col items-stretch justify-between${isPendingAuto ? " gap-px" : ""}`}
      >
        <span
          className={`flex h-[30px] w-full min-w-0 shrink-0 items-center text-left text-task-count ${countTone}`}
        >
          {count}
        </span>

        <div
          className={`mx-auto flex h-4 w-full max-w-[149.5px] min-w-0 flex-row items-center ${showArrow ? "" : "justify-start"}`}
        >
          <span className="text-task-label min-w-0 flex-1 truncate text-left">{label}</span>
          {showArrow && (
            <TaskRowArrowIcon
              className="h-4 w-4 shrink-0 text-gray"
              width={16}
              height={16}
              aria-hidden
            />
          )}
        </div>
      </div>
    </button>
  );
}
