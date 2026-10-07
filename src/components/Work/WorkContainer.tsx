import { WorkItem } from "@/data/works";
import { WorkCard } from "./WorkCard";

interface WorkContainerProps {
  works: WorkItem[];
}

export const WorkContainer = (props: WorkContainerProps) => {
  const { works } = props;
  return (
    <div className="flex flex-col w-full">
      {works.map((work, index) => {
        return <WorkCard key={index} workItem={work} />;
      })}
    </div>
  );
};
