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

function Shop() {
  const itemsArr = [
    {
      id: 1,
      img: Apples,
      name: 'Apples',
      cost: 10,
      kind: 'fruit',
    },

    {
      id: 2,
      img: Artichokes,
      name: 'Artichokes',
      cost: 10,
      kind: 'vegetable',
    },
    {
      id: 3,
      img: Walnuts,
      name: 'Walnuts',
      cost: 10,
      kind: 'nut',
    },
    {
      id: 4,
      img: Pumpkins,
      name: 'Pumpkins',
      cost: 10,
      kind: 'vegetable',
    },
    {
      id: 5,
      img: Cabbages,
      name: 'Cabbages',
      cost: 10,
      kind: 'vegetable',
    },
    {
      id: 6,
      img: Carrots,
      name: 'Carrots',
      cost: 10,
      kind: 'vegetable',
    },
    {
      id: 7,
      img: Grapes,
      name: 'Grapes',
      cost: 10,
      kind: 'fruit',
    },
    {
      id: 8,
      img: Onions,
      name: 'Onions',
      cost: 10,
      kind: 'vegetable',
    },
    {
      id: 9,
      img: Persimmons,
      name: 'Persimmons',
      cost: 10,
      kind: 'fruit',
    },

    {
      id: 10,
      img: Strawberries,
      name: 'Strawberries',
      cost: 10,
      kind: 'fruit',
    },
    {
      id: 11,
      img: Tangerines,
      name: 'Tangerines',
      cost: 10,
      kind: 'fruit',
    },
    {
      id: 12,
      img: Tomatoes,
      name: 'Tomatoes',
      cost: 10,
      kind: 'vegetable',
    },
  ];

  const [itemsWrapperKey, setItemsWrapperKey] = useState(0);
  const [itemsKind, setItemsKind] = useState('all');

  useEffect(() => {
    document.getElementById('shop-menu-all').addEventListener('click', () => {
      if (itemsKind !== 'all') {
        setItemsKind('all');
        updateShopPItemsOnPage();
      }
    });
  });

  useEffect(() => {
    document.getElementById('shop-menu-fruites').addEventListener('click', () => {
      if (itemsKind !== 'fruit') {
        setItemsKind('fruit');
        updateShopPItemsOnPage();
      }
    });
  });

  useEffect(() => {
    document.getElementById('shop-menu-vegies').addEventListener('click', () => {
      if (itemsKind !== 'vegetable') {
        setItemsKind('vegetable');
        updateShopPItemsOnPage();
      }
    });
  });

  useEffect(() => {
    document.getElementById('shop-menu-nuts').addEventListener('click', () => {
      if (itemsKind !== 'nut') {
        setItemsKind('nut');
        updateShopPItemsOnPage();
      }
    });
  });

  function updateShopPItemsOnPage() {
    const currentKey = itemsWrapperKey;
    setItemsWrapperKey(currentKey + 1);
  }

  function renderShopItems(kind) {
    if (kind === 'all') {
      return itemsArr.map((item) => (
        <ShopCard key={item.id} img={item.img} name={item.name} cost={item.cost} />
      ));
    }

    return itemsArr.map((item) => {
      if (item.kind === kind) {
        return <ShopCard key={item.id} img={item.img} name={item.name} cost={item.cost} />;
      }
    });
  }

  return (
    <div className="shop-wrapper">
      <h1>Shop</h1>
      <div className="shop-menu">
        <p className="shop-menu-position" id="shop-menu-all">
          All
        </p>
        <p className="shop-menu-position" id="shop-menu-fruites">
          Fruites
        </p>
        <p className="shop-menu-position" id="shop-menu-vegies">
          Vegetables
        </p>
        <p className="shop-menu-position" id="shop-menu-nuts">
          Nuts
        </p>
      </div>
      <div key={itemsWrapperKey} className="shop-items">
        {/* {itemsArr.map((item) => (
          <ShopCard key={item.id} img={item.img} name={item.name} cost={item.cost} />
        ))} */}
        {renderShopItems(itemsKind)}
      </div>
    </div>
  );
}

export default Shop;
