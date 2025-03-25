const Welcome = (props) => {
  return (
    <div onClick={props.handleclick} style={{ color: props.color }}>
      hello, {props.name} {props.imoji}!
    </div>
  );
};

export default Welcome;

// collips 껍데기만 만들고 json에서 순서대로 긁어서 for로 넣으면 고객센터용, 상세페이지용으로 쓸 수 있을듯 클래스도 프롭스로 바꿔서 스타일을 바꿀 수 있음 결국 찐 구조만 넣어둬도 된다는 소리
// 컴포넌트 기본만 만들면 될듯
