import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { TiUser } from 'react-icons/ti';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';

function UserIcon() {
  const [anchorEl, setAnchorEl] = useState();
  const router = useRouter();

  const handleClickOnIcon = e => {
    setAnchorEl(e.target);
  };
  const handleClose = link => {
    if (link) router.push(link);
    setAnchorEl(null);
  };
  return (
    <div>
      <Avatar
        sx={{
          backgroundColor: 'var(--color-3)',
          width: '36px',
          height: '36px',
        }}
        onClick={handleClickOnIcon}
      >
        <TiUser />
      </Avatar>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={() => handleClose()}>
        <MenuItem onClick={() => handleClose('/favourites')}>
          Favourites
        </MenuItem>
        <MenuItem onClick={() => handleClose('/sign-in-sign-up')}>
          Sign Up & Sign In
        </MenuItem>
        <MenuItem onClick={() => handleClose('')}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default UserIcon;
