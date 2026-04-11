import { useState } from "react";
import InfoIcon from "../../assets/icons/info.svg?react";

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
    <div className="box-border flex h-[72px] w-full min-w-0 max-w-full shrink-0 flex-col rounded-[8px] border border-border p-2">
      <div className="flex w-full shrink-0 items-center justify-start gap-1">
        <span className="text-kpi-title min-w-0 flex-1 truncate text-left">{title}</span>

        {tooltip && (
          <div className="relative flex shrink-0 items-center">
            <button
              type="button"
              aria-label={`Info: ${title}`}
              className="flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center text-[color:var(--kpi-card-info-icon-color)] transition-opacity duration-150 hover:opacity-70"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
            >
              <InfoIcon className="h-4 w-4 shrink-0" width={16} height={16} aria-hidden />
            </button>

            {showTooltip && (
              <div
                role="tooltip"
                className="absolute left-1/2 top-full z-20 mt-1 flex w-[246px] -translate-x-1/2 flex-col items-center justify-center p-0"
              >
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

      <div className="mt-1 flex w-full min-w-0 shrink-0 flex-row items-center justify-start gap-1">
        {Icon ? (
          <span className="flex h-4 w-4 shrink-0 items-center justify-center">
            <Icon className="block h-4 w-4 shrink-0" style={{ color }} aria-hidden="true" />
          </span>
        ) : null}
        <span className="mt-[3px] inline-flex min-w-0 shrink items-baseline gap-0">
          <span
            className="min-w-0 truncate text-left text-kpi-metric leading-6 tabular-nums"
            style={{ color }}
          >
            {prefix}
            {formatNumber(current, suffix)}
          </span>
          <span className="shrink-0 whitespace-nowrap text-kpi-metric-max leading-6 tabular-nums">
            /{formatNumber(max, suffix)}
          </span>
        </span>
      </div>

      <div className="min-h-0 flex-1" aria-hidden />

      <div className="h-[3px] w-full shrink-0 overflow-hidden rounded-[3px] bg-border">
        <div
          className="h-full rounded-[3px] transition-[width] duration-500 ease-out"
          style={{ width: `${progressPct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
