import { useLayoutEffect, useRef, useState } from "react";
import TaskRowArrowIcon from "../../assets/icons/task-row-arrow.svg?react";
import WarningIcon from "../../assets/icons/warning.svg?react";

/** ~71px pill + a little room so the label does not sit on the count */
const ERROR_BADGE_TEXT_MIN_INNER_PX = 104;

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
  const cardRef = useRef<HTMLButtonElement>(null);
  const [showErrorLabel, setShowErrorLabel] = useState(false);

  const hasErrorBadge = errorCount != null && errorCount > 0;

  useLayoutEffect(() => {
    if (!hasErrorBadge) return;
    const el = cardRef.current;
    if (!el) return;
    const measure = () => {
      setShowErrorLabel(el.clientWidth >= ERROR_BADGE_TEXT_MIN_INNER_PX);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [hasErrorBadge]);

  return (
    <button
      ref={cardRef}
      type="button"
      onClick={onClick}
      className={`relative box-border flex h-[86px] min-w-0 w-full max-w-full shrink-0 flex-col items-stretch overflow-hidden rounded-[12.2105px] border-0 p-4 text-left outline-none transition-opacity duration-150 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-gray/30 focus-visible:ring-offset-2 ${isPendingAuto ? "isolate" : ""} ${bg} ${className}`}
    >
      {hasErrorBadge && (
        <div
          className={`absolute top-2 z-20 box-border flex h-6 shrink-0 flex-row items-center overflow-hidden rounded-2xl bg-white ${
            showErrorLabel
              ? "right-[9.5px] w-[71px] justify-between gap-0.5 py-0 pl-2"
              : "right-2 w-6 justify-center ring-1 ring-border/60"
          }`}
          role="status"
          aria-label={`${errorCount} ${errorCount === 1 ? "error" : "errors"}`}
        >
          {showErrorLabel && (
            <span className="min-w-0 flex-1 truncate text-b3 text-taskOverdueText">
              {errorCount} {errorCount === 1 ? "error" : "errors"}
            </span>
          )}
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center text-taskOverdueText"
            aria-hidden="true"
          >
            <WarningIcon className="h-4 w-4 shrink-0" width={16} height={16} />
          </span>
        </div>
      )}

      <div
        className={`flex h-full w-full min-w-0 max-w-full flex-col items-stretch justify-between artboard:mr-auto artboard:max-w-[149.5px]${isPendingAuto ? " gap-px" : ""}`}
      >
        <span
          className={`flex h-[30px] w-full min-w-0 shrink-0 items-center text-left text-task-count ${countTone}`}
        >
          {count}
        </span>

        <div
          className={`flex h-4 w-full min-w-0 max-w-full flex-row items-center artboard:mx-auto artboard:max-w-[149.5px] ${showArrow ? "" : "justify-start"}`}
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
