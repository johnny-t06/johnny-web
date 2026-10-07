import Image from "next/image";
import johnnyhead from "../../public/images/johnny-head.jpg";
import { socials } from "@/data/contacts";
import { ArrowUpRight } from "./ArrowUpRight";
import { CurrentYear } from "./CurrentYear";

export const Footer = () => {
  return (
    <footer className="bg-white text-espresso px-4 sm:px-6 lg:max-w-page lg:mx-auto lg:px-gutter lg:pt-footer-top flex flex-col">
      <div className="bg-espresso text-cream rounded-3xl lg:rounded-ticket flex flex-col lg:flex-row shadow-[0_18px_40px_rgba(59,47,41,0.18)] lg:shadow-[0_24px_60px_rgba(59,47,41,0.18)]">
        <div className="px-6 pt-7 pb-5 flex flex-col gap-5 lg:w-[39.4%] lg:shrink-0 lg:p-ticket-pad lg:justify-between lg:gap-ticket-pad">
          <div className="flex items-center gap-3 lg:gap-4">
            <Image
              src={johnnyhead}
              alt=""
              sizes="(min-width: 1024px) 107px, 52px"
              className="w-[52px] h-[52px] rounded-xl object-cover lg:size-avatar lg:rounded-avatar"
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-satoshi-bold text-base lg:text-avatar-name">
                Johnny Tan
              </span>
              <span className="text-[13px] lg:text-avatar-place text-[#cbbaac]">
                San Francisco
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-text-gap">
            <div className="font-satoshi-bold text-[52px] leading-none tracking-[-0.02em] lg:text-say-hi lg:tracking-[-0.035em] lg:whitespace-nowrap">
              Say hi
            </div>
            <p className="text-[15px] leading-[1.45] text-cream-muted lg:text-ticket-body">
              or don't. :)
            </p>
          </div>
        </div>

        {/* The perforation runs across the card on mobile and down it on
            desktop, with a notch cut out at each end. */}
        <div
          aria-hidden="true"
          className="relative h-6 lg:h-auto lg:w-6 shrink-0"
        >
          <div className="absolute -left-3 top-0 lg:left-0 lg:-top-3 w-6 h-6 rounded-full bg-white" />
          <div className="absolute left-[22px] right-[22px] top-[11px] border-t-2 lg:left-[11px] lg:right-auto lg:top-7 lg:bottom-7 lg:border-t-0 lg:border-l-2 border-dashed border-cream/25" />
          <div className="absolute -right-3 top-0 lg:right-auto lg:left-0 lg:top-auto lg:-bottom-3 w-6 h-6 rounded-full bg-white" />
        </div>

        <div className="px-4 pt-3 pb-4 grid grid-cols-3 gap-2 lg:flex lg:flex-col lg:flex-1 lg:min-w-0 lg:justify-end lg:p-ticket-inset lg:gap-2.5">
          <div className="hidden lg:block font-satoshi-bold text-ticket-label tracking-[0.08em] uppercase text-[#cbbaac] pb-1.5 pl-contact-row-x">
            Contact
          </div>
          {socials.map((s) => (
            <a
              key={s.title}
              href={s.link}
              className="h-20 rounded-[14px] bg-cream/[0.09] hover:bg-cream/[0.16] transition-colors p-3 flex flex-col justify-between font-satoshi-bold text-[15px] lg:h-contact-row-h lg:rounded-contact-row lg:py-0 lg:px-contact-row-x lg:flex-row lg:items-center lg:justify-start lg:gap-4 lg:text-contact-title"
            >
              <span className="self-end lg:self-auto lg:order-last lg:[&>svg]:w-[26px] lg:[&>svg]:h-[26px]">
                <ArrowUpRight />
              </span>
              <span className="lg:flex-1">{s.title}</span>
              <span className="hidden lg:block font-satoshi text-contact-handle text-[#cbbaac] whitespace-nowrap">
                {s.handle}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-1 pt-3 lg:px-2 lg:pt-4 text-[13px] lg:text-footer-note text-[#6e6259]">
        <span>
          © <CurrentYear /> johnnytan.work
        </span>
        <a
          href="#top"
          className="h-11 lg:h-12 flex items-center gap-1.5 font-satoshi-bold hover:text-espresso"
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
            className="lg:w-[1em] lg:h-[1em]"
          >
            <path d="M12 19V5M6 11l6-6 6 6" />
          </svg>
        </a>
      </div>

      {/* Desktop cancels the footer's gutters so the wordmark is centered on
          the full width and clipped at its edges rather than the gutters. */}
      <div
        aria-hidden="true"
        className="mt-8 lg:mt-section-top lg:-mx-gutter h-[0.77em] lg:h-[0.74em] overflow-hidden flex justify-center font-satoshi-bold text-[70px] lg:text-wordmark"
      >
        <span className="leading-none tracking-[-0.03em] lg:tracking-[-0.04em] whitespace-nowrap text-[#d6e3f0]">
          johnny tan
        </span>
      </div>
    </footer>
  );
};
