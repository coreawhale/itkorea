import Contents from "@/components/sections/contents/Contents";
import Slider from "@/components/sections/Slider/Slider";
import Aside from "@/components/common/aside/Aside";
import MdSlider from "@/components/sections/mdSlider/MdSlider";

export default function Home() {
  return (
    <>
      <Slider />
      <Contents />
      <Aside />
      <MdSlider />
    </>
  );
}
