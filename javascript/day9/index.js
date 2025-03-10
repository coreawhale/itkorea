// 입력 받은 문자열 배열로 쪼개서 대문자는 소문자로, 소문자는 대문자로 바꾸기
const solution = (my_string) => {
  [...my_string]
    .map((x) => (x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join("");
};

// 입력 받은 숫자 배열의 수가 11보다 크면 그 배열의 수를 모두 더해주고, 작으면 그 배열의 수를 곱해준다
const solution1 = (num_list) =>
  num_list.length > 11
    ? num_list.reduce((a, c) => {
        a + c;
      })
    : num_list.reduce((a, c) => {
        a * c;
      });
