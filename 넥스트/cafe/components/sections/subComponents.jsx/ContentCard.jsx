"use client";
import Heading from "@/components/common/typography/Heading";
import Paragraph from "@/components/common/typography/Paragraph";
import Image from "next/image";
import { useState } from "react";

const ContentCard = ({ isHigh, imageUrl, title, subTitle }) => {
  const [index, setIndex] = useState(1);
  const [onMouse, setOnMouse] = useState([]);

  return (
    <div
      onMouseEnter={() => {
        setOnMouse((prev) => true);
        setIndex((prev) => Math.floor(Math.random() * 5) + 1);
      }}
      onMouseLeave={() => setOnMouse((prev) => false)}
    >
      <div
        className={`${
          onMouse ? "opacity-100" : "opacity-0"
        } w-[50] h-[50] left-[85%] transition-all duration-150 flex relative flex-end justify-end top-[30px] z-10`}
      >
        <Image src={`/cat${index}.png`} alt="" width={40} height={40} />
      </div>
      <div className={`${isHigh ? "h-[300px]" : "h-[200px]"} w-full relative`}>
        <Image alt="" className="object-cover" fill src={imageUrl} />
      </div>
      <Heading level={5}>{title}</Heading>
      <Paragraph>{subTitle}</Paragraph>
    </div>
  );
};

export default ContentCard;
