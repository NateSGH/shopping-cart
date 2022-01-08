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
    props.updateCartItemsForApp(itemsArr);
  }

  function findCardIndexById(arr, id) {
    function checkCardId(item) {
      return item.id === id;
    }
    return arr.findIndex(checkCardId);
  }

  function handleQuantityChange(id, quantity) {
    const index = findCardIndexById(itemsArr, id);
    if (index !== -1) {
      itemsArr[index].quantity = quantity;
    }

    props.updateCartItemsForApp(itemsArr);
  }

  function removeItemCard(id) {
    const index = findCardIndexById(itemsArr, id);
    if (index !== -1) {
      itemsArr.splice(index, 1);
      props.updateCartItemsForApp(itemsArr);
    }
  }

  function addCheckoutAler() {
    alert('Thanks!');
  }

  function renderCartButtons() {
    return (
      <div>
        <button onClick={addCheckoutAler}>Checkout</button>
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
            removeItem={removeItemCard}
          />
        ))}
        {itemsArr.length ? renderCartButtons() : <p>Your cart is empty</p>}
      </div>
    </div>
  );
}

export default Cart;
