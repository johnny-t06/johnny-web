import { About } from "@/components/About";
import { Description } from "@/components/Description";
import { WorkContainer } from "@/components/Work/WorkContainer";
import { currentWorks, prevWorks } from "@/data/works";

export default function Home() {
  const allWorks = [...currentWorks, ...prevWorks];
  const value = "software engineer, badmintion enthusiast, and a foodie";

  return (
    <div>
      <div className="flex h-[200vh]">
        <div className="flex w-2/5 bg-white justify-center py-[15vh] flex-row pl-4">
          <div className="flex flex-col w-3/4 h-[100vh]">
            <div className="flex flex-row ">
              <WorkContainer works={allWorks} />
            </div>
          </div>
        </div>
        <div className="flex w-3/5 bg-white flex-col ">
          <Description value={value} />
        </div>
      </div>

      <div
        id="about"
        className=" absolute top-[100vh] h-[100vh] w-2/5 bg-blue flex flex-col "
      >
        <div className="w-2/3 flex pt-[20vh] pl-10">
          <About />
        </div>
      </div>
    </div>
  );
}
