"use client";
import {
  useScroll,
  motion,
  useAnimation,
  AnimationControls,
} from "framer-motion";
import React, { useEffect } from "react";
import { useRef } from "react";
import Image from "next/image";
import johnnyhead from "../public/images/johnny-head.jpg";
interface DescriptionProps {
  value: string;
}

const contacts = [
  { title: "About", link: "#about" },
  { title: "Email", link: "emailto:johnnytanwork1@gmail.com" },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/johnny-tan1/" },
];

export const Description = (props: DescriptionProps) => {
  const { value } = props;
  const element = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: element,
  //   offset: ["start 50vh", "start start"],
  // });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(latest);
  // });

  return (
    <div className="z-10 sticky top-1/3 transform-translate-y-1/2 flex flex-row gap-5 ">
      <div className="flex flex-col justify-center gap-3">
        <h1 className="font-satoshi-bold text-4xl font-bold "> Johnny Tan</h1>
        <p className="text-lg" ref={element}>
          {value}
        </p>
        <div className="flex gap-4">
          {contacts.map((contact, index) => (
            <a
              href={contact.link}
              key={index}
              className="text-gray-500 hover:text-gray-800"
            >
              {contact.title}
            </a>
          ))}
        </div>
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
