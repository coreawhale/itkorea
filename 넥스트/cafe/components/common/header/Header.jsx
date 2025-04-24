"use client";

import Link from "next/link";
import NavLink from "./subcomponents/NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import Toggle from "./subcomponents/Toggle";
import MobileNav from "./subcomponents/MobileNav";
import DesktopNav from "./subcomponents/DesktopNav";

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = () => setisMenuOpen((prev) => !prev);

  return (
    <header className="py-5 shadow-sm bg-white sticky top-0 z-10">
      <nav className="px-4 w-full max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-gray-500 hover:text-sky-200 transition-all duration-200 font-medium text-lg">
          <Link href={"/"}>IT Cafe</Link>
        </h1>

        <DesktopNav />

        {isMenuOpen && <MobileNav />}

        <Toggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default Header;
