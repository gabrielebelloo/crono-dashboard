type CardProps = {
  children: React.ReactNode;
  className?: string;
  headerTitle?: string;
  headerAction?: string;
  headerActionIcon?: React.FunctionComponent;
  headerCounter?: number;
};

export default function Card({
  children,
  className,
  headerTitle,
  headerAction,
  headerActionIcon: HeaderActionIcon,
  headerCounter,
}: CardProps) {
  return (
    <div className={`flex flex-col bg-white rounded-xl border border-border p-4 ${className}`}>
      {!!headerTitle && (
        <header className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="font-semibold">{headerTitle}</div>
            {!!headerCounter && (
              <div className="bg-yellow-500 w-[24px] h-[24px] rounded-[12px]">{headerCounter}</div>
            )}
          </div>
          {!!headerAction && (
            <button className="flex justify between items-center gap-1 text-main text-sm cursor-pointer">
              {headerAction}
              {HeaderActionIcon && <HeaderActionIcon />}
            </button>
          )}
        </header>
      )}
      {children}
    </div>
  );
}
