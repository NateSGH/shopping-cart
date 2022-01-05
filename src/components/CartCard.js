const CartCard = (props) => {
  return (
    <div className="cart-card">
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.quantity}</p>
    </div>
  );
};

export default CartCard;
