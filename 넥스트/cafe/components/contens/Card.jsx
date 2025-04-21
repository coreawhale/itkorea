import Image from "next/image";

const Card = (props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className={`${
          props.isHigh ? "w-full h-[500px]" : "w-full h-[300px]"
        } relative`}
      >
        <Image
          className="object-cover"
          fill
          src={props.imageUrl}
          alt="aaa"
        ></Image>
      </div>
      <h5 className="text-xs text-slate-500 font-medium">{props.title}</h5>
      <p className="text-md text-gray-700">{props.subTitle}</p>
    </div>
  );
};

export default Card;
