import React from 'react';
import CustomButton from '../shared/button';
import { Avatar } from '@mui/material';

import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import Logo from '../../public/Logo.svg';
import SearchIcon from '../../public/icons/search.svg';
import { TiUser } from 'react-icons/ti';
import CartIcon from './cart-icon';

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
          <div className="left">
            <span>Mon-Sun: </span>
            0:00 AM - 12:00 PM
          </div>

          <div className="center">Uzbekistan, city Tashkent</div>

          <div className="right fb-row">
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
            <div className="logo">
              <CustomButton href="/" type="icon-button">
                <Logo />
              </CustomButton>
            </div>

            {/* prettier-ignore */}
            <div className="main-nav">
              <CustomButton href="/catalog/laptops" extraStyles={customStyles}>Laptops</CustomButton>
              <CustomButton href="/catalog/desktops" extraStyles={customStyles}>Desktops</CustomButton>
              <CustomButton href="/catalog/customBuilds" extraStyles={customStyles}>Custom Builds</CustomButton>
              <CustomButton href="/catalog/monitors" extraStyles={customStyles}>Monitors</CustomButton>
            </div>

            <div className="search-cart fb-row">
              <CustomButton type="icon-button">
                <SearchIcon />
              </CustomButton>
              <CartIcon />
              <Avatar
                sx={{
                  backgroundColor: 'var(--color-3)',
                  width: '36px',
                  height: '36px',
                }}
              >
                <TiUser />
              </Avatar>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
