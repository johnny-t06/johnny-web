import { WorkItem } from "@/data/works";

export interface RoleCardProps {
  workItem: WorkItem;
}

export const WorkCard = (props: RoleCardProps) => {
  const { workItem } = props;
  const { title, description, date } = workItem;
  return (
    <div className="p-4 rounded-lg flex flex-row justify-between">
      <div>
        <h1 className="font-satoshi font-bold">{title}</h1>
      </div>
      <p className="text-gray-500">{date}</p>
    </div>
  );
};
