const solution = (myString) =>
  [...myString]
    .map((x) => (x == "a" ? x.toUpperCase() : x.toLowerCase()))
    .join("");

console.log(solution("sdfsdfaslkjalaskjfhasdfo"));

// const todoList = [
//   { list: "problemsolving", finished: true },
//   { list: "practiceguitar", finished: false },
//   { list: "swim", finished: true },
//   { list: "studygraph", finished: false },
// ];

const todoListResult = (todo_list, finished) => {
  todo_list.filter((x, i) => !finished[i]); //filter는 boolean type으로 참인것만 나타냄
};

console.log(todoListResult(todoList));

const namesResult = (names) => {
  names.filter((x, i) => i % 5 == 0);
};

solution3 = (srart_num, end_num) =>
  Array(srart_num - end_num + 1)
    .fill(0)
    .map((x, i) => srart_num - i);
