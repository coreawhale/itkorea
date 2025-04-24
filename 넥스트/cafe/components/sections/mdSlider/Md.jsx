import Heading from "@/components/common/typography/Heading";
import Paragraph from "@/components/common/typography/Paragraph";
import Image from "next/image";

const Md = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="flex flex-col gap-1 px-6 md:px-0 w-full md:w-auto">
      <div className="w-full md:w-[220px] aspect-square">
        <Image
          src={imageSrc}
          alt={""}
          quality={100}
          fill
          className="object-fill rounded-lg"
        />
      </div>
      <div className="px-2">
        <Heading level={5}>{title}</Heading>
        <Paragraph>{subtitle}</Paragraph>
      </div>
    </div>
  );
};

export default Md;
