type CardProps = {
  children: React.ReactNode;
  className?: string;
  headerTitle?: string;
  headerActionName?: string;
  headerActionFunc?: () => void;
  headerActionIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  headerCounter?: number;
  subheader?: React.ReactNode;
};

export default function Card({
  children,
  className = "",
  headerTitle,
  headerActionName,
  headerActionIcon: HeaderActionIcon,
  headerActionFunc,
  headerCounter,
  subheader,
}: CardProps) {
  const hasBg = className.includes("bg-");
  return (
    <div
      className={`box-border flex flex-col rounded-[16px] border border-border p-[16px] ${hasBg ? "" : "bg-white"} ${className}`}
    >
      {!!headerTitle && (
        <header
          className={
            subheader
              ? "mb-0 flex w-full shrink-0 flex-col items-stretch gap-1 px-4"
              : "mb-[8px] flex h-[22px] min-h-[22px] w-full shrink-0 items-center justify-between"
          }
        >
          {subheader ? (
            <>
              <div className="flex min-h-[24px] w-full items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <div className="text-s2 text-dark">{headerTitle}</div>
                  {!!headerCounter && (
                    <div className="flex h-6 min-w-[28px] shrink-0 items-center justify-center rounded-[12px] bg-yellow px-2 py-[3px] text-b3 font-semibold leading-4 text-white tabular-nums">
                      {headerCounter}
                    </div>
                  )}
                </div>
                {!!headerActionName && (
                  <button
                    type="button"
                    onClick={headerActionFunc}
                    className="inline-flex h-[18px] shrink-0 flex-none cursor-pointer flex-row items-center gap-[5px] border-0 bg-transparent p-0 text-secondary outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2"
                  >
                    <span className="text-s3 flex h-[18px] flex-none items-center whitespace-nowrap">
                      {headerActionName}
                    </span>
                    {HeaderActionIcon && (
                      <HeaderActionIcon
                        className="h-4 w-4 shrink-0 self-center"
                        width={16}
                        height={16}
                        aria-hidden
                      />
                    )}
                  </button>
                )}
              </div>
              {subheader}
            </>
          ) : (
            <>
              <div className="flex items-center gap-[6px]">
                <div className="text-s2 text-dark">{headerTitle}</div>
                {!!headerCounter && (
                  <div className="flex h-6 min-w-[28px] shrink-0 items-center justify-center rounded-[12px] bg-yellow px-2 py-[3px] text-b3 font-semibold leading-4 text-white tabular-nums">
                    {headerCounter}
                  </div>
                )}
              </div>
              {!!headerActionName && (
                <button
                  type="button"
                  onClick={headerActionFunc}
                  className="inline-flex h-[18px] shrink-0 flex-none cursor-pointer flex-row items-center gap-[5px] border-0 bg-transparent p-0 text-secondary outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2"
                >
                  <span className="text-s3 flex h-[18px] flex-none items-center whitespace-nowrap">
                    {headerActionName}
                  </span>
                  {HeaderActionIcon && (
                    <HeaderActionIcon
                      className="h-4 w-4 shrink-0 self-center"
                      width={16}
                      height={16}
                      aria-hidden
                    />
                  )}
                </button>
              )}
            </>
          )}
        </header>
      )}
      {children}
    </div>
  );
}
