"use client";
import { motion } from "motion/react";
import Paragraph from "../common/typography/Paragraph";
import Image from "next/image";
import Container from "../common/layout/Container";
import { animation, containerVariant } from "@/styles/motion";

const Snapshot = () => {
  return (
    <Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariant}
        className="h-screen flex gap-20 py-10 px-8 md:px-0"
      >
        <motion.div
          variants={animation.fadeInslideUp}
          //   viewport={}
          // whileTap={{ scale: 1.5 }}
          // transition={{ duration: 1 }}
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col"
        >
          <div className="block text-2xl">
            흐르는 시간 동안 차곡차곡 쌓인 신뢰
            <br />
            동반 파트너로 이어온 끈끈한 우정
            <br />
            브라질 내 단일 커피 농장으로 최대 규모인
            <br />
            이파네마 농장의 특별한 원두 품질
          </div>
          <div className={`h-[300px] w-full relative`}>
            <Image alt="" className="object-cover" fill src={"/story1-1.jpg"} />
          </div>
          <Paragraph>
            이것이
            <br />
            이파네마와 우리의 10년입니다.
          </Paragraph>
        </motion.div>
        <div className="flex gap-4 w-full h-full">
          <motion.div
            variants={animation.fadeInslideUp}
            className={"h-full flex-1 relative"}
          >
            <Image alt="" className="object-cover" fill src={"/story2-1.jpg"} />
          </motion.div>
          <div className="flex-1 flex flex-col gap-4">
            <motion.div
              variants={animation.fadeInslideUp}
              className={"h-[300px] flex-1 relative"}
            >
              <Image
                alt=""
                className="object-cover"
                fill
                src={"/story3-1.jpg"}
              />
            </motion.div>
            <motion.div
              variants={animation.fadeInslideUp}
              className={"h-[300px] flex-1 relative"}
            >
              <Image
                alt=""
                className="object-cover"
                fill
                src={"/story3-2.jpg"}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Snapshot;
