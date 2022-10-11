import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { TbMenu2 } from 'react-icons/tb';

import CustomButton from '../shared/button';
import Logo from '../../public/Logo.svg';
import { FiX } from 'react-icons/fi';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const customStyles = {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '21px',
    borderRadius: '50px',
    marginTop: '10px',
  };

  return (
    <div className="mobile-menu">
      {/* prettier-ignore */}
      <CustomButton onClick={openMenu} variant="outlined"
        extraStyles={{width: '38px', padding: '6px', minWidth: 'unset', borderRadius: '12px'}}
      >
        <TbMenu2 color="var(--color-3)" />
      </CustomButton>

      <Drawer
        className="mobile-menu__drawer"
        anchor="left"
        open={isOpen}
        onClose={closeMenu}
      >
        <div className="mobile-menu__drawer__top-logo fb-row">
          <CustomButton
            extraStyles={{ height: '50px' }}
            href="/"
            type="icon-button"
            onClick={closeMenu}
          >
            <Logo />
          </CustomButton>

          <CustomButton
            extraStyles={{ height: '40px' }}
            onClick={() => closeMenu()}
            type="icon-button"
          >
            <FiX />
          </CustomButton>
        </div>

        {/* prettier-ignore */}
        <div className='mobile-menu__drawer__nav'>
          <CustomButton href="/catalog/laptops" onClick={closeMenu} extraStyles={customStyles}>Laptops</CustomButton>
          <CustomButton href="/catalog/desktops" onClick={closeMenu} extraStyles={customStyles}>Desktops</CustomButton>
          <CustomButton href="/catalog/customBuilds" onClick={closeMenu} extraStyles={customStyles}>Custom Builds</CustomButton>
          <CustomButton href="/catalog/monitors" onClick={closeMenu} extraStyles={customStyles}>Monitors</CustomButton>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
