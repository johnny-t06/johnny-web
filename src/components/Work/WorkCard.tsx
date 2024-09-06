import { WorkItem } from "@/data/works";

export interface RoleCardProps {
  workItem: WorkItem;
}

export const WorkCard = (props: RoleCardProps) => {
  const { workItem } = props;
  const { title, description, date } = workItem;
  return (
    <div className="p-4 rounded-lg flex flex-row justify-between w-full">
      <div>
        <h1 className="font-satoshi font-bold text-lg">{title}</h1>
        <h1 className="font-switzer italic text-gray-500 text-md">
          {description}
        </h1>
      </div>

      <p className="text-md whitespace-nowrap text-gray-500">{date}</p>
    </div>
  );
};
