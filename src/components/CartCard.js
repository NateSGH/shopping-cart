import { useState } from 'react';

const CartCard = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);

  function handleCardQuantityChange(event) {
    setQuantity(event.target.value);
    props.handleQuantityChange(props.id, event.target.value);
  }

  return (
    <div className="cart-card">
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <input
        type="number"
        min="1"
        max="100"
        value={quantity}
        onChange={handleCardQuantityChange}
      ></input>
    </div>
  );
};

export default CartCard;
