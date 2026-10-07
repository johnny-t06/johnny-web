import { WorkItem } from "@/data/works";
import Image from "next/image";
import { LinkPreview } from "../LinkPreview";
export interface RoleCardProps {
  workItem: WorkItem;
}

export const WorkCard = (props: RoleCardProps) => {
  const { workItem } = props;
  const { title, description, date, src, url, previewsrc } = workItem;
  const previewProps = workItem.static
    ? ({ isStatic: true, imageSrc: previewsrc } as const)
    : {};
  return (
    <div>
      <LinkPreview url={url} {...previewProps}>
        <div className="cursor-pointer py-3.5 lg:-mx-4 lg:px-4 lg:py-work-row-y lg:rounded-xl flex flex-row justify-between gap-3 w-full border-b border-line lg:border-0 lg:hover:bg-neutral-50 lg:dark:hover:bg-neutral-800">
          <div className="flex flex-row gap-3.5 lg:gap-work-gap">
            <div className="min-w-11 min-h-11 lg:min-w-work-logo lg:min-h-work-logo">
              {src ? (
                <Image
                  src={src}
                  alt={title}
                  className="h-11 w-11 lg:size-work-logo rounded-[10px] lg:rounded-work-logo"
                />
              ) : null}
            </div>

            <div className="flex flex-col lg:gap-1">
              <h1 className="font-satoshi font-bold text-base lg:text-work-title">
                {title}
              </h1>
              <h1 className="font-satoshi text-gray-500 text-sm lg:text-work-desc lg:leading-[1.45]">
                {description}
              </h1>
            </div>
          </div>

          <p className="text-[13px] pt-0.5 lg:pt-1 lg:text-work-date whitespace-nowrap text-gray-500">
            {date}
          </p>
        </div>
      </LinkPreview>
    </div>
  );
};
