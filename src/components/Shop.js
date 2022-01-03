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

function Shop() {
  const itemsArr = [
    {
      id: 1,
      img: Apples,
      itemName: 'Apples',
      cost: 10,
    },
    {
      id: 2,
      img: Walnuts,
      itemName: 'Walnuts',
      cost: 10,
    },
    {
      id: 3,
      img: Artichokes,
      itemName: 'Artichokes',
      cost: 10,
    },
    {
      id: 4,
      img: Cabbages,
      itemName: 'Cabbages',
      cost: 10,
    },
    {
      id: 5,
      img: Carrots,
      itemName: 'Carrots',
      cost: 10,
    },
    {
      id: 6,
      img: Grapes,
      itemName: 'Grapes',
      cost: 10,
    },
    {
      id: 7,
      img: Onions,
      itemName: 'Onions',
      cost: 10,
    },
    {
      id: 8,
      img: Persimmons,
      itemName: 'Persimmons',
      cost: 10,
    },
    {
      id: 9,
      img: Pumpkins,
      itemName: 'Pumpkins',
      cost: 10,
    },
    {
      id: 10,
      img: Strawberries,
      itemName: 'Strawberries',
      cost: 10,
    },
    {
      id: 11,
      img: Tangerines,
      itemName: 'Tangerines',
      cost: 10,
    },
    {
      id: 12,
      img: Tomatoes,
      itemName: 'Tomatoes',
      cost: 10,
    },
  ];

  return (
    <div className="shop-wrapper">
      <h1>Shop</h1>
      <div className="shop-items">
        {itemsArr.map((item) => (
          <ShopCard key={item.id} img={item.img} name={item.itemName} cost={item.cost} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
