const Thumbnail = (props) => {
  return (
    <div className="thumbnail">
      <img src={props.thumbnail} alt={props.title} />
    </div>
  );
};

export default Thumbnail;
