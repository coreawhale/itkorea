import CardSide from "./CardSide";

const ContentsAside = () => {
  return (
    <div className="w-full flex-1/4 bg-[#c8e2e0] h-auto p-4">
      <span className="font-bold font-small text-[#00A5B1] mb-10 block">
        조금 더 특별하고
        <br />
        따뜻한, 그런 카페베네
      </span>
      <CardSide
        imageUrl={"/umm.png"}
        title={"내가 오픈하고 싶은 카페"}
        subTitle={"동네와 공간, 저마다의 특별함과 다양함은 모두 다르니까요"}
        buttonTitle={"인테리어 더 보기"}
      />
    </div>
  );
};

export default ContentsAside;
