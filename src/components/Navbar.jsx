import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-box">
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="/" className="menu-unit">
              Home
            </a>
          </li>
          <li className="menu-item">
            <a href="/" className="menu-unit">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
