import { useState, useRef, useEffect } from "react";
import type { Signal } from "../../types/signal";
import CheckmarkIcon from "../../assets/icons/checkmark.svg?react";
import RemoveIcon from "../../assets/icons/remove.svg?react";

type Props = {
  signal: Signal;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

function Avatar({ avatar }: { avatar: Signal["avatar"] }) {
  const base =
    "h-8 w-8 shrink-0 rounded-full flex items-center justify-center overflow-hidden border border-[#D5E0F0]";
  if (avatar.type === "logo") {
    const Logo = avatar.logo;
    return (
      <div className={`${base} ${avatar.bgClass}`}>
        <Logo className="h-[18px] w-[18px]" aria-hidden="true" />
      </div>
    );
  }
  return (
    <div className={`${base} ${avatar.bgClass}`}>
      <span className="text-[11px] font-semibold text-white leading-none">{avatar.initials}</span>
    </div>
  );
}

export default function SignalItem({ signal, onComplete, onDelete }: Props) {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleOutsideClick(e: MouseEvent) {
      if (!popoverRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  return (
    <div className="flex items-center gap-4 lg:gap-12 px-4 py-2">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <Avatar avatar={signal.avatar} />

        <div className="flex flex-col gap-[2px] min-w-0">
          <p className="text-[14px] font-semibold leading-[22px] text-[#010E27]">
            {signal.description.map((part, i) => (
              <span key={i} className={part.highlight ? "text-main" : ""}>
                {part.text}
              </span>
            ))}
          </p>

          <div className="flex items-center gap-1 flex-wrap">
            {signal.tags.map((tag) => (
              <span
                key={tag.label}
                className={`text-[12px] font-medium leading-[16px] ${tag.colorClass}`}
              >
                {tag.label}
              </span>
            ))}
            {signal.inSequence && (
              <span className="text-[10px] font-medium leading-[12px] text-[#0A9B94] bg-light px-1 py-[2px] rounded-full">
                In sequence
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <span className="hidden md:inline text-[11px] font-medium leading-[14px] text-gray whitespace-nowrap">
          {signal.date}
        </span>

        <div className="relative" ref={popoverRef}>
          <button
            type="button"
            onClick={() => setOpen((p) => !p)}
            className="h-8 px-4 rounded-[34px] bg-main text-white text-[14px] font-medium leading-[18px] cursor-pointer hover:opacity-90 active:opacity-80 transition-opacity duration-150"
          >
            Action
          </button>

          {open && (
            <div
              className="absolute right-0 top-full mt-2 z-30 w-[216px] rounded-2xl border border-border bg-white"
              style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex flex-col gap-1 p-2">
                <button
                  type="button"
                  onClick={() => {
                    onComplete(signal.id);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between w-full px-2 py-2 h-10 rounded-lg text-[#0A9B94] text-[12px] font-medium leading-[16px] cursor-pointer hover:bg-light active:opacity-80 transition-colors duration-150"
                >
                  Complete
                  <CheckmarkIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onDelete(signal.id);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between w-full px-2 py-2 h-10 rounded-lg text-[#010E27] text-[12px] font-medium leading-[16px] cursor-pointer hover:bg-red-50 hover:text-red-500 active:opacity-80 transition-colors duration-150"
                >
                  Delete
                  <RemoveIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
