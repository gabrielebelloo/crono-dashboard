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
    <div className="box-border flex h-[71px] w-[184px] max-w-full shrink-0 flex-col rounded-[12px] border border-border p-[8px]">
      <div className="flex shrink-0 items-center justify-between gap-[4px]">
        <span className="text-kpi-title min-w-0 truncate">{title}</span>

        {tooltip && (
          <div className="relative flex shrink-0 items-center">
            <button
              type="button"
              aria-label={`Info: ${title}`}
              className="flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center text-kpiTileLabel transition-opacity duration-150 hover:opacity-70"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
            >
              <svg
                className="h-4 w-4"
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
                  fontWeight="500"
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

      <div className="mt-[4px] flex shrink-0 items-center gap-[8px]">
        {Icon && (
          <Icon className="h-[18px] w-[18px] shrink-0" style={{ color }} aria-hidden="true" />
        )}
        <div className="flex min-w-0 items-baseline gap-[2px]">
          <span className="text-kpi-metric truncate" style={{ color }}>
            {prefix}
            {formatNumber(current, suffix)}
          </span>
          <span className="text-kpi-metric truncate text-gray">/{formatNumber(max, suffix)}</span>
        </div>
      </div>

      <div className="min-h-0 flex-1" aria-hidden />

      <div className="h-[3px] w-full shrink-0 overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full transition-[width] duration-500 ease-out"
          style={{ width: `${progressPct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
