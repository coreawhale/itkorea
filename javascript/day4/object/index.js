// 기본타입 : string, number, boolens, null, undefind
// 참조타입: array[], object

const coffee = {
  name: "아메리카노",
  price: 2500,
  shots: 2,
  hasCaffein: true,
  ingredients: ["물", "커피콩"],
};

coffee["price"]; // 2500
coffee.price; // 2500

console.log(`${coffee.shots}, ${coffee.ingredients[1]}`);
coffee.shots; // 물
coffee.ingredients[1]; // 커피콩

// 자동차를 오브젝트 타입으로 만들기!
const myCar = {
  company: "현대차",
  name: "셀토스",
  options: ["4륜", "2열 시트"],
  year: 2023,
  fuel: 11.7,
};

//myCar.company
//myCar["company"]
//myCar.coffe >> undefined

myCar.people = 4; // 키, 벨루 추가
delete myCar.options; // 삭제
myCar.fuel = 20; // 벨루값 변경
