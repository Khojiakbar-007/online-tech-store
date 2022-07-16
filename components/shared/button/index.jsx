import { Button, IconButton } from '@mui/material';
import Linker from './utility';

function CustomButton({
  type = 'button' /* "icon-button" - II */,
  variant = 'text',
  href,
  extraStyles = {},
  children,
  onClick = null,
}) {
  return (
    <Linker href={href}>
      {type === 'button' ? (
        <Button
          sx={{ color: 'black', textTransform: 'capitalize', ...extraStyles }}
          variant={variant}
          component="span"
          onClick={onClick}
        >
          {children}
        </Button>
      ) : (
        <IconButton
          sx={{ color: 'black', textTransform: 'capitalize', ...extraStyles }}
          variant={variant}
          component="span"
          onClick={onClick}
        >
          {children}
        </IconButton>
      )}
    </Linker>
  );
}

export default CustomButton;
