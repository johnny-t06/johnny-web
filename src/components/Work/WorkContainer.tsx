import { WorkItem } from "@/data/works";
import { WorkCard } from "./WorkCard";

interface WorkContainerProps {
  works: WorkItem[];
}

export const WorkContainer = (props: WorkContainerProps) => {
  const { works } = props;

  return (
    <div className="flex flex-col gap-8 w-2/3 text-lg">
      {works.map((work, index) => (
        <WorkCard key={index} workItem={work} />
      ))}
    </div>
  );
};
