import ShopCard from './ShopCard';
import Apples from '../images/Apples.jpg';
import Artichokes from '../images/Artichokes.jpg';
import Cabbages from '../images/Cabbages.jpg';
import Carrots from '../images/Carrots.jpg';
import Grapes from '../images/Grapes.jpg';
import Onions from '../images/Onions.jpg';
import Persimmons from '../images/Persimmons.jpg';
import Pumpkins from '../images/Pumpkins.jpg';
import Strawberries from '../images/Strawberries.jpg';
import Tangerines from '../images/Tangerines.jpg';
import Tomatoes from '../images/Tomatoes.jpg';
import Walnuts from '../images/Walnuts.jpg';
import { useState, useEffect } from 'react';

function Shop(props) {
  const itemsArr = [
    {
      id: 1,
      img: Apples,
      name: 'Apples',
      price: 9.99,
      kind: 'fruit',
    },

    {
      id: 2,
      img: Artichokes,
      name: 'Artichoke',
      price: 19.99,
      kind: 'vegetable',
    },
    {
      id: 3,
      img: Walnuts,
      name: 'Walnuts',
      price: 19.99,
      kind: 'nut',
    },
    {
      id: 4,
      img: Pumpkins,
      name: 'Pumpkin',
      price: 2.58,
      kind: 'vegetable',
    },
    {
      id: 5,
      img: Cabbages,
      name: 'Cabbage',
      price: 3.99,
      kind: 'vegetable',
    },

    {
      id: 6,
      img: Grapes,
      name: 'Grapes',
      price: 7.99,
      kind: 'fruit',
    },
    {
      id: 7,
      img: Carrots,
      name: 'Carrots',
      price: 3.39,
      kind: 'vegetable',
    },
    {
      id: 8,
      img: Onions,
      name: 'Yellow Onion',
      price: 1.99,
      kind: 'vegetable',
    },
    {
      id: 9,
      img: Persimmons,
      name: 'Persimmons',
      price: 20.99,
      kind: 'fruit',
    },

    {
      id: 10,
      img: Strawberries,
      name: 'Strawberries',
      price: 17.99,
      kind: 'fruit',
    },
    {
      id: 11,
      img: Tangerines,
      name: 'Tangerine',
      price: 3.99,
      kind: 'fruit',
    },
    {
      id: 12,
      img: Tomatoes,
      name: 'Tomatoe',
      price: 3.99,
      kind: 'vegetable',
    },
  ];

  const [itemsWrapperKey, setItemsWrapperKey] = useState(0);
  const [itemsKind, setItemsKind] = useState('all');

  function changeItemKind(kind) {
    if (itemsKind !== kind) {
      setItemsKind(kind);
      updateShopPItemsOnPage();
    }
  }

  useEffect(() => {
    function changeItemKindToAll() {
      changeItemKind('all');
    }

    document.getElementById('shop-menu-all').addEventListener('click', changeItemKindToAll);
  });

  useEffect(() => {
    function changeItemKindToFruit() {
      changeItemKind('fruit');
    }

    document.getElementById('shop-menu-fruits').addEventListener('click', changeItemKindToFruit);
  });

  useEffect(() => {
    function changeItemKindToVegetable() {
      changeItemKind('vegetable');
    }

    document
      .getElementById('shop-menu-vegies')
      .addEventListener('click', changeItemKindToVegetable);
  });

  useEffect(() => {
    function changeItemKindToNut() {
      changeItemKind('nut');
    }

    document.getElementById('shop-menu-nuts').addEventListener('click', changeItemKindToNut);
  });

  function updateShopPItemsOnPage() {
    const currentKey = itemsWrapperKey;
    setItemsWrapperKey(currentKey + 1);
  }

  function renderShopCard(item) {
    return (
      <ShopCard
        key={item.id}
        id={item.id}
        img={item.img}
        name={item.name}
        price={item.price}
        onClick={props.onClickOnCardButton}
      />
    );
  }

  function renderShopItems(kind) {
    if (kind === 'all') {
      return itemsArr.map((item) => {
        return renderShopCard(item);
      });
    }

    function checkKind(item) {
      return item.kind === kind;
    }

    const filteredArr = itemsArr.filter(checkKind);

    return filteredArr.map((item) => {
      return renderShopCard(item);
    });
  }

  return (
    <div className="shop-wrapper">
      <div className="shop-h2-and-menu-wrapper">
        <h2>Shop</h2>
        <div className="shop-menu">
          <p className="shop-menu-subsection" id="shop-menu-all">
            All
          </p>
          <p className="shop-menu-subsection" id="shop-menu-fruits">
            Fruits
          </p>
          <p className="shop-menu-subsection" id="shop-menu-vegies">
            Vegetables
          </p>
          <p className="shop-menu-subsection" id="shop-menu-nuts">
            Nuts
          </p>
        </div>
      </div>
      <div key={itemsWrapperKey} className="shop-items">
        {renderShopItems(itemsKind)}
      </div>
    </div>
  );
}

export default Shop;
