const ShopCard = (props) => {
  function returnItemOnClick() {
    const item = {
      id: props.id,
      img: props.img,
      name: props.name,
      price: props.price,
      quantity: 1,
    };
    props.onClick(item);
  }
  return (
    <div className="shop-card">
      <img className="img" src={props.img} alt={props.name} />
      <p>{props.name}</p>
      <p>${props.price}/kg</p>
      <button onClick={returnItemOnClick}>Add to Cart</button>
    </div>
  );
};

export default ShopCard;
