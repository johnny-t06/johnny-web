import { About } from "@/components/About";
import { Description } from "@/components/Description";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PeekHint } from "@/components/Work/PeekHint";
import { WorkContainer } from "@/components/Work/WorkContainer";
import { currentWorks, prevWorks } from "@/data/works";

const allWorks = [...currentWorks, ...prevWorks];
const tagline = [
  "Associate software engineer @ Veeva Systems,",
  "badminton enthusiast",
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="contents lg:flex lg:flex-col lg:min-h-screen">
        <Header />
        <div className="flex flex-col lg:flex-1 lg:grid lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-x-col-gap lg:w-full lg:max-w-page lg:mx-auto lg:px-gutter lg:pb-10">
          <div
            id="work"
            className="flex flex-col gap-5 px-4 pt-2 pb-10 sm:px-6 lg:p-0 scroll-mt-14 lg:scroll-mt-0"
          >
            <div className="flex items-center justify-between lg:hidden">
              <h2 className="font-satoshi-bold text-[13px] tracking-[0.08em] uppercase text-muted">
                Work
              </h2>
              <PeekHint
                action="Hold"
                className="hidden [@media(hover:none)]:flex"
              />
            </div>
            <PeekHint
              action="Hover"
              className="hidden lg:flex lg:self-end lg:text-hint"
            />
            <WorkContainer works={allWorks} />
          </div>
          <div className="order-first lg:order-none">
            <Description lines={tagline} />
          </div>
        </div>
      </div>

      <div
        id="about"
        className="border-t border-line lg:border-0 scroll-mt-14 lg:scroll-mt-0 lg:grid lg:grid-cols-[5fr_7fr] lg:gap-x-col-gap lg:max-w-page lg:mx-auto lg:px-gutter lg:pt-section-top"
      >
        <div className="flex flex-col gap-4 px-4 pt-12 pb-14 sm:px-6 lg:p-0">
          <h2 className="lg:hidden font-satoshi-bold text-[13px] tracking-[0.08em] uppercase text-muted">
            About
          </h2>
          <About />
        </div>
      </div>

      <Footer />
    </div>
  );
}
