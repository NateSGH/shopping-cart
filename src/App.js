import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import './App.css';
import { useState } from 'react';

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

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
    }
    setItemsInCart(currentItemArr);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Nav cartQuantity={itemsInCart.length} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop onClickOnCardButton={addItemToCart} />} />
          <Route path="/cart" element={<Cart items={itemsInCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
