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
        <h1 className="font-satoshi">{title}</h1>
        <p className="font-switzer italic"> {description}</p>
      </div>
      <p className="text-gray">{date}</p>
    </div>
  );
};
