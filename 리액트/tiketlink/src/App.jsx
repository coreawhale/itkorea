// import { useState } from "react";
// import reactLogo from "./assets/react.svg";

import Card from "./Card";

function App() {
  const game = [
    {
      day: "04.12",
      date: "토",
      time: "16:30",
      opentrue: "true",
      openday: "2025.04.07",
      opendate: "월",
      opentime: "17:00",
      openstate: "오픈",
      home: "seoul.svg",
      away: "team2.svg",
      homeName: "FC서울",
      awayName: "대전",
      stadium: "서울월드컵경기장",
    },
    {
      day: "04.20",
      date: "일",
      time: "14:00",
      opentrue: "false",
      openday: "2025.04.15",
      opendate: "화",
      opentime: "18:00",
      openstate: "오픈예정",
      home: "seoul.svg",
      away: "team3.svg",
      homeName: "FC서울",
      awayName: "광주FC",
      stadium: "서울월드컵경기장",
    },
    {
      day: "05.03",
      date: "토",
      time: "19:00",
      opentrue: "false",
      openday: "2025.04.28",
      opendate: "토",
      opentime: "19:00",
      openstate: "오픈예정",
      home: "seoul.svg",
      away: "team4.svg",
      homeName: "FC서울",
      awayName: "전북현대",
      stadium: "서울월드컵경기장",
    },
    {
      day: "05.24",
      date: "토",
      time: "16:30",
      opentrue: "false",
      openday: "2025.05.19",
      opendate: "목",
      opentime: "20:00",
      openstate: "오픈예정",
      home: "seoul.svg",
      away: "team5.svg",
      homeName: "FC서울",
      awayName: "수원FC",
      stadium: "서울월드컵경기장",
    },
  ];
  return (
    <div>
      {game.map((v) => {
        return <Card {...v} />;
      })}
    </div>
  );
}

export default App;
