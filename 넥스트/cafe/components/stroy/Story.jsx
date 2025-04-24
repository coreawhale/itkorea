"use client";

import { motion } from "motion/react";

import Image from "next/image";

const Story = () => {
  return (
    <div className="relative flex items-center justify-center h-lvh">
      <Image src={"/story_bg.jpg"} fill alt="" className="object-cover" />
      <p className="flex flex-col z-2 text-white text-3xl py-10 leading-snug">
        <motion.span
          initial={{ opcity: 0 }}
          animate={{ opcity: 1, transition: { duration: 1 } }}
        >
          브라질 이파네마 농장의 언덕에는
        </motion.span>
        <motion.span
          initial={{ opcity: 0 }}
          animate={{ opcity: 1, transition: { duration: 1 } }}
        >
          지난 10년간 같은 자리에 줄곧
        </motion.span>
        <motion.span
          initial={{ opcity: 0 }}
          animate={{ opcity: 1, transition: { duration: 1 } }}
        >
          카페베네 팻말이 꽂혀있었습니다
        </motion.span>
      </p>
    </div>
  );
};

export default Story;
