import "../css/Nav.css";
export default function Nav() {
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="Nike-Logo" />
        </div>
        <div className="nav-options">
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
        </div>
        <div className="login-button">
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
}
