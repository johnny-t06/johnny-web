"use client";

// The page is prerendered at build time, so the year is re-read on the client
// to stay correct without a redeploy.
export const CurrentYear = () => {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
};
