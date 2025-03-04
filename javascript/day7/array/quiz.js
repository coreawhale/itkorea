// //1. 유저에게 영어 문장을 입력 받고 단어들의 길이의 총합 구하기!
// //ex) I like to writing letters
// const userText = prompt("아무 문장을 입력하세요");
// userText
//   .split(" ")
//   .map((x) => {
//     return x.length;
//   })
//   .reduce((a, c) => {
//     return a + c;
//   });

// //2. 유저에게 아무 글자를 입력 받고 모음이 들어갔는지 아닌지 확인하기
// //ex) qwrtpsdfjk -> 모음없음!
// //ex) qkjaqzmskdl -> 모음있음!
// const userText1 = prompt("아무 글자를 입력하세요");
// userText1.split("").some((x) => {
//   return x == "a" || x == "e" || x == "i" || x == "u" || x == "o";
// });
// // userText1.split("").some((x) => {
// //   return x == "a" || x == "e" || x == "i" || x == "u" || x == "o";
// // });

const news = `President Donald Trump is ordering a pause on shipments of US military aid to Ukraine after his heated Oval Office argument with Ukrainian President Volodymyr Zelensky last week, a White House official told CNN Monday.

The halt in aid, which came after Trump held a series of meetings with top national security officials at the White House, could have dire effect on Ukraine’s war-fighting abilities, officials and analysts said. It will remain in place until Trump determines Zelensky has made a commitment to seeking peace talks, one official said, essentially forcing Ukraine to a negotiating table by threatening further losses on the battlefield.

“The president has been clear that he is focused on peace. We need our partners to be committed to that goal as well. We are pausing and reviewing our aid to ensure that it is contributing to a solution,” the White House official said.

After more than a week of open hostility between Washington and Kyiv, Monday’s pause was the most material sign of how far the relationship has deteriorated since Trump took office.

In recent weeks, Trump has echoed Russian President Vladimir Putin’s talking points, falsely claiming Ukraine started the war and accusing Zelensky of being a dictator, but his decision to halt the delivery of military aid is a move that could have real consequences for the balance of the conflict and strengthen Putin’s hand.

The pause will apply to all military equipment not yet inside Ukraine, officials said, and amounts to a direct response to what Trump views as Zelensky’s bad behavior last week.

Ukraine could likely sustain its current fighting pace for several weeks — perhaps until the start of the summer — before a US pause would begin to have a major effect, Western officials said in the wake of the decision. The Biden administration rushed shipments of weapons to Ukraine in its waning days, providing the country with large stockpiles of advanced weapons.

It is those sophisticated weapons — including the long-range ATACMS missiles — that have allowed Ukraine to strike deep into Russian territory, a strategy that could suffer if those weapons remain paused.

While European nations may be able to replace US shipments of artillery, supplemented by Ukraine’s own growing defense industry, the most advanced weapons used by Kyiv come from the United States.`;

// trump -> "🐭"
const ddd = news
  .split(" ")
  .map((x) => {
    return x == "Trump" ? "🐭" : x;
  })
  .reduce((a, c) => {
    return a + " " + c;
  });

// 축약버전
const ddd1 = news
  .split(" ")
  .map((x) => (x == "Trump" ? "🐭" : x))
  .reduce((a, c) => a + " " + c);

console.log(ddd);
