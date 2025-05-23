import ContentCard from "@/components/sections/subComponents.jsx/ContentCard";
import { CONTENT_CARD_DATA } from "@/constants/ContentCard";

const ContentGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full h-full flex-3/4">
      {CONTENT_CARD_DATA.map((v, i) => (
        <ContentCard key={i} {...v} isHigh={i % 2} />
      ))}
    </div>
  );
};

export default ContentGrid;
