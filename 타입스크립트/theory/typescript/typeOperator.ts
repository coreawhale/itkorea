// union type (|) [합집합]
const a2: number | string = 100;

// { icecreamName, price, kcal}

const icecream: {
  icecreamName: string;
  price?: number;
  kcal?: number;
} = {
  icecreamName: "핑크퐁",
  //   price: "",
  kcal: 1000,
};

// intersection type (&) [교집합] - 오브젝트 타입만 가능한듯
const c3: { name: string } & { age: number } = {
  name: "스트링",
  age: 100,
};

// poeson 정의 이름, 나이,
type Person = { name: string; age?: number };

// Colleger 대학생 전공, 학년
type Colleger = { major: string; grade: number };

// Worker 노동자 직급, 시급
type Worker_ = { rank: string; wage: number };

// 타입 모으기
type ChungChuen = Person & Colleger & Worker_;

const hongkilldong: ChungChuen = {
  name: "홍킬동",
  // age: 99,
  major: "컴공",
  grade: 3,
  rank: "알바",
  wage: 10900,
};

type Dessert = "cookie" | "icecream" | "coffee";
type A = Exclude<Dessert, "cookie">; //오른쪽에 있는 값을 제외해줘
type B = Extract<Dessert, "icecream">; //오른쪽에 있는 값을 result해줘
const test50: A = "icecream";
const test51: B = "icecream";

type Coffee = { name: string; price: number; kcal: number };

// 함수타입 알리아스
type Hello = (name: string) => string;

const sayHello: Hello = (name) => `${name} 안녕!`;
