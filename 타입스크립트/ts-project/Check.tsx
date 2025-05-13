"use client";

import { useState } from "react";

type old14 = {
  old14: boolean;
};

type required = {
  required: boolean;
};

type local = {
  local: boolean;
};

type marketing = {
  marketing: boolean;
};

type next = {
  next: boolean;
};

type CheckList = {
  all: boolean;
  old14: boolean;
  required: boolean;
  local: boolean;
  marketing: boolean;
  next: boolean;
};

const Check = () => {
  const [, setAll] = useState<CheckList>({
    all: false,
    old14: false,
    required: false,
    local: false,
    marketing: false,
    next: false,
  });

  const [old14, setOld14] = useState<old14>({
    old14: false,
  });

  const [required, setRequired] = useState<required>({
    required: false,
  });

  const [local, setLocal] = useState<local>({
    local: false,
  });

  const [marketing, setMarketing] = useState<marketing>({
    marketing: false,
  });

  const [next, setNext] = useState<next>({
    next: false,
  });

  const allClick = () => {
    setAll((prev) => {
      const all = prev.all == false ? true : false;
      const old14 = prev.old14 == false ? true : false;
      const required = prev.required == false ? true : false;
      const local = prev.local == false ? true : false;
      const marketing = prev.marketing == false ? true : false;
      const next = prev.next == false ? true : false;

      return { all, old14, required, local, marketing, next };
    });
  };

  const thisClick = (x: string) => {
    setAll((prev) => {
      type thisKey = Pick<prev, x>;

      const check = prev.x == false ? true : false;
      return { check };
    });
  };

  return (
    <>
      <button onClick={allClick}>전체 동의</button>
      {/* <button
        style={{ color: all.old14 || old14.old14 ? "red" : "black" }}
        onClick={()=>{thisClick(old14)}}
      ></button> */}
      <button
        style={{ color: all.old14 || old14.old14 ? "red" : "black" }}
        onClick={() => {
          thisClick("old14");
        }}
      >
        만 14세 이상입니다.
      </button>
      <button
        style={{ color: all.required || required.required ? "red" : "black" }}
        onClick={() => {
          thisClick("required");
        }}
      >
        [필수] 이용약관, 개인정보 수집/이용
      </button>
      <button
        style={{ color: all.local || local.local ? "red" : "black" }}
        onClick={() => {
          thisClick("local");
        }}
      >
        [선택] 위치 기반 서비스 이용
      </button>
      <button
        style={{
          color: all.marketing || marketing.marketing ? "red" : "black",
        }}
        onClick={() => {
          thisClick("marketing");
        }}
      >
        [선택] 홍보성 정보 수신
      </button>

      <button style={{ color: all.next || next.next ? "pink" : "black" }}>
        다음
      </button>
    </>
  );
};

export default Check;
