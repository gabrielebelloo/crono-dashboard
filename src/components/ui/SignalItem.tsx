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
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div className="flex w-full min-w-0 flex-col gap-[10px] px-4">
      <div className="flex w-full min-w-0 flex-col gap-3 sm:min-h-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:gap-8">
        <div className="flex min-w-0 max-w-[min(100%,540px)] shrink items-center gap-4">
          <div className="relative shrink-0 self-center">
            <Avatar avatar={signal.avatar} />
            <span
              className="absolute left-0 top-1 h-1.5 w-1.5 rounded-full bg-yellow ring-2 ring-white"
              aria-hidden
            />
          </div>

          <div className="flex min-w-0 flex-col gap-0.5">
            <p className="min-w-0 text-pretty text-s2 text-dark">
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

        <div className="flex w-full shrink-0 flex-row flex-wrap items-center justify-end gap-3 sm:w-auto sm:gap-4">
          <span className="text-b5 whitespace-nowrap text-gray">{signal.date}</span>

          <div className="relative shrink-0" ref={popoverRef}>
            <button
              type="button"
              aria-expanded={open}
              aria-haspopup="menu"
              onClick={() => setOpen((p) => !p)}
              className="box-border flex h-8 w-[90px] shrink-0 cursor-pointer items-center justify-center rounded-[34px] bg-main px-4 py-[7px] text-s3 text-white transition-opacity duration-150 hover:opacity-90 active:opacity-80"
            >
              Action
            </button>

            {open && (
              <div
                className="absolute left-1/2 top-full z-30 mt-2 box-border flex w-[min(100vw-2rem,216px)] -translate-x-1/2 flex-col items-start gap-[10px] rounded-[16px] border border-border bg-white p-2 shadow-[0_4px_8px_rgba(0,0,0,0.1)] sm:left-auto sm:right-0 sm:translate-x-0 sm:w-[216px]"
                role="menu"
              >
                {/* Figma: inner column 200px content width, gap 4px between rows */}
                <div className="flex w-full flex-col items-center gap-1">
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onComplete(signal.id);
                      setOpen(false);
                    }}
                    className="box-border flex h-10 w-full cursor-pointer flex-row items-center gap-2 rounded-lg !bg-[var(--light-color)] px-2 py-2 text-left transition-colors duration-150 hover:!bg-[var(--hover-color)] active:opacity-90"
                  >
                    <span className="min-w-0 flex-1 text-b3 leading-4 text-secondary">
                      Complete
                    </span>
                    <CheckmarkIcon className="h-6 w-6 shrink-0 text-secondary" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onDelete(signal.id);
                      setOpen(false);
                    }}
                    className="box-border flex h-10 w-full cursor-pointer flex-row items-center gap-2 rounded-lg bg-transparent px-2 py-2 text-left transition-colors duration-150 hover:!bg-[var(--hover-color)] active:opacity-90"
                  >
                    <span className="min-w-0 flex-1 text-b3 leading-4 text-dark">Delete</span>
                    <RemoveIcon className="h-6 w-6 shrink-0 text-dark" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showDivider && <div className="h-px w-full bg-border" aria-hidden />}
    </div>
  );
}
