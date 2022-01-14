import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import './App.css';
import { useState } from 'react';

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [quantytiOfItemsInCart, setQuantytiOfItemsInCart] = useState(0);

  function addItemToCart(item) {
    let currentItemArr = itemsInCart.slice();

    function checkItemName(arrItem) {
      return arrItem.name === item.name;
    }

    // check if item is already in the array
    let index = currentItemArr.findIndex(checkItemName);

    // if item exists, increase quantity, else add item to array
    if (index !== -1) {
      currentItemArr[index].quantity += 1;
    } else {
      currentItemArr.push(item);
      setQuantytiOfItemsInCart(currentItemArr.length);
    }
    setItemsInCart(currentItemArr);
  }

  function clearCart() {
    setItemsInCart([]);
  }

  function updateItemsInCart(newArr) {
    setItemsInCart(newArr);
    setQuantytiOfItemsInCart(itemsInCart.length);
  }

  return (
    <HashRouter>
      <div className="App">
        <Nav cartQuantity={quantytiOfItemsInCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop onClickOnCardButton={addItemToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                items={itemsInCart}
                clearCartQuantity={clearCart}
                updateCartItemsForApp={updateItemsInCart}
              />
            }
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
