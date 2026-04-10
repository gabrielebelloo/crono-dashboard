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
  className,
  headerTitle,
  headerActionName,
  headerActionIcon: HeaderActionIcon,
  headerActionFunc,
  headerCounter,
}: CardProps) {
  return (
    <div className={`flex flex-col rounded-xl border border-border p-4 ${className}`}>
      {!!headerTitle && (
        <header className="flex justify-between items-center mb-2">
          <div className="flex gap-2">
            <div className="font-semibold">{headerTitle}</div>
            {!!headerCounter && (
              <div className="flex justify-center items-center font-medium text-[12px] text-white bg-yellow-500 w-[28px] h-[24px] rounded-[12px]">
                {headerCounter}
              </div>
            )}
          </div>
          {!!headerActionName && (
            <button
              onClick={headerActionFunc}
              className="flex justify between items-center gap-1 text-main text-sm font-medium cursor-pointer"
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
