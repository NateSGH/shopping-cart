import { useState } from 'react';
import CartCard from './CartCard';

function Cart(props) {
  let itemsArr = props.items;

  const [cartWrapperKey, setCartWrapperKey] = useState(0);

  function updateCartWrapperKey() {
    const currentKey = cartWrapperKey;
    setCartWrapperKey(currentKey + 1);
  }

  function clearCart() {
    updateCartWrapperKey();
    itemsArr.length = 0;
    props.clearCartQuantity();
  }

  function handleQuantityChange(id, quantity) {
    function checkId(item) {
      return item.id === id;
    }

    const index = itemsArr.findIndex(checkId);
    if (index !== -1) {
      itemsArr[index].quantity = quantity;
    }
  }

  function renderCartButtons() {
    return (
      <div>
        <button>Checkout</button>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    );
  }

  return (
    <div className="cart-div">
      <h1>Cart</h1>
      <div key={cartWrapperKey} className="cart-cards-wrapper">
        {itemsArr.map((item) => (
          <CartCard
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            handleQuantityChange={handleQuantityChange}
          />
        ))}
        {itemsArr.length ? renderCartButtons() : <p>Your cart is empty</p>}
      </div>
    </div>
  );
}

export default Cart;
