import { WorkItem } from "@/data/works";
import { WorkCard } from "./WorkCard";
import { StaticWorkCard } from "./StaticWorkCard";

interface WorkContainerProps {
  works: WorkItem[];
}
// F5FFFA
// E6E6FA
export const WorkContainer = (props: WorkContainerProps) => {
  const { works } = props;
  return (
    <div className="flex flex-col gap-3 w-3/4 rounded-xl">
      {works.map((work, index) => {
        return work.static ? (
          <StaticWorkCard key={index} workItem={work} />
        ) : (
          <WorkCard key={index} workItem={work} />
        );
      })}
    </div>
  );
};
