import { useState } from 'react';
import CartCard from './CartCard';

function Cart(props) {
  let itemsArr = props.items;

  const [cartWrapperKey, setCartWrapperKey] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  let newTotalSum = 0;

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
      newTotalSum =
        newTotalSum -
        itemsArr[index].quantity * itemsArr[index].price +
        quantity * itemsArr[index].price;

      itemsArr[index].quantity = quantity;
      setTotalSum(newTotalSum);
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

  function updateTotalSum(newSum) {
    setTotalSum(newSum);
    console.log(`total sum update ${totalSum}`);
  }

  function renderTotalSum() {
    console.log(`Newtotal sum render ${newTotalSum}`);
    updateTotalSum(0);

    return (
      <div>
        <p>${newTotalSum}</p>
      </div>
    );
  }

  function renderCartButtonsAndTotalSum() {
    return (
      <div>
        {renderTotalSum()}
        {renderCartButtons()}
      </div>
    );
  }

  function calculateCartTotalSum(item) {
    let currentSum = newTotalSum;
    newTotalSum = currentSum + item.price * item.quantity;
  }

  function renderCartCards(item) {
    return (
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
    );
  }

  function renderCartCardsAndCalculateTotalSum(item) {
    calculateCartTotalSum(item);
    return renderCartCards(item);
  }

  return (
    <div className="cart-div">
      <h1>Cart</h1>
      <div key={cartWrapperKey} className="cart-cards-wrapper">
        {itemsArr.map(renderCartCardsAndCalculateTotalSum)}
        {itemsArr.length ? renderCartButtonsAndTotalSum() : <p>Your cart is empty</p>}
      </div>
    </div>
  );
}

export default Cart;
