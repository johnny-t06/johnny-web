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
    <div className="flex flex-col lg:gap-3 w-full lg:w-3/4 rounded-xl">
      {works.map((work, index) => {
        return <WorkCard key={index} workItem={work} />;
      })}
    </div>
  );
};
