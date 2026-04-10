import { useState } from "react";

export type KpiCardProps = {
  title: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  color: string;
  current: number;
  max: number;
  prefix?: string;
  suffix?: string;
  tooltip?: string;
};

function formatNumber(value: number, suffix?: string): string {
  const formatted = suffix === "K" ? `${value / 1000}` : `${value}`;
  return `${formatted}${suffix === "K" ? "K" : ""}`;
}

export default function KpiCard({
  title,
  icon: Icon,
  color,
  current,
  max,
  prefix,
  suffix,
  tooltip,
}: KpiCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const progressPct = Math.min(max > 0 ? (current / max) * 100 : 0, 100);

  return (
    <div className="flex flex-col justify-between rounded-xl border border-border p-3 gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium" style={{ color: "#3E485B" }}>
          {title}
        </span>

        {tooltip && (
          <div className="relative flex items-center">
            <button
              type="button"
              aria-label={`Info: ${title}`}
              className="hover:opacity-70 transition-opacity duration-150 cursor-pointer"
              style={{ color: "#3E485B" }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
                <text
                  x="8"
                  y="11.5"
                  textAnchor="middle"
                  fontSize="8"
                  fontWeight="600"
                  fontFamily="Poppins, sans-serif"
                  fill="currentColor"
                >
                  i
                </text>
              </svg>
            </button>

            {showTooltip && (
              <div
                role="tooltip"
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-20 w-[246px] rounded-[4px] px-4 py-2 text-xs text-white leading-[18px]"
                style={{ background: "#151618" }}
              >
                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-full h-0 w-0 border-x-[5px] border-b-[5px] border-x-transparent"
                  style={{ borderBottomColor: "#151618" }}
                />
                {tooltip}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        {Icon && (
          <Icon className="h-[20px] w-[20px] shrink-0" style={{ color }} aria-hidden="true" />
        )}
        <div className="flex items-baseline gap-[2px]">
          <span className="font-medium leading-6" style={{ color, fontSize: "16px" }}>
            {prefix}
            {formatNumber(current, suffix)}
          </span>
          <span className="font-medium leading-6 text-gray" style={{ fontSize: "16px" }}>
            /{formatNumber(max, suffix)}
          </span>
        </div>
      </div>

      <div className="h-[3px] w-full rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full transition-[width] duration-500 ease-out"
          style={{ width: `${progressPct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
