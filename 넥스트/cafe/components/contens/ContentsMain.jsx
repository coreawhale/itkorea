import Card from "./Card";

const ContentsMain = () => {
  return (
    <div className="grid grid-cols-3 gap-10 w-full h-full">
      {Array(6)
        .fill(0)
        .map((v, i) => (
          <Card
            key={i}
            isHigh={![0, 3, 5].some((v) => v == i)}
            imageUrl={"/umm.png"}
            title={"우리동네"}
            subTitle={"ㅁㅁㅁㅁㅁㅁㅁㅁㅁ"}
          />
        ))}
    </div>
  );
};

export default ContentsMain;
