import Image from "next/image";

const Page = () => {
  return (
    <section>
      <div>
        <div>
          <p>
            흐르는 시간 동안 차곡차곡 쌓인 신뢰
            <Br />
            동반 파트너로 이어온 끈끈한 우정
            <Br />
            브라질 내 단일 커피 농장으로 최대 규모인
            <Br />
            이파네마 농장의 특별한 원두 품질
          </p>
        </div>
        <div>
          {/* <Image src="/story1-1.jpg" width={100} height={100} alt="" /> */}
        </div>
        <p>
          <span>이것이</span>이파네마와 우리의 10년입니다.
        </p>
      </div>
      <div>{/* <img src="" */}</div>
      <div>
        <div>이미지3-1</div>
        <div>이미지3-1</div>
      </div>
    </section>
  );
};

export default Page;
