import Image from "next/image";
import johnnyhead from "../../public/images/johnny-head.jpg";
import { socials } from "@/data/contacts";
import { ArrowUpRight } from "./ArrowUpRight";
import { CurrentYear } from "./CurrentYear";

export const Footer = () => {
  return (
    <footer className="lg:hidden bg-white text-espresso px-4 sm:px-6 flex flex-col">
      <div className="bg-espresso text-cream rounded-3xl flex flex-col shadow-[0_18px_40px_rgba(59,47,41,0.18)]">
        <div className="px-6 pt-7 pb-5 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Image
              src={johnnyhead}
              alt=""
              className="w-[52px] h-[52px] rounded-xl object-cover"
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-satoshi-bold text-base">Johnny Tan</span>
              <span className="text-[13px] text-[#cbbaac]">San Francisco</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-satoshi-bold text-[52px] leading-none tracking-[-0.02em]">
              Say hi!
            </div>
            <p className="text-[15px] leading-[1.45] text-cream-muted">
              Pick a channel. I read everything.
            </p>
          </div>
        </div>

        <div aria-hidden="true" className="relative h-6">
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white" />
          <div className="absolute left-[22px] right-[22px] top-[11px] border-t-2 border-dashed border-cream/25" />
          <div className="absolute -right-3 top-0 w-6 h-6 rounded-full bg-white" />
        </div>

        <div className="px-4 pt-3 pb-4 grid grid-cols-3 gap-2">
          {socials.map((s) => (
            <a
              key={s.title}
              href={s.link}
              className="h-20 rounded-[14px] bg-cream/[0.09] hover:bg-cream/[0.16] transition-colors p-3 flex flex-col justify-between font-satoshi-bold text-[15px]"
            >
              <span className="self-end">
                <ArrowUpRight />
              </span>
              {s.title}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-1 pt-3 text-[13px] text-[#6e6259]">
        <span>
          © <CurrentYear /> johnnytan.work
        </span>
        <a
          href="#top"
          className="h-11 flex items-center gap-1.5 font-satoshi-bold hover:text-espresso"
        >
          Back to top
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5M6 11l6-6 6 6" />
          </svg>
        </a>
      </div>

      <div
        aria-hidden="true"
        className="mt-8 h-[54px] overflow-hidden flex justify-center"
      >
        <span className="font-satoshi-bold text-[70px] leading-none tracking-[-0.03em] whitespace-nowrap text-[#d6e3f0]">
          johnny tan
        </span>
      </div>
    </footer>
  );
};
