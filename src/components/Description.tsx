import Image from "next/image";
import johnnyhead from "../../public/images/johnny-head.jpg";
interface DescriptionProps {
  value: string;
}

export const Description = (props: DescriptionProps) => {
  const { value } = props;

  return (
    <div className="z-10 lg:sticky lg:top-1/3 flex flex-col-reverse items-start lg:items-stretch lg:flex-row gap-5 px-4 pt-8 pb-9 sm:px-6 lg:p-0">
      <div className="flex flex-col justify-center gap-2.5 lg:gap-3">
        <h1 className="font-satoshi-bold text-[34px] leading-[1.1] lg:text-4xl lg:leading-10">
          Johnny Tan
        </h1>
        <p className="text-[17px] leading-relaxed text-muted lg:text-lg lg:leading-7 lg:text-inherit">
          {value}
        </p>
      </div>
      <Image
        src={johnnyhead}
        alt="Johnny's head"
        width={190}
        height={190}
        priority
        className="rounded-[14px] w-24 h-24 sm:w-[120px] sm:h-[120px] lg:w-[190px] lg:h-[190px] lg:rounded-md object-cover"
      />
    </div>
  );
};
