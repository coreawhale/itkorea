import Button from "../filter/components/FilterButton";
import Rating from "./Rating";
import Thumbnail from "./Thumbnail";

const Product = (props) => {
  return (
    <div className="product">
      <Thumbnail thumbnail={props.thumbnail} title={props.title} />
      {/* <Button btnText={"장바구니"} /> */}
      <span>{props.id}</span>
      <h3 className="title">{props.title}</h3>
      <span className="price">{props.price}</span>
      <Rating rating={props.rating} />
    </div>
  );
};

export default Product;
