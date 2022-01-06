import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <Link className="link" to="/home">
        <h3>Fresh Market</h3>
      </Link>
      <ul className="nav-links">
        <Link className="link" to="/home">
          <li>Home</li>
        </Link>
        <Link className="link" to="/shop">
          <li>Shop</li>
        </Link>
        <Link className="link" to="/cart">
          <li>Cart ({props.cartQuantity})</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
