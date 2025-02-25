// 1. x를 넣으면 x라서 럭키비키잖아~
function lucky(x) {
  return `${x} 라서 럭키비키잖아`;
}

// 2. x를 넣으면 뒤에 😁 + x + 😁 돌려주기
function makeSmail(x) {
  return `😁 ${x} 😁`;
}

// 3. x를 넣으면 해당 숫자의 두배를 돌려주기
function makeDouble(x) {
  return `${x * 2}`;
}

// 더하기
function add(x, y) {
  return x + y;
}
const a = add(1, 3); //4

// 마이너스
function minus(x, y) {
  return x - y;
}
const b = minus(10, 3); //7

// 함수안에 조건문 넣기
function isAdult(x) {
  if (x > 19) {
    return "성인";
  } else {
    return "미성년자";
  }
}

//4. x 홀수면 두배 돌려주고, 짝수면 세배 돌려주기
function checkEven(x) {
  // const result = x % 2;
  // if( result == 0) {
  //     return `${x * 3}`
  // } else {
  //     return `${x * 2}`
  // }

  return x % 2 ? x * 2 : x * 3;
}

// 5. x가 3의 배수 또는 5의 배수이면 제곱을 돌려주고, 아니면 10 더해서 돌려주기
function checkThreeAndFive(x) {
  // const result1 = x % 3;
  // const result2 = x % 5;

  // if (result1 == 0 || result2 == 0) {
  //     return `${x ** 3}`
  // } else {
  //     return `${x + 10}`
  // }

  return x % 3 == 0 || x % 5 == 0 ? x ** 3 : x + 10;
}

// 6. x,y가 들어오면 x의 y를 제곱해서 돌려주기
function six(x, y) {
  return x ** y;
}

// 7. 배열이 들어오면 첫번째 인덱스에 사탕으로 바꿔주기
function seven(x) {
  return (candy[0] = "사탕");
}
