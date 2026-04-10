type CardProps = {
  children: React.ReactNode;
  className?: string;
  headerTitle?: string;
  headerActionName?: string;
  headerActionFunc?: () => void;
  headerActionIcon?: React.FunctionComponent;
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
      className={`flex flex-col rounded-2xl border border-border p-4 ${hasBg ? "" : "bg-white"} ${className}`}
    >
      {!!headerTitle && (
        <header className="flex justify-between items-center mb-2 shrink-0">
          <div className="flex items-center gap-[6px]">
            <div className="text-sm font-semibold leading-[22px]">{headerTitle}</div>
            {!!headerCounter && (
              <div className="flex justify-center items-center font-semibold text-[12px] leading-[16px] text-white bg-[#F9BB06] w-[28px] h-[24px] rounded-[12px]">
                {headerCounter}
              </div>
            )}
          </div>
          {!!headerActionName && (
            <button
              onClick={headerActionFunc}
              className="flex justify-between items-center gap-1 text-main text-sm font-medium cursor-pointer"
            >
              {headerActionName}
              {HeaderActionIcon && <HeaderActionIcon />}
            </button>
          )}
        </header>
      )}
      {children}
    </div>
  );
}
