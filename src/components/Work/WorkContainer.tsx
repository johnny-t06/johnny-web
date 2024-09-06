import { WorkItem } from "@/data/works";
import { WorkCard } from "./WorkCard";

interface WorkContainerProps {
  works: WorkItem[];
}
// F5FFFA
// E6E6FA
export const WorkContainer = (props: WorkContainerProps) => {
  const { works } = props;

  return (
    <div className="flex flex-col gap-3 w-3/4 py-4 px-8 bg-[#F5FFFA] rounded-xl">
      {works.map((work, index) => (
        <WorkCard key={index} workItem={work} />
      ))}
    </div>
  );
};
