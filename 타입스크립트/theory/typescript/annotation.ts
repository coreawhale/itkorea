const a: string = String(100);
const b: number = 1090;
const c: boolean = !!1;

const d: number[] = [1, 2, 3, 4, 5];
const e: boolean[] = [true, false];

const f: { name: string; price: number } = {
  name: "마마",
  price: 2000,
};

// 이름, 나이 오브젝트 배열
const user: { name: string; age: number }[] = [
  {
    name: "홍길동",
    age: 20,
  },
  {
    name: "세종대왕",
    age: 99,
  },
];

const cookie: { name: string; price: number; ingrident: string[] }[] = [
  { name: "쿠키", price: 2500, ingrident: ["밀가루", "설탕"] },
  { name: "달고나", price: 3500, ingrident: ["소다", "설탕"] },
];

const add = (a: number, b: number) => a + b;
