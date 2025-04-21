import Image from "next/image";

const CardSide = (props) => {
  return (
    <div className="flex flex-col justify-center text-center gap-5 w-full">
      <div className={`${"h-[200px]"} w-full relative`}>
        <Image
          className="object-cover"
          fill
          src={props.imageUrl}
          alt="aaa"
        ></Image>
      </div>
      <h5 className="text-md text-black font-bold">{props.title}</h5>
      <p className="text-xs text-gray-700">{props.subTitle}</p>
      <button className="rounded-3xl text-white py-2 px-5 bg-[#00A5B1]">
        {props.buttonTitle}
      </button>
    </div>
  );
};

export default CardSide;
