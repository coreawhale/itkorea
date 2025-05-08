"use client";

import Container from "../common/layout/Container";
import { useState } from "react";

const Selecter = () => {
  const [selected, setSelected] = useState("커피");
  const selectedChange = (v) => setSelected((prev) => v);
  const menus = ["커피", "맥주", "와인"];
  const selectedCss = "border-b-2 border-slate-700";

  return (
    <div className="border-b-1 border-slate-100">
      <Container className="flex py-0">
        {menus.map((v) => (
          <div
            onClick={() => {
              selectedChange(v);
            }}
            className={`${
              selected == v && selectedCss
            } flex-1 py-5 h-full text-center`}
          >
            {v}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Selecter;
