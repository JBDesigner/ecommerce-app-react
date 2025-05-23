import { Link } from "react-router";
import "./CheckoutHeader.css";
import Logo from "../../assets/images/logo.png";
import MobileLogo from "../../assets/images/mobile-logo.png";
import CheckoutLockIcon from "../../assets/images/icons/checkout-lock-icon.png";

export function CheckoutHeader() {
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src={Logo} />
            <img className="mobile-logo" src={MobileLogo} />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <a className="return-to-home-link" href="/">
            3 items
          </a>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src={CheckoutLockIcon} />
        </div>
      </div>
    </div>
  );
}
