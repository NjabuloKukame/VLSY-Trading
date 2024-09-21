import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Assuming your styles are in styles.css

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        VLSY Trading
      </Link>

      {/* Hamburger Icon */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <img
          src={menuOpen ? "/close.svg" : "/menu-hamburger.svg"}
          alt={menuOpen ? "Close menu" : "Open menu"}
          className="menu-icon"
        />
      </div>

      {/* Navigation Menu */}
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" className="nav-link" onClick={toggleMenu}>
          About Us
        </Link>
        <Link to="/contact" className="nav-link" onClick={toggleMenu}>
          Contact Us
        </Link>
      </nav>

      {/* Consultation Button (Optional for Mobile View) */}
      <button className="consultation-btn"><Link to="/contact" className="btn-link">Consultation</Link></button>
    </header>
  );
}

export default Header;
