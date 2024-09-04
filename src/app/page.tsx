import { Description } from "@/components/Description";
import { WorkContainer } from "@/components/Work/WorkContainer";
import { currentWorks, prevWorks } from "@/data/works";

export default function Home() {
  const value = "software engineer, badmintion enthusiast, and a foodie";

  return (
    <div>
      <div className="flex h-[150vh]">
        <div className="flex w-2/5 bg-beige2 justify-center py-[15vh] flex-row pl-4">
          <div className="flex flex-col w-2/3 ">
            <div className="flex flex-row justify-between">
              <h1 className="font-satoshi text-lg pt-4"> Current</h1>
              <WorkContainer works={currentWorks} />
            </div>
            <div className="flex flex-row justify-between ">
              <h1 className="font-satoshi text-lg pt-4"> Prev</h1>
              <WorkContainer works={prevWorks} />
            </div>
          </div>
        </div>
        <div className="flex w-3/5 bg-beige2 flex-col ">
          <Description value={value} />
        </div>
      </div>

      <div className="h-screen bg-nobel"> </div>
    </div>
  );
}
