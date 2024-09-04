"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const value =
    "Hello! I'm Johnny. I'm from San Francisco and currently studying cs at Tufts. I enjoy all things coding - building, leading, and learning. In my free time, I balance badminton, running, and checking out the newest restaurants in town.";
  const words = value.split(" ");
  const element = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 25vh"],
  });

  return (
    <p ref={element} className="flex flex-wrap font-satoshi text-lg ">
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
