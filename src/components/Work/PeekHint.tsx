"use client";
import { useSyncExternalStore } from "react";
import { hasUsedPeek, subscribePeekUsed } from "@/lib/peekHint";

// Touch-only hint for the long-press preview in LinkPreview. Hidden on the
// server render and once the visitor has peeked at least once.
export const PeekHint = () => {
  const used = useSyncExternalStore(subscribePeekUsed, hasUsedPeek, () => true);

  if (used) {
    return null;
  }

  return (
    <span className="hidden [@media(hover:none)]:inline text-[13px] text-muted">
      Hold to preview
    </span>
  );
};
