import { cn } from "@/lib/utils";

// The dotted arc the birdie is served along, in the 34x22 box below. The
// birdie follows it with `offset-path`, driven by the `serve` animation in
// tailwind.config.ts.
const ARC = "M2 20Q14 -4 30 14";

interface PeekHintProps {
  action: "Hold" | "Hover";
  className?: string;
}

export const PeekHint = ({ action, className }: PeekHintProps) => {
  return (
    <span
      className={cn("items-center gap-1.5 text-[13px] text-muted", className)}
    >
      <span aria-hidden="true" className="relative w-[34px] h-[22px]">
        <svg
          width="34"
          height="22"
          viewBox="0 0 34 22"
          className="absolute inset-0"
        >
          <path
            d={ARC}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeWidth="1.25"
            strokeDasharray="1.5 3"
            strokeLinecap="round"
          />
        </svg>
        <span
          className="absolute left-0 top-0 -m-1.5 text-espresso animate-serve motion-reduce:animate-none motion-reduce:[offset-distance:100%]"
          style={{ offsetPath: `path("${ARC}")`, offsetRotate: "auto" }}
        >
          <Birdie />
        </span>
      </span>
      {action} a project to preview
    </span>
  );
};

// A shuttlecock drawn cork down in a 24 box, turned so the cork faces +x:
// with `offset-rotate: auto` that makes it fly cork first along the arc.
const Birdie = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="block"
    >
      <g transform="rotate(-90 12 12)">
        <path d="M9.2 16.5 5 3.6M14.8 16.5 19 3.6M5 3.6q7-1.6 14 0M12 16.5V2.9M6.9 9.6q5.1-.9 10.2 0" />
        <path d="M9 16.5h6v1.6a3 3 0 0 1-6 0z" fill="currentColor" />
      </g>
    </svg>
  );
};
