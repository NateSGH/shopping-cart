import CartCard from './CartCard';

function Cart(props) {
  const itemsArr = props.items;

  function handleQuantityChange(id, quantity) {
    function checkId(item) {
      return item.id === id;
    }

    const index = itemsArr.findIndex(checkId);

    if (index !== -1) {
      itemsArr[index].quantity = quantity;
    }
  }

  return (
    <div>
      <h1>Cart</h1>
      <div>
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
      </div>
    </div>
  );
}

export default Cart;
