import Button from "./components/FilterButton";
import Text from "../shared/base/Text";

const Filter = (props) => {
  const filterReset = () => {
    props.setProducts((prev) => {
      const newPrev = [...props.original];
      return newPrev;
    });
  };

  const filter = (filterName, num) => {
    props.setProducts((prev) => {
      const newPrev = [...props.original].filter((v) => v[filterName] > num);
      return newPrev;
    });
  };

  return (
    <div className="filter">
      {/* 필터 헤더 */}
      <div>
        <Text text={"FILTER"}></Text>
        <FilterButton
          event={filterReset}
          filterName={null}
          num={null}
          text={"reset"}
        />
      </div>

      {/* STOCK */}
      <div>
        <Text text={"STOCK"}></Text>
        <FilterButton
          event={filter}
          text={"See 10+in stock"}
          filterName={"stock"}
          number={10}
        />
        <FilterButton
          event={filter}
          text={"See 20+in stock"}
          filterName={"stock"}
          number={20}
        />
      </div>

      {/* PRICE */}
      <div>
        <Text text={"PRICE"}></Text>
        <button
          onClick={() => {
            filter("price", 5);
          }}
        >
          See $5+
        </button>
        <button
          onClick={() => {
            filter("price", 5);
          }}
        >
          See $10+
        </button>
      </div>

      {/* RATING */}
      <div>
        <Text text={"RATING"}></Text>
        <button
          onClick={() => {
            filter("rating", 3);
          }}
        >
          See 3+
        </button>
        <button
          onClick={() => {
            filter("rating", 4);
          }}
        >
          See 4+
        </button>
      </div>
    </div>
  );
};

export default Filter;
