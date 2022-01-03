import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Food Shop</h3>
      <ul className="nav-links">
        <Link className="link" to="/home">
          <li>Home</li>
        </Link>
        <Link className="link" to="/shop">
          <li>Shop</li>
        </Link>
        <Link className="link" to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
