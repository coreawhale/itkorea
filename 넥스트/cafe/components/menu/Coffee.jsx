import Image from "next/image";
import Text from "../common/base/Text";

const Coffee = ({ title, price, image }) => {
  return (
    <div className="flex flex-col gpa-2 justify-center items-center">
      <div className="relative h-[300px] w-full">
        <Image src={image} alt={""} fill className="object-cover" />
      </div>
      <Text>{title}</Text>
      <Text>{price}</Text>
    </div>
  );
};

export default Coffee;
