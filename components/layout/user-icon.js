import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { TiUser } from 'react-icons/ti';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { useUserContext } from '../../context-provider';

function UserIcon() {
  const [anchorEl, setAnchorEl] = useState();
  const router = useRouter();

  const { isSignedIn, userDetails } = useUserContext();

  const handleClickOnIcon = e => {
    setAnchorEl(e.target);
  };
  const handleClose = link => {
    if (link) router.push(link);
    setAnchorEl(null);
  };

  return (
    <div className="cart-menu">
      <Avatar
        sx={{
          backgroundColor: isSignedIn ? 'var(--color-8)' : 'var(--color-3)',
          width: '36px',
          height: '36px',
        }}
        onClick={handleClickOnIcon}
      >
        {isSignedIn ? userDetails?.name[0] : <TiUser />}
      </Avatar>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => handleClose()}
        className='user-menu-modal'
      >
        {isSignedIn ? (
          [
            <MenuItem key="fav" onClick={() => handleClose('/favourites')}>
              Favourites
            </MenuItem>,
            // prettier-ignore
            <MenuItem key="logout" onClick={() => { handleClose(''); signOut(); }}>
              Logout
            </MenuItem>,
          ]
        ) : (
          <MenuItem key="log" onClick={() => handleClose('/sign-in-sign-up')}>
            Sign Up & Sign In
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}

export default UserIcon;
