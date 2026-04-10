export type OnboardingItemProps = {
  icon: string;
  label: string;
  duration: string;
  onClick?: () => void;
};

export default function OnboardingItem({ icon, label, duration, onClick }: OnboardingItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="box-border flex h-10 w-[373px] max-w-full shrink-0 cursor-pointer items-center justify-between border-0 bg-transparent py-0 pl-0 pr-2 text-left transition-opacity duration-150 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2"
    >
      <span className="flex h-10 shrink-0 items-center gap-4">
        <img src={icon} alt="" aria-hidden="true" className="h-10 w-10 shrink-0 object-contain" />
        <span className="flex items-center gap-2 text-s2 leading-[22px] text-dark">{label}</span>
      </span>
      <span className="flex h-6 min-w-[44px] shrink-0 items-start justify-end">
        <span className="whitespace-nowrap text-b2 font-normal leading-6 text-gray">
          {duration}
        </span>
      </span>
    </button>
  );
}
