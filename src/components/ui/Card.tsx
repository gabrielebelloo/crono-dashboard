type CardProps = {
  children: React.ReactNode;
  className?: string;
  headerTitle?: string;
  headerActionName?: string;
  headerActionFunc?: () => void;
  headerActionIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  headerCounter?: number;
};

export default function Card({
  children,
  className = "",
  headerTitle,
  headerActionName,
  headerActionIcon: HeaderActionIcon,
  headerActionFunc,
  headerCounter,
}: CardProps) {
  const hasBg = className.includes("bg-");
  return (
    <div
      className={`box-border flex flex-col rounded-[15.5px] border border-border p-[16px] ${hasBg ? "" : "bg-white"} ${className}`}
    >
      {!!headerTitle && (
        <header className="mb-[8px] flex h-[22px] min-h-[22px] w-full shrink-0 items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <div className="text-s2 text-dark">{headerTitle}</div>
            {!!headerCounter && (
              <div className="flex justify-center items-center text-b3 text-white bg-yellow w-[28px] h-[24px] rounded-[12px]">
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
        </header>
      )}
      {children}
    </div>
  );
}
