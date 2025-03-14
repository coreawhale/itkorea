const americano = document.querySelector(".americano");
const latte = document.querySelector(".latte");
const iceTea = document.querySelector(".ice-tea");
const total = document.querySelector(".total");
const reset = document.querySelector(".reset");
const buy = document.querySelector(".buy");

const [text, money] = total.innerText.slice(" ");
// const sss = total.innerText.slice(":");

americano.addEventListener("click", () => {
  money + 2000;
  console.log([text, money]);
});

{
  /* <span class="americano">아메리카노(2,000원)</span>
    <span class="latte">라떼(3,000원)</span>
    <span class="ice-tea">아이스티(3,400원)</span>

    <span class="total">총 금액은: 0원</span>
    <button type="button" class="reset">초기화</button>
    <button type="button" class="buy">구매하기</button> */
}
