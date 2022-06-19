import React from "react";
import CustomButton from "../shared/button";
import { Avatar } from "@mui/material";

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import Logo from "../../public/Logo.svg";
import ShoppingCart from "../../public/icons/shopping-cart.svg";
import SearchIcon from "../../public/icons/search.svg";
import { TiUser } from "react-icons/ti";

const customStyles = {
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "21px",
  borderRadius: "50px",
};

function Header() {
  return (
    <header id='main-header'>
      <div style={{ backgroundColor: "black" }} className="top-header">
        <div className="container-fluid">
          <AiFillFacebook color="white" />
          <AiFillInstagram color="white" />
        </div>
      </div>

      <nav>
        <div className={`container-fluid fb-row`}>
          <div className="logo">
            <CustomButton type="icon-button">
              <Logo />
            </CustomButton>
          </div>

          <div className='main-nav'>
            <CustomButton
              /* href="/catalog?type=laptops" */ extraStyles={customStyles}
            >
              Laptops
            </CustomButton>
            <CustomButton extraStyles={customStyles}>Desktops</CustomButton>
            <CustomButton extraStyles={customStyles}>
              Custom Builds
            </CustomButton>
            <CustomButton extraStyles={customStyles}>Monitors</CustomButton>
          </div>

          <div className="search-cart fb-row">
            <CustomButton type="icon-button">
              <SearchIcon />
            </CustomButton>
            <CustomButton type="icon-button">
              <ShoppingCart />
            </CustomButton>
            <Avatar
              sx={{
                backgroundColor: "var(--color-3)",
                width: "36px",
                height: "36px",
              }}
            >
              <TiUser />
            </Avatar>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
