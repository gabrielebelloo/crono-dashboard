import { useState, useRef, useEffect } from "react";
import type { Signal } from "../../types/signal";
import CheckmarkIcon from "../../assets/icons/checkmark.svg?react";
import RemoveIcon from "../../assets/icons/remove.svg?react";

type Props = {
  signal: Signal;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
  showDivider?: boolean;
};

function Avatar({ avatar }: { avatar: Signal["avatar"] }) {
  const base =
    "box-border flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-[16px] border border-avatarRing";
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
      <span className="text-[11px] font-semibold leading-none text-white">{avatar.initials}</span>
    </div>
  );
}

export default function SignalItem({ signal, onComplete, onDelete, showDivider = true }: Props) {
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
    <div className="flex w-full flex-col gap-[10px] px-4">
      <div className="flex min-h-10 w-full items-center gap-12">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <div className="relative shrink-0 self-center">
            <Avatar avatar={signal.avatar} />
            <span
              className="absolute left-0 top-1 h-1.5 w-1.5 rounded-full bg-yellow ring-2 ring-white"
              aria-hidden
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <p className="text-s2 text-dark">
              {signal.description.map((part, i) => (
                <span key={i} className={part.highlight ? "text-main" : undefined}>
                  {part.text}
                </span>
              ))}
            </p>

            <div className="flex flex-wrap items-center gap-1">
              {signal.tags.map((tag) => (
                <span key={tag.label} className={`text-b3 ${tag.colorClass}`}>
                  {tag.label}
                </span>
              ))}
              {signal.inSequence && (
                <span className="rounded-[12px] bg-light px-1 py-0.5 text-[10px] font-medium leading-3 text-secondary">
                  In sequence
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex h-8 shrink-0 items-center gap-4">
          <span className="text-b5 whitespace-nowrap text-gray">{signal.date}</span>

          <div className="relative" ref={popoverRef}>
            <button
              type="button"
              onClick={() => setOpen((p) => !p)}
              className="box-border flex h-8 w-[90px] shrink-0 cursor-pointer items-center justify-center rounded-[34px] bg-main px-4 py-[7px] text-s3 text-white transition-opacity duration-150 hover:opacity-90 active:opacity-80"
            >
              Action
            </button>

            {open && (
              <div
                className="absolute right-0 top-full z-30 mt-2 w-[216px] rounded-[15.5px] border border-border bg-white"
                style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex flex-col gap-1 p-2">
                  <button
                    type="button"
                    onClick={() => {
                      onComplete(signal.id);
                      setOpen(false);
                    }}
                    className="flex h-10 w-full cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-b3 text-secondary transition-colors duration-150 hover:bg-light active:opacity-80"
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
                    className="flex h-10 w-full cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-b3 text-dark transition-colors duration-150 hover:bg-red-50 hover:text-red-500 active:opacity-80"
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

      {showDivider && (
        <div className="h-px w-full max-w-[796px] self-center bg-border" aria-hidden />
      )}
    </div>
  );
}
