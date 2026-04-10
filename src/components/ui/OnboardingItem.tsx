export type OnboardingItemProps = {
  icon: string;
  label: string;
  /** Estimated duration, e.g. "5 min" */
  duration: string;
  onClick?: () => void;
};

export default function OnboardingItem({
  icon,
  label,
  duration,
  onClick,
}: OnboardingItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 py-3 text-left transition-opacity duration-150 hover:opacity-80 cursor-pointer"
    >
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="h-10 w-10 shrink-0 rounded-xl object-contain"
      />
      <span className="flex-1 text-sm font-semibold text-[#3E485B]">{label}</span>
      <span className="shrink-0 text-sm font-medium text-gray">{duration}</span>
    </button>
  );
}
