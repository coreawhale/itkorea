// any: 아무거나 되나 지양해야됨
const a1: any = 100;

// unknown: 서버에서 데이터 가져올때
// const a2 = (url: string): unknown = {}

// 함수변환없음
const a3 = (name: string) => {};

// Empty object: 아무값이나 될 수 있음, 왠만하면 쓰면 안됨
const a4: {} = { name: "텍스트" };

// const a5: Function

// const a6: never
