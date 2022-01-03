const ShopCard = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.cost}</p>
    </div>
  );
};

export default ShopCard;
