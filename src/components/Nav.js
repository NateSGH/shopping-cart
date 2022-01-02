import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Logo or Name</h3>
      <ul className="nav-links">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
