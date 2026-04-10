import { useState } from "react";
import type { Signal } from "../types/signal";
import { initialSignals } from "../data/signalItems";

export function useSignals() {
  const [signals, setSignals] = useState<Signal[]>(initialSignals);

  const complete = (id: string) => setSignals((prev) => prev.filter((s) => s.id !== id));

  const remove = (id: string) => setSignals((prev) => prev.filter((s) => s.id !== id));

  return { signals, complete, remove };
}
