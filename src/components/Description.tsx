"use client";
import { useScroll, motion } from "framer-motion";
import React from "react";
import { useRef } from "react";

interface DescriptionProps {
  value: string;
}
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
    <div className="">
      <h1 className="font-satoshi text-4xl "> Johnny Tan</h1>
      <motion.p
        className="text-lg"
        ref={element}
        style={{ opacity: scrollYProgress }}
      >
        {value}
      </motion.p>
    </div>
  );
};
