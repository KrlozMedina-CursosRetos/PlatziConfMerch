import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/Checkout">
          {/* Checkout */}
          <i class="fa-solid fa-basket-shopping fas"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
