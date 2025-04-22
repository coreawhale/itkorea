import { CONTENT_CARD_DATA } from "@/constants/ContentCard";
import ContentCard from "../sections/subComponents.jsx/ContentCard";

const ContentsMain = () => {
  return (
    <div className="grid grid-cols-3 gap-10 w-full h-full border border-slate-200 flex-3/4">
      {CONTENT_CARD_DATA.map((v, i) => (
        <ContentCard key={i} {...v} isHigh={i % 2} />
      ))}
    </div>
  );
};

export default ContentsMain;
