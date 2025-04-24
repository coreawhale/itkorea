// import Story from "@/components/stroy/Story";

"use client";

import { motion } from "motion/react";

import Image from "next/image";

const Page = () => {
  return (
    <div className="h-screen  flex items-center justify-center bg-[url('/story_bg.jpg')] bg-cover">
      {/* <Image src={"/story_bg.jpg"} fill alt="" className="object-cover" /> */}
      <motion.section
        variants={{ stagger: 0.3 }}
        className="flex flex-col text-5xl text-center2 text-white  leading-snug"
      >
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, transition: { duration: 1 }, y: 0 }}
        >
          브라질 이파네마 농장의 언덕에는
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, transition: { duration: 1 }, y: 0 }}
        >
          지난 10년간 같은 자리에 줄곧
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, transition: { duration: 1 }, y: 0 }}
        >
          카페베네 팻말이 꽂혀있었습니다
        </motion.span>
      </motion.section>
    </div>
  );
};

export default Page;
