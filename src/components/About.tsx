"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const value =
    "Hello! I'm Johnny and I'm from San Francisco. I'm currently building all things frontend at Veeva Systems. I enjoy all things coding - building, leading, and learning. In my free time, I balance badminton, running, and checking out the newest restaurants in town.";
  const words = value.split(" ");
  const element = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    // Finish when the paragraph's bottom reaches 75% down the viewport. Only
    // the mobile footer sits below it, so a "start"-based end point can be
    // further than the page can scroll and leave the last words faded.
    offset: ["start end", "end 75%"],
  });

  return (
    <p
      ref={element}
      className="flex flex-wrap font-satoshi text-[22px] leading-[1.45] lg:text-lg lg:leading-7"
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            range={[start, end]}
            progress={scrollYProgress}
            key={index}
            word={word}
          />
        );
      })}
    </p>
  );
};

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = (props: WordProps) => {
  const { word, progress, range } = props;
  const opacity = useTransform(progress, range, [0.3, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-1 mt-1">
      {word}
    </motion.span>
  );
};
