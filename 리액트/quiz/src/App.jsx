import { FiArrowLeftCircle } from "react-icons/fi";
import Kia from "./Kia";
import Reservation from "./Reservation";
import Option from "./tway/Option";

function App() {
  const classList = [
    {
      title: "이벤트운임",
      class: "이코노미",
      cabinweight: "10kg",
      checkedweight: "없음",
      price: "매진",
      residue: "0",
      meal: "",
      free: "",
      currency: "krw",
      bg: "green",
    },
    {
      title: "스마트운임",
      class: "이코노미",
      cabinweight: "10kg",
      checkedweight: "15kg",
      price: "237,000",
      residue: "9",
      meal: "",
      free: "",
      currency: "krw",
      bg: "green",
    },
    {
      title: "일반운임",
      class: "이코노미",
      cabinweight: "10kg",
      checkedweight: "20kg",
      price: "252,000",
      residue: "9",
      meal: "",
      free: "",
      currency: "krw",
      bg: "green",
    },
    {
      title: "비즈니스운임",
      class: "프리미엄 플랫",
      cabinweight: "10kg x 2PCS",
      checkedweight: "30kg",
      price: "357,000",
      residue: "3",
      meal: "1회 제공",
      free: "무료제공",
      currency: "krw",
      bg: "pink",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "10px;" }}>
      {classList.map((v) => {
        return <Option {...v} />;
      })}
    </div>
  );
}

export default App;
