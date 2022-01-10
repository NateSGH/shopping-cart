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
      <img className="shop-card-img" src={props.img} alt={props.name} />
      <p className="shop-card-name">{props.name}</p>
      <p className="shop-card-price">${props.price}/kg</p>
      <button className="shop-card-btn" onClick={returnItemOnClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default ShopCard;
