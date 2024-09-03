import { Description } from "@/components/Description";
import { WorkContainer } from "@/components/Work/WorkContainer";
import { prevWorks } from "@/data/works";

export default function Home() {
  const value = "Hello, world!";
  return (
    <div>
      <div className="flex h-[150vh]">
        <div className="flex w-2/5 bg-beige2 justify-center align-center">
          <WorkContainer works={prevWorks} />
        </div>

        <div className="flex w-3/5 bg-green flex-col ">
          <Description value={value} />{" "}
        </div>
      </div>
      <div className="h-screen bg-nobel"> </div>
    </div>
  );
}
