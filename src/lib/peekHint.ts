// Tracks whether the visitor has used the touch "peek" (hold a work card to
// preview it), so the "Hold to preview" hint can hide itself afterwards.
const STORAGE_KEY = "peek-hint-dismissed";
const USED_EVENT = "peek-used";

export const markPeekUsed = () => {
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {}
  window.dispatchEvent(new Event(USED_EVENT));
};

export const subscribePeekUsed = (onChange: () => void) => {
  window.addEventListener(USED_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(USED_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
};

export const hasUsedPeek = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};
