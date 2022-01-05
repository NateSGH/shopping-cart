import CartCard from './CartCard';

function Cart(props) {
  const itemsArr = props.items;

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {itemsArr.map((item) => (
          <CartCard
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
