import { FiArrowUpRight } from "react-icons/fi";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">

        {/* TOP */}

        <div className="footer__top">

          <div className="footer__identity">
            <span className="footer__name">
              DEEPAK SHYAM
            </span>

            <span className="footer__role">
              INFORMATION TECHNOLOGY · INDIA
            </span>
          </div>


          <button
            type="button"
            className="footer__top-button"
            onClick={scrollToTop}
          >
            <span>BACK TO TOP</span>

            <span className="footer__arrow">
              <FiArrowUpRight />
            </span>
          </button>

        </div>


        {/* BOTTOM */}

        <div className="footer__bottom">

          <span>
            © 2026 DEEPAK SHYAM
          </span>

          <span>
            BUILT WITH REACT · GSAP
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;