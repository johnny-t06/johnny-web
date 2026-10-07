import Image from "next/image";
import johnnyhead from "../../public/images/johnny-head.jpg";
interface DescriptionProps {
  value: string;
}

export const Description = (props: DescriptionProps) => {
  const { value } = props;

  return (
    <div className="flex flex-col-reverse items-start lg:flex-row lg:items-center gap-5 lg:gap-hero-gap px-4 pt-8 pb-9 sm:px-6 lg:p-0">
      <div className="flex flex-col justify-center gap-2.5 lg:flex-1 lg:min-w-0 lg:gap-text-gap">
        <h1 className="font-satoshi-bold text-[34px] leading-[1.1] lg:text-hero-title lg:leading-none lg:tracking-[-0.03em]">
          Johnny Tan
        </h1>
        <p className="font-satoshi text-[17px] leading-relaxed text-muted lg:text-hero-body lg:leading-[1.4]">
          {value}
        </p>
      </div>
      <Image
        src={johnnyhead}
        alt="Johnny's head"
        width={460}
        height={460}
        sizes="(min-width: 1024px) 18vw, 120px"
        priority
        className="rounded-[14px] w-24 h-24 sm:w-[120px] sm:h-[120px] lg:size-portrait lg:rounded-portrait object-cover"
      />
    </div>
  );
};
