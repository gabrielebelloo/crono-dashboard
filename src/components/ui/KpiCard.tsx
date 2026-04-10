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
    <div className="box-border flex h-[71px] w-full min-w-0 max-w-full shrink-0 flex-col rounded-[12px] border border-border p-[8px]">
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
                className="absolute left-1/2 top-full z-20 mt-1 flex w-[246px] -translate-x-1/2 flex-col items-center justify-center p-0"
              >
                {/* Figma: 10×4 frame, 7×4 polygon arrow above bubble */}
                <div className="flex h-1 w-[10px] shrink-0 items-start justify-center" aria-hidden>
                  <svg width="7" height="4" viewBox="0 0 7 4" className="shrink-0" aria-hidden>
                    <polygon points="3.5,0 7,4 0,4" fill="var(--popup-dark-color)" />
                  </svg>
                </div>
                <div className="box-border flex min-h-[64px] w-[246px] shrink-0 flex-row items-center justify-center gap-[10px] self-stretch rounded-[4px] bg-[var(--popup-dark-color)] px-4 py-2">
                  <span className="max-w-[214px] text-center text-b3 text-white">{tooltip}</span>
                </div>
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
