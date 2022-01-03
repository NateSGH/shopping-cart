const ShopCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.cost}</p>
      <button onClick={props.onClick}>Add to Cart</button>
    </div>
  );
};

export default ShopCard;
