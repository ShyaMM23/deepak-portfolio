import { useState } from "react";
import "./Navbar.css";

const menuItems = [
  {
    number: "01",
    label: "HOME",
    href: "#home",
  },
  {
    number: "02",
    label: "ABOUT",
    href: "#about",
  },
  {
    number: "03",
    label: "WORK",
    href: "#work",
  },
  {
    number: "04",
    label: "SKILLS",
    href: "#skills",
  },
  {
    number: "05",
    label: "CERTIFICATIONS",
    href: "#certifications",
  },
  {
    number: "06",
    label: "ACHIEVEMENTS",
    href: "#achievements",
  },
  {
    number: "07",
    label: "CONTACT",
    href: "#contact",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${menuOpen ? "navbar--open" : ""}`}>

      {/* LOGO */}

      <a
        href="#home"
        className="navbar__logo"
        onClick={closeMenu}
      >
        DS.
      </a>


      {/* MENU BUTTON */}

      <button
        className="navbar__menu"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span>
          {menuOpen ? "CLOSE" : "MENU"}
        </span>

        <span className="navbar__menu-icon">
          {menuOpen ? "×" : "↗"}
        </span>
      </button>


      {/* FULL SCREEN MENU */}

      <nav className="navbar__overlay">

        <div className="navbar__overlay-inner">

          <div className="navbar__overlay-label">
            <span>NAVIGATION</span>
            <span>DEEPAK SHYAM</span>
          </div>


          <div className="navbar__links">

            {menuItems.map((item) => (
              <a
                href={item.href}
                key={item.number}
                onClick={closeMenu}
                className="navbar__link"
              >
                <span className="navbar__link-number">
                  {item.number}
                </span>

                <span className="navbar__link-name">
                  {item.label}
                </span>

                <span className="navbar__link-arrow">
                  ↗
                </span>
              </a>
            ))}

          </div>


          <div className="navbar__overlay-footer">
            <span>
              JAVA · REACT · PYTHON · RAILS
            </span>

            <span>
              INFORMATION TECHNOLOGY · INDIA
            </span>
          </div>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;