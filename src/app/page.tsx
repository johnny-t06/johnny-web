import { About } from "@/components/About";
import { Description } from "@/components/Description";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { CurrentYear } from "@/components/CurrentYear";
import { Header } from "@/components/Header";
import { socials } from "@/data/contacts";
import { PeekHint } from "@/components/Work/PeekHint";
import { WorkContainer } from "@/components/Work/WorkContainer";
import { currentWorks, prevWorks } from "@/data/works";

const allWorks = [...currentWorks, ...prevWorks];
const value =
  "Associate software engineer @ Veeva Systems, badminton enthusiast";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      {/* Desktop: work and about stack in the left 2/5 while Description stays
          sticky across both rows on the right. They flow, so a long work list
          pushes About down instead of running into it. */}
      <div className="flex flex-col lg:grid lg:grid-cols-5">
        <div
          id="work"
          className="flex w-full lg:col-span-2 lg:row-start-1 lg:min-h-screen bg-white justify-center px-4 pt-2 pb-10 sm:px-6 lg:px-0 lg:pt-[15vh] lg:pb-16 lg:pl-4 flex-row scroll-mt-14 lg:scroll-mt-0"
        >
          <div className="flex flex-col w-full lg:w-3/4 gap-5">
            <div className="flex items-baseline justify-between lg:hidden">
              <h2 className="font-satoshi-bold text-[13px] tracking-[0.08em] uppercase text-muted">
                Work
              </h2>
              <PeekHint />
            </div>
            <WorkContainer works={allWorks} />
          </div>
        </div>
        <div className="flex w-full lg:col-span-3 lg:col-start-3 lg:row-span-2 lg:row-start-1 bg-white flex-col order-first lg:order-none">
          <Description value={value} />
        </div>

        <div
          id="about"
          className="flex flex-col border-t border-line lg:border-0 scroll-mt-14 lg:scroll-mt-0 lg:col-span-2 lg:row-start-2 lg:min-h-screen lg:flex-row lg:justify-center lg:pl-4"
        >
          {/* Mirrors the work column's width and the cards' p-4 so the text
              lines up with the card logos. */}
          <div className="flex flex-col gap-4 px-4 pt-12 pb-14 sm:px-6 lg:w-3/4 lg:px-0 lg:pt-[20vh] lg:pb-0">
            <h2 className="lg:hidden font-satoshi-bold text-[13px] tracking-[0.08em] uppercase text-muted">
              About
            </h2>
            <div className="lg:px-4">
              <About />
            </div>
          </div>
        </div>
      </div>

      <footer className="lg:hidden bg-black text-white px-4 pt-10 pb-12 sm:px-6 flex flex-col gap-6">
        <div className="font-satoshi-bold text-[28px] leading-tight">
          Say hi.
        </div>
        <div className="flex flex-col">
          {socials.map((s) => (
            <a
              key={s.title}
              href={s.link}
              className="h-[52px] flex items-center justify-between border-b border-white/20 text-[17px]"
            >
              {s.title}
              <ArrowUpRight />
            </a>
          ))}
        </div>
        <div className="text-[13px] text-nobel">
          © <CurrentYear /> johnnytan.work
        </div>
      </footer>
    </div>
  );
}
