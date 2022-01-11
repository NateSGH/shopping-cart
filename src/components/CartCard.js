import { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const CartCard = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);

  function handleCardQuantityChangeInInput(event) {
    setQuantity(event.target.value);
    props.handleQuantityChange(props.id, event.target.value);
  }

  function decreaseQuantity() {
    let currentQuantity = quantity;
    if (currentQuantity !== 1) {
      const newQuantity = currentQuantity - 1;
      setQuantity(newQuantity);
      props.handleQuantityChange(props.id, newQuantity);
    }
  }

  function increaseQuantity() {
    let currentQuantity = quantity;
    if (currentQuantity < 10) {
      const newQuantity = currentQuantity + 1;
      setQuantity(newQuantity);
      props.handleQuantityChange(props.id, newQuantity);
    }
  }

  function removeItem() {
    props.removeItem(props.id);
  }

  return (
    <div className="cart-card">
      <img src={props.img} alt={props.name} />
      <p className="name">{props.name}</p>
      <p className="price-kg">${props.price}/kg</p>
      <p className="total-price">${props.price * quantity}</p>
      <div className="quantity-wrapper">
        <AiOutlineMinusCircle className="cart-card-icon" onClick={decreaseQuantity} />
        <input
          className="quantity"
          type="number"
          min="1"
          max="10"
          value={quantity}
          onChange={handleCardQuantityChangeInInput}
        />
        <AiOutlinePlusCircle className="cart-card-icon" onClick={increaseQuantity} />
      </div>
      <button className="btn-remove-item" onClick={removeItem}>
        Remove Item
      </button>
    </div>
  );
};

export default CartCard;
