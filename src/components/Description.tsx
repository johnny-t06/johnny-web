"use client";
import React from "react";
import { useRef } from "react";
import Image from "next/image";
import johnnyhead from "../../public/images/johnny-head.jpg";
interface DescriptionProps {
  value: string;
}

export const Description = (props: DescriptionProps) => {
  const { value } = props;
  const element = useRef<HTMLDivElement>(null);

  return (
    <div className="z-10 sticky top-1/3 transform-translate-y-1/2 flex flex-row gap-5 ">
      <div className="flex flex-col justify-center gap-3">
        <h1 className="font-satoshi-bold text-4xl font-bold "> Johnny Tan</h1>{" "}
        <p className="text-lg" ref={element}>
          {value}
        </p>
      </div>
      <Image
        src={johnnyhead}
        alt="Johnny's head"
        width={190}
        height={190}
        className="rounded-md"
      />
    </div>
  );
};
