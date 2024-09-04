"use client";
import { useScroll, motion } from "framer-motion";
import React from "react";
import { useRef } from "react";

interface DescriptionProps {
  value: string;
}

const contacts = [
  { title: "About", link: "" },
  { title: "Email", link: "emailto:johnnytanwork1@gmail.com" },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/johnny-tan1/" },
];

export const Description = (props: DescriptionProps) => {
  const { value } = props;
  const element = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 50vh", "start start"],
  });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(latest);
  // });

  return (
    <div className="sticky top-1/2 transform-translate-y-1/2">
      <h1 className="font-satoshi text-4xl font-bold "> Johnny Tan</h1>
      <motion.p
        className="text-lg"
        ref={element}
        style={{ opacity: scrollYProgress }}
      >
        {value}
      </motion.p>
      <div className="flex gap-4">
        {contacts.map((contact, index) => (
          <a
            href={contact.link}
            key={index}
            className="text-gray-200 hover:text-gray-700"
          >
            {contact.title}
          </a>
        ))}
      </div>
    </div>
  );
};
