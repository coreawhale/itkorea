import Contents from "@/components/sections/contents/Contents";
import Test from "@/components/Test";
import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Test />
      <Contents />
      <aside className="fixed right-1 top-1/2 flex flex-col">
        <Link
          href={"/"}
          className={`w-30 h-20 bg-emerald-950 rounded-full text-white flex items-center justify-center`}
        >
          <FaInstagramSquare />
        </Link>
        <Link
          href={"/"}
          className={`w-30 h-20 bg-emerald-950 rounded-full text-white flex items-center justify-center`}
        >
          블로그
        </Link>
        <Link href={"/"}>가맹문의</Link>
      </aside>
    </>
  );
}
