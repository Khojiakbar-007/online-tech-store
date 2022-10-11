import React, { memo } from 'react';
import CustomButton from '../shared/button';

import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import Logo from '../../public/Logo.svg';
import CartIcon from './cart-icon';
import UserIcon from './user-icon';
import MobileMenu from './mobile-menu';

const customStyles = {
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '21px',
  borderRadius: '50px',
};

function Header() {
  return (
    <>
      <header id="top-header">
        <div className="container-fluid fb-row">
          <div className="time">
            <span>Mon-Sun: </span>
            0:00 AM - 12:00 PM
          </div>

          <div className="location">Uzbekistan, city Tashkent</div>

          <div className="call-us fb-row">
            <span>Call Us: (00) 1234 5678</span>

            <div className="icons">
              <AiFillFacebook color="white" height="1.6em" />
              <AiFillInstagram color="white" />
            </div>
          </div>
        </div>
      </header>

      <header id="main-header">
        <nav>
          <div className={`container-fluid fb-row`}>
            <div className="logo-and-menu fb-row">
              <div className="logo">
                <CustomButton href="/" type="icon-button">
                  <Logo />
                </CustomButton>
              </div>

              <MobileMenu/>
            </div>

            {/* prettier-ignore */}
            <div className="main-nav">
              <CustomButton href="/catalog/laptops" extraStyles={customStyles}>Laptops</CustomButton>
              <CustomButton href="/catalog/desktops" extraStyles={customStyles}>Desktops</CustomButton>
              <CustomButton href="/catalog/customBuilds" extraStyles={customStyles}>Custom Builds</CustomButton>
              <CustomButton href="/catalog/monitors" extraStyles={customStyles}>Monitors</CustomButton>
            </div>

            <div className="cart-usericon fb-row">
              <CartIcon />
              <UserIcon />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default memo(Header);
