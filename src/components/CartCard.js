import { useState } from 'react';

const CartCard = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);

  function handleCardQuantityChange(event) {
    setQuantity(event.target.value);
    props.handleQuantityChange(props.id, event.target.value);
  }

  function removeItem() {
    props.removeItem(props.id);
  }

  return (
    <div className="cart-card">
      <img src={props.img} alt={props.name} />
      <p className="name">{props.name}</p>
      <p className="price">{props.price}</p>
      <input
        className="quantity"
        type="number"
        min="1"
        max="10"
        value={quantity}
        onChange={handleCardQuantityChange}
      ></input>
      <button onClick={removeItem}>Remove Item</button>
    </div>
  );
};

export default CartCard;
