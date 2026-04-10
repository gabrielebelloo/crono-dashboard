import ArrowIcon from "../../assets/arrow.svg?react";

export type TaskCardProps = {
  label: string;
  count: number;
  colorClass: string;
  bgClass: string;
  errorCount?: number;
  onClick?: () => void;
};

export default function TaskCard({
  label,
  count,
  colorClass,
  bgClass,
  errorCount,
  onClick,
}: TaskCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col justify-between rounded-xl p-3 gap-3 cursor-pointer w-full text-left transition-opacity duration-150 hover:opacity-90 ${bgClass}`}
    >
      <div className="flex items-center justify-between">
        <span className={`text-[28px] font-semibold leading-none ${colorClass}`}>{count}</span>

        {!!errorCount && (
          <div className="flex items-center gap-1 rounded-full bg-white px-2 py-[3px] text-[11px] font-medium text-red-500">
            {errorCount} error
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="12"
                y1="9"
                x2="12"
                y2="13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="12"
                y1="17"
                x2="12.01"
                y2="17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[12px] font-medium leading-[16px] text-[#3E485B]">{label}</span>
        <ArrowIcon className="shrink-0 text-[#3E485B]" aria-hidden="true" />
      </div>
    </button>
  );
}
