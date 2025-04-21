import ContentsAside from "./ContentsAside";
import ContentsMain from "./ContentsMain";
import Title from "./Title";

const Contents = () => {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <Title title={"Contests"} />
      <div className="flex w-full h-1vh gap-10 justify-between">
        <ContentsMain />
        <ContentsAside />
      </div>
    </section>
  );
};

export default Contents;
