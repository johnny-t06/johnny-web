import { WorkItem } from "@/data/works";
import Image from "next/image";
import { LinkPreview } from "../LinkPreview";
export interface RoleCardProps {
  workItem: WorkItem;
}

export const WorkCard = (props: RoleCardProps) => {
  const { workItem } = props;
  const { title, description, date, src, url } = workItem;
  return (
    <div>
      <LinkPreview url={url}>
        <div className="md:flex-row dark:hover:bg-neutral-800 cursor-pointer p-4 rounded-xl flex flex-row justify-between w-full hover:bg-neutral-50">
          <div className="flex flex-row gap-4">
            <div className="min-w-12 min-h-12">
              {src ? (
                <Image
                  src={src}
                  alt={title}
                  className=" h-12 w-12 rounded-lg"
                />
              ) : null}
            </div>

            <div className="flex flex-col">
              <h1 className="font-satoshi font-bold text-lg">{title}</h1>
              <h1 className="font-satoshi text-gray-500 text-md">
                {description}
              </h1>
            </div>
          </div>

          <p className="text-md whitespace-nowrap text-gray-500 ">{date}</p>
        </div>
      </LinkPreview>
    </div>
  );
};
