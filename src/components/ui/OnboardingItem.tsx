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
      className="box-border flex h-10 w-full min-w-0 shrink-0 cursor-pointer items-center justify-between gap-0 border-0 bg-transparent py-0 pl-0 pr-2 text-left transition-opacity duration-150 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2"
    >
      <span className="flex min-h-10 min-w-0 flex-1 items-center gap-4">
        <img src={icon} alt="" aria-hidden="true" className="h-10 w-10 shrink-0 object-contain" />
        <span className="min-w-0 text-pretty text-left text-s2 text-dark">{label}</span>
      </span>
      <span className="shrink-0 whitespace-nowrap text-b2 text-gray">{duration}</span>
    </button>
  );
}
